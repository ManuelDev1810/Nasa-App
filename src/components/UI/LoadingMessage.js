import { Typography } from "@mui/material";

const LoadingMessage = () => {
    return (
        <>
            <Typography align={"center"}>Loading.....</Typography>
            <Typography>
                if data is not available in a few seconds &quot;The API might be failing&quot;
            </Typography>
        </>
    );
};

export default LoadingMessage;
