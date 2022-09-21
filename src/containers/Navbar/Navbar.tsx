//** External Imports */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DragHandleIcon from "@mui/icons-material/DragHandle";

//** Local Imports */

import logo from "../../assets/logo.jpg";

//** Typings */

export interface NavLinks {
  to: string;
  label: string;
}
export interface NavbarProps {
  links: NavLinks[];
}

//** Default Props */
const defaultProps: Partial<NavbarProps> = {};

/**
 * Container for rendering navbar
 *
 * @container
 */
const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar
        sx={{
          height: "100px",
          padding: { tabletLarge: "0 10rem", mobile: "0 4rem" },
        }}
      >
        <Avatar component={Link} sx={{ height: "70px", width: "70px" }} to="/">
          <img src={logo} alt="logo" style={{ width: "100%" }} />
        </Avatar>

        <Stack direction="row" gap="3rem" ml="auto">
          {links.map(({ to, label }) => (
            <Button
              key={to}
              variant="nav-link"
              to={to}
              component={Link}
              sx={{
                ml: "auto",
                display: { tabletLarge: "unset", mobile: "none" },
              }}
            >
              {label}
            </Button>
          ))}

          <IconButton className="variant-nav" size="large">
            <DragHandleIcon htmlColor="white" fontSize="large" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
