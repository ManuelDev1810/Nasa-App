import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Curiosity from "./components/Rovers/Curiosity";
import Opportunity from "./components/Rovers/Opportunity";
import Spirit from "./components/Rovers/Spirit";
import InfoMessage from "./components/UI/InfoMessage";

function App() {
    return (
        <div>
            <Navigation />
            <InfoMessage>THE DEFAULT FILTER IS SOL = 1000</InfoMessage>
            <Box
                sx={{
                    marginTop: 2,
                    height: 400,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Routes>
                    <Route path="/" element={<Navigate replace to="/curiosity" />} />
                    <Route path="/curiosity" element={<Curiosity />} />
                    <Route path="/opportunity" element={<Opportunity />} />
                    <Route path="/spirit" element={<Spirit />} />
                </Routes>
            </Box>
        </div>
    );
}

export default App;
