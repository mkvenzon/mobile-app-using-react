import type { ReactElement } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Vector from "../assets/Vector.png";
import Fun from "../assets/Fun.png";
import Acc from "../assets/Acc.png";
import Cart from "../assets/Cart.png";
import Line from "../assets/Line.png";

interface NavBarProps {
  setOpen: (flag: boolean) => void
}

const NavBar = (props: NavBarProps): ReactElement => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        variant="elevation"
        color="inherit"
        sx={{ paddingTop: 1, paddingBottom: 1 }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} onClick={() => props.setOpen(true)}>
            <img src={Vector} />
          </IconButton>
          <img src={Fun} />
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            justifyContent="center"
            alignItems="center"
            gap={1}
            direction="row"
          >
            <IconButton size="large" edge="start" color="inherit">
              <img src={Cart} />
            </IconButton>
            <Stack
              justifyContent="center"
              alignItems="center"
              gap={2}
              direction="row"
            >
              <Typography variant="h5" fontWeight="bold" color="#00a6ff">
                $1990.6
              </Typography>

              <img src={Line} />
              <IconButton size="large" edge="start" color="inherit">
                <img src={Acc} />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
