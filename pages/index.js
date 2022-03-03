import Hero from "../components/Hero";
import Projects from "../components/Projects";

import { gql, GraphQLClient } from "graphql-request";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

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
