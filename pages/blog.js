import Post from "../components/Post";
import styles from "../styles/blog.module.scss";

import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    content {
      value
    }
    publishDate
    shortDescription
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

const blog = (props) => {
  const posts = props.data.allArticles;
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <Post
            key={post.title}
            title={post.title}
            publishDate={post.publishDate}
            content={post.content}
            shortDescription={post.shortDescription}
          />
        );
      })}
    </div>
  );
};

export default blog;
