import { request } from "../../lib/datocms";

import { StructuredText, Image } from "react-datocms";
import Link from "next/link";
import styles from "/styles/blogPost.module.scss";

const BlogPost = ({ postData }) => {
  return (
    <>
      <div className={styles.blogPost}>
        <div className={styles.title}>
          <h1>{postData.title}</h1>
          <p>{postData.publishDate}</p>
          <Image
            data={postData.cover.responsiveImage}
            className={styles.coverImage}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <div className={styles.content}>
          <StructuredText
            data={postData.content}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "ImageRecord":
                  return <Image data={record.image.responsiveImage} />;
                default:
                  return null;
              }
            }}
          />
        </div>
      </div>
      <div className={styles.action}>
        <Link passHref href={"/blog/"}>
          <a>Wszystkie posty</a>
        </Link>
      </div>
    </>
  );
};

export default BlogPost;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: `
    query MyQuery {
      allArticles {
        slug
      }
    }
    
    `,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: `
    query MyQuery($slug: String) {
      article(filter: {slug: {eq: $slug}}) {
        content {
          value
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
               responsiveImage {
                alt
                base64
                bgColor
                title
                aspectRatio
                height
                sizes
                src
                srcSet
                webpSrcSet
                width
                } 
              }
            }
          }
        }
        title
        publishDate
        slug
        cover {
          responsiveImage {
            alt
            base64
            bgColor
            title
            aspectRatio
            height
            sizes
            src
            srcSet
            webpSrcSet
            width
          }
        }
      }
    }
    `,
    variables: { slug: params.slug },
  });

  return {
    props: {
      postData: post.article,
    },
    revalidate: 60,
  };
};
