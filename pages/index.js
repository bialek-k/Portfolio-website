import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";

import { request } from "../lib/datocms";

export async function getStaticProps() {
  const data = await request({
    query: `
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
    `,
  });

  return {
    props: { data },
  };
}

export default function Home(props) {
  return (
    <>
      <Hero />
      <p>some</p>
      <ProjectsList datodata={props} />
    </>
  );
}
