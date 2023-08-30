import styles from "./page.module.css";
import axios from "axios";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Image from "next/image";

const getData = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 }
  });

  if (!response.ok) {
    // throw new Error("Failed to fetch data");
    return PageNotFoundError();
  }

  const data = response.data;
  return data;
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
};
export default BlogPost;