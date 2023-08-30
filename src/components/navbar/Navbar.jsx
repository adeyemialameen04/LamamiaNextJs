"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";


const Navbar = () => {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamia</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {
          links.map(link => (
            <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
          ))
        }
        <button className={styles.logout} onClick={() => console.log("logout")}>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;