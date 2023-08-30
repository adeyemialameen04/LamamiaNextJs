import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";


const getData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 }
  });

  if (!response.ok) {
    // throw new Error("Failed to fetch data");
    console.log("error");
  }

  const data = response.data;
  return data;
};


const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
            <p>{item.img}</p>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Blog;