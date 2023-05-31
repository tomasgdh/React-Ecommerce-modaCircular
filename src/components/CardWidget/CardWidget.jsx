import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const CardWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "40px" }}>
      <LocalGroceryStoreIcon sx={{ color: "white" }} />
      <p style={{ color: "white" }}>5</p>
    </div>
  );
};

export default CardWidget;
