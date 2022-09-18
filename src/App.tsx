import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import { ThemeTester } from "./components/ThemeTest/Themetester";
import { SeaSideEve } from "./Themes/themes";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { ResponsiveAppBar } from "./components/Navbar/responsiveNavBar";
import { ToDo } from "./components/ToDo/ToDo";
import { TipCalc } from "./components/Tip Calculator/TipCalc";
import { RegistrationForm } from "./components/Registration/RegistrationForm";
import { ThemeOptions } from "@mui/system";
interface Geolocation {
  longitude: number;
  latitude: number;
}

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(SeaSideEve);
  const [geolocation, setGeolocation] = useState<Geolocation>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
    console.log(`Longitude is : ${geolocation && geolocation.longitude}`);
    console.log(`Latitude is : ${geolocation && geolocation.latitude}`);
  }, [
    geolocation && geolocation.longitude,
    geolocation && geolocation.latitude,
  ]);

  return (
    <Box>
      <ThemeProvider theme={currentTheme}>
        <ResponsiveAppBar
          setCurrentTheme={setCurrentTheme} // this is to change the theme with a click of a button
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/To-do" element={<ToDo />} />
          <Route path="/Registration" element={<RegistrationForm />} />
          <Route path="/ThemeTest" element={<ThemeTester />} />
          <Route path="/TipCalc" element={<TipCalc />}></Route>
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
