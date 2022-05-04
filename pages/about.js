import { StructuredText, Image } from "react-datocms";

import styles from "../styles/about.module.scss";

import { request } from "../lib/datocms";

const About = (props) => {
  const article = props.data.allAbouts[0].content;
  return (
    <section className={styles.container}>
      <StructuredText
        data={article}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case "ImageRecord":
              return (
                <div className={styles.photo}>
                  <Image
                    data={record.image.responsiveImage}
                    layout="intrinsic "
                    alt=""
                  />
                </div>
              );
            default:
              return null;
          }
        }}
      />
    </section>
  );
};

export async function getStaticProps() {
  const data = await request({
    query: `
    query MyQuery {
      allAbouts {
        id
        content {
          value
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
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
        }
        title
      }
    }
    
    `,
  });

  return {
    props: { data },
  };
}
export default About;
