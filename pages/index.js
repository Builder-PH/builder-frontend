import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

//MATERIAL UI IMPORTS
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardComponent from "../components/Card";
import SearchBanner from "../components/SearchBanner";

//DATA IMPORTS
import data from "../assets/data/services.js";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <SearchBanner />
      <div className={styles.mainContainer}>
        <CssBaseline />

        <Typography component="h1" variant="h5">
          Home Pageee
        </Typography>
        <div className={styles.centeringContainer}>
          <div className={styles.cardContainer}>
            {data.services.map((service, key) => {
              return <CardComponent key={key} service={service} />;
            })}
          </div>
        </div>
      </div>

      <Copyright sx={{ mt: 8, mb: 4 }} />

      <Footer />
    </ThemeProvider>
  );
}
