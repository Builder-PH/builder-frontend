import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await axios.get(
        "https://builderv2-api.herokuapp.com/api/services/"
      );

      setServices(data);
    };

    fetchServices();
  });

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.centeringContainer}>
          <div className={styles.cardContainer}>
            {services.map((service, key) => {
              return <CardComponent key={key} service={service} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
