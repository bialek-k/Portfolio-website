import Hero from "../components/Hero";
import Projects from "../components/Projects";

import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allProjects {
    title
  }
}

`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });

  console.log(data);

  return {
    props: { data },
  };
}

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}
