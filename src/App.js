import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ContactForm from "./pages/ContactForm";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";

// Theme
import lightTheme from "./styles/theme";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <AboutUs />
            </Route>
            <Route path="/work" exact>
              <OurWork />
            </Route>
            <Route path="/work/:id">
              <MovieDetail />
            </Route>
            <Route path="/contact" exact>
              <ContactUs />
            </Route>
            <Route path="/contact/message">
              <ContactForm />
            </Route>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
