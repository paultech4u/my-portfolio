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
  const [theme, toggleTheme] = useDarkMode();
  var mode = theme === 'light' ? 'light' : 'dark';

  return (
    <AppThemeProvider mode={mode}>
      <AppContainer theme={mode} toggle={toggleTheme} />
    </AppThemeProvider>
  );
}

export default App;
