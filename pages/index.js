import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";

import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allProjects {
    title
    description
    id
    technology {
      value
    }
    thumbnail {
      url
    }
    github
    demo
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

export default function Home(props) {
  return (
    <>
      <Hero />
      <ProjectsList datodata={props} />
    </>
  );
}
