import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PublicIcon from "@mui/icons-material/Public";

const CustomBox = styled(Box)(({ theme, color }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "200px",
  height: "100px",
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: color,
  color: theme.palette.getContrastText(color),
  textAlign: "center",
}));

const ServicesCard = () => {
  return (
    <Box mt="4rem">
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
          fontWeight: "bold",
        }}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "#B9F3FC",
            borderRadius: "8px",
            display: "inline", // Ensure the background color wraps around the text only
            padding: "0.4rem 0.8rem", // Optional: Adds some padding around the text
          }}
        >
          Services Available for You
        </Box>
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={2} gap={2}>
        <CustomBox color="#B9F3FC">
          <FlightIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Flights
          </Typography>
        </CustomBox>
        <CustomBox color="#B9F3FC">
          <HotelIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Hotels
          </Typography>
        </CustomBox>
        <CustomBox color="#B9F3FC">
          <FastfoodIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Snacks
          </Typography>
        </CustomBox>
        <CustomBox color="#B9F3FC">
          <PublicIcon fontSize="large" sx={{ fontSize: 40 }} />
          <Typography variant="caption" sx={{ fontSize: 16 }}>
            Travel
          </Typography>
        </CustomBox>
      </Box>
    </Box>
  );
};

export default ServicesCard;
