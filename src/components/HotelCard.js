import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/system";

// Styled components for overlay and text
const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "8px",
});

const CardContentStyled = styled(CardContent)({
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: "8px",
});

const RatingContainer = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  padding: "8px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
});

const HotelCard = ({ data }) => {
  const { imageUrl, duration, title, priceRange, hotelStars } = data;

  return (
    <Card
      sx={{
        width: "100%",
        height: 200,
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <ImageContainer>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Overlay />
        <RatingContainer>
          <StarIcon sx={{ color: "yellow", fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{ color: "white", marginLeft: 1, fontWeight: 700 }}
          >
            {hotelStars}
          </Typography>
        </RatingContainer>
        <CardContentStyled>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "white", display: "flex", alignItems: "center" }}
          >
            {priceRange}({duration})
          </Typography>
        </CardContentStyled>
      </ImageContainer>
    </Card>
  );
};

export default HotelCard;
