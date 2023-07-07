import { CircularProgress, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex", marginTop: 10 }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;