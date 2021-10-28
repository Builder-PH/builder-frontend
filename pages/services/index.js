import React from "react";

//COMPONENT IMPORTS
import CardComponent from "../../components/Card";
import Layout from "../../components/Layout";

//DATA IMPORTS
// import services from "../../assets/data/services";
import data from "../../assets/data/services";

//CSS IMPORTS
import styles from "../../styles/Services.module.css";
import { ThemeProvider } from "styled-components";

const ServicesPage = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.centeringContainer}>
          <div className={styles.cardContainer}>
            {data.services.map((service, key) => {
              return <CardComponent key={key} service={service} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
