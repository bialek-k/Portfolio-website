import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";

import { request } from "../lib/datocms";

import Image from "next/image";
import sep1 from "../assets/Background_1.svg";

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
      <Image src={sep1} />
      <ProjectsList datodata={props} />
    </>
  );
}
