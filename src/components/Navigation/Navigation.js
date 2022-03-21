import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Navigation = () => {
    const [value, setValue] = useState(0);
    let navigate = useNavigate();
    const { pathname } = useLocation();

    let roverNavigation = (value) => {
        if (value === 1) {
            navigate("/opportunity");
        } else if (value === 2) {
            navigate("/spirit");
        } else {
            navigate("/");
        }
    };

    useEffect(() => {
        if (pathname === "/opportunity") {
            setValue(1);
        } else if (pathname === "/spirit") {
            setValue(2);
        } else {
            setValue(0);
        }
    }, [pathname]);

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <BottomNavigation
                    sx={{ width: 350 }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        roverNavigation(newValue);
                    }}
                >
                    <BottomNavigationAction label="Curiosity" icon={<ScreenSearchDesktopIcon />} />
                    <BottomNavigationAction label="Opportunity" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Spirit" icon={<EmojiEmotionsIcon />} />
                </BottomNavigation>
            </Box>
        </>
    );
};

export default Navigation;
