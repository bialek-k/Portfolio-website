import classes from "../styles/blog.module.scss";

const blog = () => {
  return (
    <div className={classes.container}>
      <div className={classes.blogPost}>
        <div className={classes.title}>
          <h1>Czas rekrutacji</h1>
          <p>02.03.2022</p>
        </div>
        <div className={classes.content}>
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
        <div className={classes.readMore}>
          <span>Czytaj więcej</span>
        </div>
      </div>
      <div className={classes.blogPost}>
        <div className={classes.title}>
          <h1>Jak dostałem pracę</h1>
          <p>02.03.2022</p>
        </div>
        <div className={classes.content}>
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
        <div className={classes.readMore}>
          <span>Czytaj więcej</span>
        </div>
      </div>
      <div className={classes.blogPost}>
        <div className={classes.title}>
          <h1>Jak zostałem wyrzucony</h1>
          <p>02.03.2022</p>
        </div>
        <div className={classes.content}>
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
        <div className={classes.readMore}>
          <span>Czytaj więcej</span>
        </div>
      </div>
    </div>
  );
};

export default blog;
