import React from "react";
import Link from "next/link";

//COMPONENTS
import Button from "../Button";

//CSS IMPORTS
import styles from "./Footer.module.css";

//ICONS
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const social_links = [
  {
    id: 1,
    link: "https://www.facebook.com",
    icon: FacebookIcon,
  },
  {
    id: 2,
    link: "https://www.instagram.com",
    icon: InstagramIcon,
  },
  {
    id: 3,
    link: "https://www.linkedin.com",
    icon: LinkedInIcon,
  },
];

const about_list = [
  {
    id: 1,
    link: "#",
    title: "About Us",
  },
  {
    id: 1,
    link: "#",
    title: "List your services",
  },
  {
    id: 3,
    link: "#",
    title: "Terms and Conditions",
  },
  {
    id: 4,
    link: "#",
    title: "Vendors",
  },
];

const support_list = [
  {
    id: 1,
    link: "#",
    title: "Privacy",
  },
  {
    id: 2,
    link: "#",
    title: "Terms and Conditions",
  },
  {
    id: 3,
    link: "#",
    title: "Security",
  },
  {
    id: 4,
    link: "#",
    title: "Help Center",
  },
];

const blog_list = [
  {
    id: 1,
    link: "#",
    title: "Home",
  },
  {
    id: 2,
    link: "#",
    title: "Business",
  },
  {
    id: 3,
    link: "#",
    title: "Maintenance",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>
            <div className={styles.socialIcons}>
              {/* {social_links.map((item, key) => {
                return (
                  <a href={item.link} key={key} className={styles.icons}>
                    Hello
                  </a>
                );
              })} */}
              <a href="#" className={styles.icons}>
                <LinkedInIcon className={styles.iconStyle} />
              </a>
              <a href="#" className={styles.icons}>
                <FacebookIcon className={styles.iconStyle} />
              </a>
              <a href="#" className={styles.icons}>
                <InstagramIcon className={styles.iconStyle} />
              </a>
            </div>
          </div>

          <div className={styles.logoContainer}>
            <a href="maito:builderph@gmail.com">builderph@gmail.com</a>
            <div className={styles.logo}>Builder</div>
            <p>© 2021 Builder PH. All Rights Reserved.</p>
          </div>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.linkCols}>
            <h3>About</h3>
            {about_list.map((item, key) => {
              return (
                <Link href={item.link} key={key}>
                  <p className={styles.linkNav}>{item.title}</p>
                </Link>
              );
            })}
          </div>
          <div className={styles.linkCols}>
            <h3>Support</h3>
            {support_list.map((item, key) => {
              return (
                <Link href={item.link} key={key}>
                  <p className={styles.linkNav}>{item.title}</p>
                </Link>
              );
            })}
          </div>
          <div className={styles.linkCols}>
            <h3>Blog</h3>
            {blog_list.map((item, key) => {
              return (
                <Link href={item.link} key={key}>
                  <p className={styles.linkNav}>{item.title}</p>
                </Link>
              );
            })}
          </div>
          <div className={styles.linkCols}>
            <h3>Stay updated with us</h3>
            <input
              type="text"
              placeholder="Your email address"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Your name"
              className={styles.input}
            />
            <Button primary>Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
