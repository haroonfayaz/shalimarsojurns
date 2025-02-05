import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import l1 from "../assets/images/srinagar.jpg";
import l2 from "../assets/images/gulmarg.jpeg";
import l3 from "../assets/images/pahalgam.jpeg";
import l4 from "../assets/images/sonamarg.jpeg";
import l5 from "../assets/images/gurez.jpg";
import l6 from "../assets/images/ladakh.jpg";
import l7 from "../assets/images/aharbal.jpg";
import l8 from "../assets/images/dodhpather.jpg";
import LocationCard from "./LocationCard";

const LocationsHome = () => {
  const locationData = [
    {
      imageUrl: l1,
      title: "Srinagar - Jewel of Kashmir",
    },
    {
      imageUrl: l2,
      title: "Gulmarg - Meadow of Flowers",
    },
    {
      imageUrl: l3,
      title: "Pahalgam - Valley of Shepherds",
    },
    {
      imageUrl: l4,
      title: "Sonamarg - Golden Meadows",
    },
    {
      imageUrl: l5,
      title: "Gurez - Land of the Dard-Shins",
    },
    {
      imageUrl: l6,
      title: "Ladakh - Land of High Passes",
    },
    {
      imageUrl: l7,
      title: "Aharbal - Waterfall Retreat",
    },
    {
      imageUrl: l8,
      title: "Doodhpathri - Valley of Milk",
    },
  ];

  return (
    <Box mt="6rem" m={2}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            color="primary"
            sx={{
              textAlign: "center",
              mt: {
                xs: 1,
                sm: 1,
                md: 2,
              },
              mb: {
                xs: 2,
                sm: 3,
                md: 4,
              },
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#B9F3FC",
                borderRadius: "8px",
                display: "inline",
                padding: "0.4rem 0.8rem",
              }}
            >
              Popular Destinations
            </Box>
          </Typography>
        </Grid>
        {locationData.map((data, index) => (
          <Grid item xs={12} md={3} key={index} px={2}>
            <LocationCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationsHome;
