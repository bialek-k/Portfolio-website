import styles from "../styles/blog.module.scss";
import Link from "next/link";
import { Image } from "react-datocms";

import { request } from "../lib/datocms";

const blog = (props) => {
  const posts = props.data.allArticles;
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className={styles.blogPost}>
              <div className={styles.title}>
                <p>{post.publishDate}</p>
                <h1>{post.title}</h1>
                <Image
                  data={post.cover.responsiveImage}
                  className={styles.cover}
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div className={styles.content}>
                <p className={styles.shortDesc}>{post.shortDescription}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    content {
      value
    }
    publishDate
    shortDescription
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
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: { data },
  };
}

export default blog;
