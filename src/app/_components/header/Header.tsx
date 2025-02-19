import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/_components/header/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/globe.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">accueil</Link>
          </li>
          <li>
            <Link href="/about">a propos</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <button>connexion</button>
    </div>
  );
};

export default Header;
