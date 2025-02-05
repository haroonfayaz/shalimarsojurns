import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import vision from "../assets/images/vision.jpg";
const AboutPage = () => {
  return (
    <Box sx={{ margin: { xs: "2rem 1rem", sm: "4rem 2rem", md: "6rem 8rem" } }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
        }}
      >
        About Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            We are a dedicated travel company passionate about helping you
            explore the beauty of Kashmir. Our packages are carefully crafted to
            offer the best experiences, whether you're looking for adventure,
            relaxation, or cultural immersion. With years of experience, we know
            how to make your trip unforgettable.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={vision}
            alt="About Us"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ marginTop: "4rem" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            Our mission is to showcase the unparalleled beauty of Kashmir to the
            world. We aim to provide exceptional service, ensuring that every
            aspect of your trip is seamless and enjoyable. From accommodations
            to guided tours, we take care of everything so you can focus on
            making memories.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontSize: "1.1rem" }}
          >
            We offer personalized packages tailored to your preferences. Our
            local expertise and commitment to quality ensure that you have the
            best possible experience. Whether you're a solo traveler, a couple,
            or a family, we have something special for you.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
