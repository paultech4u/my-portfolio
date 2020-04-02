import React, { memo } from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, colors } from "@material-ui/core";

export const AppThemeProvider = memo(({children, mode}) => {
  const theme = createMuiTheme({
      palette: {
        type: mode,
        primary: colors.orange,
      },
      typography: {
        fontFamily: "'Comic Neue', cursive",
        h1: {
           fontSize: 30
        },
        h2: {
          fontSize: 15
        },
        
      }
  });
  return <ThemeProvider theme={theme} >{children}</ThemeProvider>;
});


AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppThemeProvider
