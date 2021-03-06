import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restraurants/screens/restaurant.screen";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}
