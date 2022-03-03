import styles from "../styles/blog.module.scss";

import { gql, GraphQLClient } from "graphql-request";

const blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogPost}>
        <div className={styles.title}>
          <h1>Czas rekrutacji</h1>
          <p>02.03.2022</p>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea totam
            consectetur quibusdam, vitae aliquid non exercitationem fugit
            eveniet iusto? Veniam repellat qui rerum ipsam aliquid sapiente
            nesciunt voluptates nisi, non consequatur vel similique, aut
            perferendis consequuntur soluta ad possimus fugiat cum in aspernatur
            commodi odio voluptate. Et quaerat laboriosam quisquam, numquam
            voluptas quas veniam. Minus, sint! Veniam
          </p>
        </div>
        <div className={styles.readMore}>
          <span>Czytaj więcej</span>
        </div>
      </div>
      <div className={styles.blogPost}>
        <div className={styles.title}>
          <h1>Jak dostałem pracę</h1>
          <p>02.03.2022</p>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea totam
            consectetur quibusdam, vitae aliquid non exercitationem fugit
            eveniet iusto? Veniam repellat qui rerum ipsam aliquid sapiente
            nesciunt voluptates nisi, non consequatur vel similique, aut
            perferendis consequuntur soluta ad possimus fugiat cum in aspernatur
            commodi odio voluptate. Et quaerat laboriosam quisquam, numquam
            voluptas quas veniam. Minus, sint! Veniam
          </p>
        </div>
        <div className={styles.readMore}>
          <span>Czytaj więcej</span>
        </div>
      </div>
      <div className={styles.blogPost}>
        <div className={styles.title}>
          <h1>Jak zostałem wyrzucony</h1>
          <p>02.03.2022</p>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea totam
            consectetur quibusdam, vitae aliquid non exercitationem fugit
            eveniet iusto? Veniam repellat qui rerum ipsam aliquid sapiente
            nesciunt voluptates nisi, non consequatur vel similique, aut
            perferendis consequuntur soluta ad possimus fugiat cum in aspernatur
            commodi odio voluptate. Et quaerat laboriosam quisquam, numquam
            voluptas quas veniam. Minus, sint! Veniam
          </p>
        </div>
        <div className={styles.readMore}>
          <span>Czytaj więcej</span>
        </div>
      </div>
    </div>
  );
};

const query = gql`
  query {
    allPosts {
      id
      title
      content
    }
  }
`;

export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer ef2f1084a7d36b511396d1678112db",
    },
  });

  const posts = await graphQLClient.request(query);
  console.log(posts);
  return {
    props: posts,
  };
}

// export async function getStaticPaths() {
//   const endpoint = "https://graphql.datocms.com/";
//   const graphQLClient = new GraphQLClient(endpoint, {
//     headers: {
//       "content-type": "application/json",
//       authorization: "Bearer ef2f1084a7d36b511396d1678112db",
//     },
//   });

//   const posts = await graphQLClient.request(query);
//   console.log(posts);
// }

export default blog;
