import React from "react";
import { useRouter } from "next/router";

//DATA IMPORTS
import data from "../../assets/data/services";

//COMPONENT IMPORTS
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = data.services.find((a) => a.slug === slug);

  if (!service) {
    return <p>Service not found</p>;
  }
  return (
    <div>
      <Navbar />
      <h1>Services</h1>
      <p>{service.serviceType}</p>
      <p>{service.description}</p>
      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
