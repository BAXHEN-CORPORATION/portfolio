//** External Imports */
import React from "react";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import { NavLinks } from "../../Navbar";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Paper } from "@mui/material";

//** Local Imports */

//** Typings */
export interface DrawerProps {
  open: boolean;
  links: NavLinks[];
}

//** Default Props */
const defaultProps: Partial<DrawerProps> = {};

/**
 * Container for displaying drawer menu in mobile version
 *
 * @container
 */
const Drawer: React.FC<DrawerProps> = ({ open, links }) => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        overflow: "hidden",
        height: `calc(3rem + ${links.length * 38}px)`,
        width: "100%",
        position: "absolute",
        top: (theme) => theme.navbar.height,
        display: { tabletLarge: "none", mobile: "initial" },
      }}
    >
      <Slide
        direction="down"
        in={open}
        timeout={{ enter: 1000, exit: 1000 }}
        mountOnEnter
        unmountOnExit
      >
        <Paper
          sx={{
            borderRadius: "0px",
            backgroundColor: "primary.main",
            position: "absolute",
            top: 0,
            padding: "1.5rem 2rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          elevation={1}
        >
          <Stack padding={(theme) => theme.spacing(0, 5)}>
            {links.map(({ to, label }) => (
              <Button
                key={to}
                variant="nav-link"
                className={to === pathname ? "active" : ""}
                to={to}
                component={Link}
                sx={{
                  mr: "auto",
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Slide>
    </Box>
  );
};

Drawer.defaultProps = defaultProps;

export default Drawer;
