import React from "react";

//MATERIAL UI IMPORTS
import TextField from "@mui/material/TextField";

//STYLES
import styles from "./SearchBanner.module.css";

//COMPONENT IMPORTS
import Button from "../Button";

const SearchBanner = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <h1>Get the best services for your beloved home.</h1>
          {/* <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            className={styles.input}
          /> */}
          <div className={styles.inputs}>
            <input className={styles.input} placeholder="Service" />
            <input className={styles.input} placeholder="Location" />
            <Button primary><p>Search</p></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
