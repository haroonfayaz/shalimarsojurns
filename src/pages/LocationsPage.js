import React from "react";
import DestinationCard from "../components/DestinationCard";
import { Box, Grid, Typography } from "@mui/material";
import srinagar1 from "../assets/images/srinagar1.jpg";
import srinagar2 from "../assets/images/srinagar2.jpg";
import pahalgam from "../assets/images/pahalgam1.jpg";
import p2 from "../assets/images/Pahalgam2.jpg";
import ladakh from "../assets/images/ladakh.jpg";
import ladakh1 from "../assets/images/ladakh1.jpg";
import sonamarg from "../assets/images/sonamarg1.jpeg";
import sonamarg1 from "../assets/images/sonamarg2.jpeg";
import aharbal from "../assets/images/aharbal.jpg";
import aharbal1 from "../assets/images/ahar1.jpeg";
import dodh1 from "../assets/images/dodh2.jpeg";
import dodh2 from "../assets/images/dodh1.jpg";
import gulmarg from "../assets/images/gulmarg.jpeg";
import gulmarg1 from "../assets/images/gulmarg1.jpeg";
import gurez from "../assets/images/gurez.jpg";
import gurez1 from "../assets/images/gurez1.jpeg";

const LocationsPage = () => {
  const locaDetaildata = [
    {
      id: 1,
      heading: "Srinagar",
      tagLine: "Jewel of Kashmir",
      text: "Srinagar, the summer capital of Jammu and Kashmir, is renowned for its stunning natural beauty. Nestled in the Kashmir Valley, it is famous for its beautiful gardens, lakes, and houseboats. The Dal Lake and Nigeen Lake, along with the Mughal Gardens, make Srinagar a popular destination for tourists seeking serenity and picturesque landscapes.",
      img1: srinagar1,
      img2: srinagar2,
    },
    {
      id: 2,
      heading: "Gulmarg",
      tagLine: "Meadow of Flowers",
      text: "Gulmarg, known as the 'Meadow of Flowers', is a hill station in the Baramulla district of Jammu and Kashmir. It is famous for its stunning landscapes, snow-covered mountains, and as one of the best skiing destinations in India. The Gulmarg Gondola, which is one of the highest cable cars in the world, offers panoramic views of the surrounding peaks.",
      img1: gulmarg,
      img2: gulmarg1,
    },
    {
      id: 3,
      heading: "Pahalgam",
      tagLine: "Valley of Shepherds",

      text: "Pahalgam, also known as the 'Valley of Shepherds', is a picturesque town located in the Anantnag district of Jammu and Kashmir. It serves as a base camp for the Amarnath Yatra and is known for its lush green meadows, scenic valleys, and as a popular destination for trekking and adventure tourism.",
      img1: pahalgam,
      img2: p2,
    },
    {
      id: 4,
      heading: "Sonamarg",
      tagLine: "Golden Meadows",

      text: "Sonamarg, meaning 'Meadow of Gold', is a hill station in the Ganderbal district of Jammu and Kashmir. Surrounded by majestic glaciers and serene lakes, Sonamarg is a gateway to the famous trekking routes and high-altitude lakes like Vishansar, Krishansar, and Gangbal. The Sindh River, which flows through the valley, is popular for trout fishing.",
      img1: sonamarg,
      img2: sonamarg1,
    },
    {
      id: 5,
      heading: "Gurez",
      tagLine: "Land of the Dard-Shins",

      text: "Gurez is a remote valley located in the Bandipora district of Jammu and Kashmir. It is inhabited by the Dard-Shins, an ethnic group with a unique culture and language. The valley is known for its pristine beauty, with the Kishanganga River flowing through it, surrounded by high mountains and lush green meadows. Gurez is an offbeat destination, ideal for those seeking solitude and nature.",
      img1: gurez,
      img2: gurez1,
    },
    {
      id: 6,
      heading: "Ladakh",
      tagLine: "Land of High Passes",

      text: "Ladakh, often referred to as the 'Land of High Passes', is a region in Jammu and Kashmir known for its stunning landscapes, high-altitude deserts, and Buddhist monasteries. It is a popular destination for adventure enthusiasts, offering opportunities for trekking, mountaineering, and river rafting. The region is also famous for the Pangong Lake, Nubra Valley, and Khardung La Pass, one of the highest motorable roads in the world.",
      img1: ladakh,
      img2: ladakh1,
    },
    {
      id: 7,
      heading: "Aharbal",
      tagLine: "Waterfall Retreat",

      text: "Aharbal is a small town in the Kulgam district of Jammu and Kashmir, known for the Aharbal Waterfall, often referred to as the 'Niagara Falls of Kashmir'. The waterfall is surrounded by dense pine forests and offers breathtaking views of the valley. Aharbal is also a starting point for several trekking routes and is a popular destination for nature lovers.",
      img1: aharbal,
      img2: aharbal1,
    },
    {
      id: 8,
      heading: "Doodhpathri",
      tagLine: "Valley of Milk",

      text: "Doodhpathri, meaning 'Valley of Milk', is a hill station in the Budgam district of Jammu and Kashmir. The name is derived from the fact that the water flowing through the meadows resembles milk. Doodhpathri is known for its lush green meadows, pristine streams, and as a serene picnic spot. It is less crowded compared to other tourist destinations in Kashmir, making it a perfect getaway for those seeking peace and tranquility.",
      img1: dodh1,
      img2: dodh2,
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
            Popular Destinations
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
                xs: ".5rem",
                md: "1rem",
              },
            }}
          >
            Tours give you the opportunity to see a lot, within a time frame
          </Typography>
        </Grid>
      </Grid>
      {locaDetaildata?.map((location) => (
        <DestinationCard key={location?.id} data={location} />
      ))}
    </Box>
  );
};

export default LocationsPage;
