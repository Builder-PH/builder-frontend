import React, { useState, useEffect } from "react";
import Link from "next/link";

import Hamburger from "hamburger-react";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import Button from "../Button";
import styles from "./Navbar.module.css";

const navbar_list = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/services",
    title: "Services",
  },
  {
    id: 3,
    link: "/help-center",
    title: "Help Center",
  },
  {
    id: 2,
    link: "/about",
    title: "About",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <header>
      <div className={styles.topBar}>
        <div>
          <h1>Builder</h1>
        </div>
        <nav
          className={[
            styles.overlay,
            click ? styles.bounceIn : styles.bounceOut,
          ]}
        >
          <div className={styles.expanded}>
            {navbar_list.map((item, key) => {
              return (
                <Link href={item.link} passHref key={key}>
                  <h3 className={styles.expandedNav}>{item.title}</h3>
                </Link>
              );
            })}
            <Link href="/login" passHref>
              <h3 className={styles.loginBtn}>Login</h3>
            </Link>
          </div>
          <div
            className={[
              click ? styles.overlayContent : styles.overlayContentHidden,
            ]}
          >
            {navbar_list.map((item, key) => {
              return (
                <Link href={item.link} passHref key={key}>
                  <h3 className={styles.links}>{item.title}</h3>
                </Link>
              );
            })}
          </div>
        </nav>
        <div className={styles.burger}>
          <Hamburger toggled={click} toggle={setClick} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
