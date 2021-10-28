import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

import styles from "../../styles/ServiceDetail.module.css";

//MATERIAL UI IMPORTS
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//DATA IMPORTS
import data from "../../assets/data/services";

//COMPONENT IMPORTS
import Layout from "../../components/Layout";
import RatingCmp from "../../components/RatingCmp";

const ServiceDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const service = data.services.find((a) => a.slug === slug);

  if (!service) {
    return <p>Service not found</p>;
  }
  return (
    <div className={styles.container}>
      <Layout>
        <NextLink href="/services" passHref>
          <Link>
            <Typography>
              <div>
                <ArrowBackIcon /> Back to Services
              </div>
            </Typography>
          </Link>
        </NextLink>
        <div className={styles.detailsContainer}>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              {/* <Image
            src={service.image}
            alt={service.serviceType}
            width={640}
            height={640}
            layout="responsive"
          /> */}
            </Grid>
            <Grid item md={3} xs={12}>
              <List>
                <ListItem>
                  <Typography component="h1">{service.serviceType}</Typography>
                </ListItem>
                <ListItem>
                  <Typography>Category: {service.category}</Typography>
                </ListItem>
                <ListItem>
                  <RatingCmp
                    value={service.rating}
                    text={`${service.numReviews}`}
                  />
                </ListItem>
                <ListItem>
                  <Typography>
                    Service Description: {service.description}
                  </Typography>
                </ListItem>
              </List>
            </Grid>

            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Average Price:</Typography>
                      </Grid>
                      <Grid>
                        <Typography>Php 1000–2000</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Company:</Typography>
                      </Grid>
                      <Grid>
                        <Typography>Repairs Shop</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Related Services:</Typography>
                      </Grid>
                      <Grid>
                        <Typography>Airconditioer, Plumbing</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Button fullWidth variant="contained">
                      Request Quote
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button fullWidth variant="contained">
                      <FavoriteBorderIcon />
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default ServiceDetailsPage;
