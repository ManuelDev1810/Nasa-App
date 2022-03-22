import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const InfoMessage = (props) => {
    return (
        <Box
            sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Stack sx={{ width: 1300 }} spacing={2}>
                <Alert severity="info">{props.children}</Alert>
            </Stack>
        </Box>
    );
};

export default InfoMessage;
