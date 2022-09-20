//** External Imports */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

//** Local Imports */

import logo from "../../assets/logo.jpg";
import Stack from "@mui/material/Stack";

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
      <Toolbar sx={{ height: "100px", padding: "0 10rem" }}>
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
              sx={{ ml: "auto" }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
