import { Box, Stack, Typography } from "@mui/material";
import items from "./../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <Box
      sx={{
        marginLeft: {
          xs: "0px",
          xl: "80px",
        },
      }}
      p={5}
    >
      <Typography variant="h4" pb={3}>
        Store
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            xl: "start",
          },
        }}
      >
        {items.map((item) => {
          return <StoreItem key={item.id} {...item} />;
        })}
      </Stack>
    </Box>
  );
};

export default Store;
