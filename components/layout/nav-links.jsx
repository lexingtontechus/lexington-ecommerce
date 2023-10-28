import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="https://www.medusa-commerce.com/" className={styles.navBtn} target="_blank" rel="noreferrer">
          Medusa
      </Link>
      <Link href="https://nextjs.org/docs/getting-started/" className={styles.navBtn} target="_blank" rel="noreferrer">
          Next.js
      </Link>
      <Link href="https://stripe.com/docs/" className={styles.navBtn} target="_blank" rel="noreferrer">
          Stripe
      </Link>
    </div>
  );
};

export default NavLinks;
