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
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
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
