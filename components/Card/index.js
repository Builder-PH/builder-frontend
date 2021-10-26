import React from "react";
import Link from "next/link";

//STYLES IMPORTS
import styles from "./Card.module.css";

// Material UI Imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RatingCmp from "../RatingCmp";
import { ProductionQuantityLimits } from "@mui/icons-material";

import StarIcon from "@mui/icons-material/Star";

const CardComponent = ({ service }) => {
  return (
    <Link href={`/services/${service.slug}`} passHref>
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardMedia component="img" height="140" image="" alt="Listing" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.serviceType}
          </Typography>
          <Typography>
            <RatingCmp
              value={service.rating}
              text={`${service.numReviews} reviews`}
            />
          </Typography>
          {/* <Typography>{service.rating}</Typography> */}
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        {/* <RatingCmp /> */}
      </Card>
    </Link>
  );
};

export default CardComponent;
