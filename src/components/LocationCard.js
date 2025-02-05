import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Styled components for overlay and hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%", // Make the card width responsive
  height: "auto", // Adjust height automatically
  maxWidth: 300, // Set a maximum width
  borderRadius: "8px",
  overflow: "hidden",
  position: "relative",
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const CardMediaStyled = styled(CardMedia)({
  height: "150px", // Set a fixed height for images but adjust for responsiveness
  width: "100%", // Make the image width responsive
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
});

const TitleOverlay = styled(CardContent)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  textAlign: "center",
  padding: "8px",
  borderRadius: "0 0 8px 8px",
});

const LocationCard = ({ data }) => {
  const { imageUrl, title } = data;

  return (
    <Box p={2} xs={12} sm={6} md={3}>
      <StyledCard>
        <CardMediaStyled component="img" image={imageUrl} alt={title} />
        <TitleOverlay>
          <Typography
            variant="body2"
            component="div"
            alignItems="center"
            display="flex"
          >
            <LocationOnIcon
              sx={{ color: "blue", fontSize: 20, marginRight: 0.5 }}
            />
            {title}
          </Typography>
        </TitleOverlay>
      </StyledCard>
    </Box>
  );
};

export default LocationCard;
