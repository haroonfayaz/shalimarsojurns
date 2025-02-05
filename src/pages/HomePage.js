// src/pages/HomePage.js
import React, { useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/images/dodhpather.jpg";
import { useNavigate } from "react-router-dom";
import PackageHome from "../components/PackageHome";
import LocationsHome from "../components/LocationsHome";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "block" }}>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "50px" },
              color: "white",
              fontWeight: 700,
              fontFamily: "Poppins, sans-serif",
              "&:hover": {
                color: "white",
              },
            }}
          >
            Shalimar Sojourns
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: { xs: "14px", md: "22px" } }}
          >
            Guiding to tranquility{" "}
          </Typography>
          <Button
            onClick={handleRegisterClick}
            sx={{
              mt: 2,
              backgroundColor: "#270082",
              height: "60px",
              width: "180px",
              fontWeight: 700,
              color: "white",
              borderRadius: "8px",
              "&:hover": {
                color: "white",
                fontSize: "20px",
                backgroundColor: "#8CC0DE",
                transform: "scale(1.1)",
                width: "230px",
              },
            }}
          >
            Register Now
          </Button>
        </Box>
      </Box>
      <PackageHome />
      <LocationsHome />
    </>
  );
};

export default HomePage;
