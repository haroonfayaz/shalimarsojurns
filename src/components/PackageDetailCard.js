import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const PackageDetailCard = ({ data }) => {
  const { imageUrl, title, priceRange, duration, hotelStars, itinerary } = data;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mb: 4,
        height: "auto",
        maxWidth: "100%",
        padding: "20px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: "40%" },
          height: { xs: "200px", md: "300px" },
          objectFit: "cover",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: { md: "8px" },
          borderBottomRightRadius: { xs: "8px", md: "0" },
        }}
        image={imageUrl}
        alt={title}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
        >
          {priceRange} | {duration} | {hotelStars}
        </Typography>
        <Box mt={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Itinerary:
          </Typography>
          <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: 0 }}>
            {itinerary.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PackageDetailCard;
