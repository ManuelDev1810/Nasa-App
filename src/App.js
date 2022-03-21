import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Curiosity from "./components/Rovers/Curiosity";
import Opportunity from "./components/Rovers/Opportunity";
import Spirit from "./components/Rovers/Spirit";

function App() {
  return (
    <div>
      <Navigation />
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
