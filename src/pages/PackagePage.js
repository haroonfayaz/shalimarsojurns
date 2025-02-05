import React from "react";
import PackageDetailCard from "../components/PackageDetailCard";
import { Box, Divider, Grid, Typography } from "@mui/material";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";

const PackagePage = () => {
  const detailedPackageData = [
    {
      id: 1,
      title: "Bronze Package",
      imageUrl: p1,
      priceRange: "₹10,000 - ₹12,000",
      duration: "4D/3N",
      hotelStars: "3 Star Hotel",
      itinerary: [
        "Day 1: Arrival in Srinagar, check-in at the hotel, and explore the local markets.",
        "Day 2: Visit the Mughal Gardens and Shankaracharya Temple.",
        "Day 3: Full-day excursion to Gulmarg, enjoy a gondola ride.",
        "Day 4: Departure from Srinagar after breakfast.",
      ],
    },
    {
      id: 2,
      title: "Silver Package",
      imageUrl: p2,
      priceRange: "₹20,000 - ₹28,000",
      duration: "5D/4N",
      hotelStars: "4 Star Hotel",
      itinerary: [
        "Day 1: Arrival in Srinagar, check-in at the hotel, and Shikara ride on Dal Lake.",
        "Day 2: Visit the Mughal Gardens and Pari Mahal.",
        "Day 3: Full-day excursion to Pahalgam, explore Betaab Valley.",
        "Day 4: Visit Gulmarg, enjoy a gondola ride.",
        "Day 5: Departure from Srinagar after breakfast.",
      ],
    },
    {
      id: 3,
      title: "Gold Package",
      imageUrl: p3,
      priceRange: "₹40,000 - ₹70,000",
      duration: "6D/5N",
      hotelStars: "5 Star Hotel",
      itinerary: [
        "Day 1: Arrival in Srinagar, check-in at the luxury hotel, and leisure time.",
        "Day 2: Visit the Mughal Gardens, Shankaracharya Temple, and Pari Mahal.",
        "Day 3: Full-day excursion to Pahalgam, visit Aru and Betaab Valley.",
        "Day 4: Visit Gulmarg, enjoy a gondola ride and explore the local area.",
        "Day 5: Day trip to Sonamarg and Thajiwas Glacier.",
        "Day 6: Departure from Srinagar after breakfast.",
      ],
    },
    {
      id: 4,
      title: "Diamond Package",
      imageUrl: p4,
      priceRange: "₹55,000 - ₹90,000",
      duration: "7D/6N",
      hotelStars: "5 Star Hotel",
      itinerary: [
        "Day 1: Arrival in Srinagar, private transfer to the luxury hotel, and welcome dinner.",
        "Day 2: Visit the Mughal Gardens, Shankaracharya Temple, and evening Shikara ride on Dal Lake.",
        "Day 3: Full-day excursion to Pahalgam, explore Aru and Betaab Valley.",
        "Day 4: Visit Gulmarg, enjoy a gondola ride and visit Khilanmarg.",
        "Day 5: Day trip to Sonamarg, visit Thajiwas Glacier.",
        "Day 6: Leisure day in Srinagar or optional visit to Doodhpathri.",
        "Day 7: Departure from Srinagar with private transfer to the airport.",
      ],
    },
  ];
  return (
    <Box mt="8rem">
      <Grid container>
        <Grid item xs={12}>
          {" "}
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mt: {
                xs: 1,
                sm: 1,
                md: 2,
              },

              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            Exclusive Travel Packages
          </Typography>
          <Typography
            sx={{
              textAlign: "center",

              mb: {
                xs: 2,
                sm: 3,
                md: 4,
              },
              fontSize: {
                xs: ".6rem",
                md: "1rem",
              },
            }}
          >
            Explore curated experiences, tailor-made for unforgettable journeys.
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {detailedPackageData?.map((data) => (
            <PackageDetailCard key={data?.id} data={data} />
          ))}
          <Typography
            variant="body2"
            sx={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
              color: "#555",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            * Package prices may vary from time to time. It is advisable to
            confirm the current price on call before booking.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PackagePage;
