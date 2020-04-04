import React from "react";
import "./App.css";
import { AppThemeProvider } from "./theme";
import { useDarkMode } from "./components/useDarkMode";
import AppContainer from "./layout/layout";

// =============================================================================
// FontAwesomeIcons library
// =============================================================================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faBook,
  faPhone,
  faInbox
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas, faUserCircle, faBook, faPhone, faInbox);

function App(props) {
  // using the useDarkMode hook to set up the theme
  // to localstorage to aid user preferences
  const [theme, toggleTheme] = useDarkMode();

  return (
    <AppThemeProvider mode={theme}>
      <AppContainer theme={theme} toggle={toggleTheme} />
    </AppThemeProvider>
  );
}

export default App;
