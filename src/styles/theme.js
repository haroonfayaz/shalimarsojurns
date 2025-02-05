// src/styles/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize primary color
    },
    secondary: {
      main: "#dc004e", // Customize secondary color
    },
    // Add more customizations here
  },
  typography: {
    // Customize typography
  },
  spacing: 8, // Customize spacing
  // Add more customizations if needed
});

export default theme;
