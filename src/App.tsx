import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ToDo } from "./Screens/ToDo/ToDo";
import { RegistrationForm } from "./Screens/Registration/RegistrationForm";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeTester } from "./Screens/ThemeTest/Themetester";
import { SeaSideEve } from "./Themes/themes";
import { ThemeProvider } from "@mui/material/styles";
import { TipCalc } from "./Screens/Tip Calculator/TipCalc";

function App() {
  const [currentTheme, setCurrentTheme] = useState(SeaSideEve);
  return (
    <Box>
      <ThemeProvider theme={currentTheme}>
        <Navbar setCurrentTheme={setCurrentTheme} />

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
