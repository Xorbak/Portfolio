import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ToDo } from "./Screens/ToDo/ToDo";
import { RegistrationForm } from "./Screens/Registration/RegistrationForm";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";

import { ThemeTester } from "./Screens/ThemeTest/Themetester";
import { SeaSideEve } from "./Themes/themes";
import { ThemeProvider } from "@mui/material/styles";
import { TipCalc } from "./Screens/Tip Calculator/TipCalc";
import { ResponsiveAppBar } from "./components/Navbar/responsiveNavBar";

function App() {
  const [currentTheme, setCurrentTheme] = useState(SeaSideEve);
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
