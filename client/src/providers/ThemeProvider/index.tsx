import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {},
});

export const AppThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}