import { request } from "../../lib/datocms";
import { StructuredText, Image } from "react-datocms";
import Link from "next/link";
import styles from "/styles/blogPost.module.scss";

const BlogPost = ({ postData }) => {
  const paragraphs = postData.content.value.document.children;
  console.log(postData.content);
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
          {paragraphs.map((p, idx) => (
            <p className={styles.paragraph} key={idx + 1}>
              {p.children[0].value}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.action}>
        <Link passHref href={"/blog/"}>
          <button>
            <a href={`/blog/`}>Wszystkie posty</a>
          </button>
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
