import React, { useState, useEffect } from "react";
import Link from "next/link";

import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "../Dropdown";

const services_list = [
  {
    id: 1,
    link: "/pest-control",
    title: "Pest Control",
  },
  {
    id: 2,
    link: "/refrigerator-and-aircon",
    title: "Refrigerator and Aircon",
  },
  {
    id: 3,
    link: "/plumbing",
    title: "Plumbing",
  },
  {
    id: 4,
    link: "/electrical-services",
    title: "Electrical Services",
  },
];

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
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Builder PH
          </Typography>
          {/* <Dropdown /> */}
          {navbar_list.map((item, key) => {
            return (
              <Link key={key} href={item.link} passHref>
                <Typography mr={2}>{item.title}</Typography>
              </Link>
            );
          })}
          <Button color="inherit" variant="outlined">
            Login
          </Button>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      
    </Box>
  );
};

export default Navbar;
