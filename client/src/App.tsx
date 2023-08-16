import { Box } from "@mui/material";
import Navbar from "./components/AppBar";
import Router from "./routs";

const App = () => (
    <Box className="App" sx={{height: "100%", width: "100%", margin: "0"}}>
        <Navbar />
        <Box className="content" sx={{height: "90%"}}>
            <Router />
        </Box>
    </Box>
)

export default App;