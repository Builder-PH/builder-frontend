import React from "react";
import Head from "next/head";

//MATERIAL UI IMPORTS
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

//COMPONENT IMPORTS
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Builder</title>
      </Head>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
