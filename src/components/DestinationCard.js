import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const DestinationCard = ({ data }) => {
  const { heading, text, img1, img2, tagLine } = data;
  return (
    <Box sx={{ margin: { xs: "2rem 1rem", sm: "4rem 2rem", md: "4rem 6rem" } }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "start" } }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                paddingBottom: "1rem",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              {heading}
              <Typography
                variant="h6"
                component="span"
                sx={{
                  display: "block",
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  color: "text.secondary",
                }}
              >
                {tagLine}
              </Typography>
            </Typography>

            <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
              {text}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            component="img"
            alt="img"
            src={img1}
            sx={{
              width: { xs: "100%", sm: "49%" },
              height: { xs: "250px", md: "350px" },
              objectFit: "cover",
              borderRadius: "6px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
              marginBottom: { xs: "1rem", sm: 0 },
            }}
          />
          <Box
            component="img"
            alt="img"
            src={img2}
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: { xs: 0, md: "-10%" },
              right: 0,
              width: { xs: "100%", sm: "49%" },
              height: { xs: "250px", md: "350px" },
              objectFit: "cover",
              borderRadius: "6px",
              boxShadow: "-1px 1px 62px -18px rgba(0, 0, 0, 0.19)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DestinationCard;
