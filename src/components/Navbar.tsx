import { Box, Stack, AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartItems from "./CartItems";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} pb={8}>
      <AppBar position="fixed" sx={{ background: "white", color: "#777" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" component="div">
              <NavLink
                className="hover:text-black duration-300 font-bold  focus:text-black"
                to="/"
              >
                Home
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink
                className="hover:text-black duration-300 font-bold focus:text-black"
                to="/store"
              >
                Store
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink
                className="hover:text-black duration-300 font-bold  focus:text-black"
                to="/about"
              >
                About
              </NavLink>
            </Typography>
          </Stack>
          <CartItems />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
