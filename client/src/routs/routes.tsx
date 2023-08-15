import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import { Box } from "@mui/material";

export const routes = [
    {
        path: '/',
        label: 'בית',
        Element: <HomePage />
    },
    {
        path: '/about',
        label: 'אודות',
        Element: <AboutPage />
    },
    {
        path: '/map',
        label: 'מפה',
        Element: <Box sx={{color: "red"}}>מפה</Box>
    }
]