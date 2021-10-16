import React, { useState, useEffect } from "react";
import Link from "next/link";

import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "../Dropdown";

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

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return size;
};

const Navbar = () => {
  const [height, width] = useWindowSize();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Builder PH
          </Typography>
          {/* <Dropdown /> */}
          {width <= 600 ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {navbar_list.map((item, key) => {
                return (
                  <Link key={key} href={item.link} passHref>
                    <Typography mr={2} className={styles.links}>
                      {item.title}
                    </Typography>
                  </Link>
                );
              })}
              <Button
                color="inherit"
                variant="outlined"
                className={styles.loginBtn}
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
