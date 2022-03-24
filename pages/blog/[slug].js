import { request } from "../../lib/datocms";
import styles from "../../components/Post.module.scss";
import { StructuredText } from "react-datocms";

const BlogPost = ({ postData }) => {
  console.log(postData);
  return (
    <div className={styles.blogPost}>
      <div className={styles.title}>
        <h1>{postData.title}</h1>
        <p>{postData.publishDate}</p>
      </div>
      <div className={styles.content}>
        <StructuredText data={postData.content} />
      </div>
    </div>
  );
};

export default BlogPost;

const PATHS_QUERY = `
query MyQuery {
  allArticles {
    slug
  }
}

`;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: false,
  };
};

const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    content {
      value
    }
    title
    publishDate
    slug
  }
}
`;

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  });

  return {
    props: {
      postData: post.article,
    },
  };
};
