import { Typography } from "@mui/material";

const LoadingMessage = () => {
  return (
    <>
      <Typography align={"center"}>Loading.....</Typography>
      <Typography>
        if data is not available in a few seconds "The API might be failing"
      </Typography>
    </>
  );
};

export default LoadingMessage;
