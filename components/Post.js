import styles from "./Post.module.scss";
import { StructuredText } from "react-datocms";

const Post = ({ title, publishDate, content }) => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>{publishDate}</p>
      </div>
      <div className={styles.content}>
        <StructuredText data={content} />
      </div>
      <div className={styles.readMore}>
        <span>Czytaj więcej</span>
      </div>
    </div>
  );
};

export default Post;