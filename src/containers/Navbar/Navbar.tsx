//** External Imports */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

//** Local Imports */

import logo from "../../assets/logo.jpg";

//** Typings */
export interface NavbarProps {}

//** Default Props */
const defaultProps: Partial<NavbarProps> = {};

/**
 * Container for rendering navbar
 *
 * @container
 */
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ height: "100px", padding: "0 10rem" }}>
        <Avatar component={Link} sx={{ height: "70px", width: "70px" }} to="/">
          <img src={logo} alt="logo" style={{ width: "100%" }} />
        </Avatar>

        <Button to="/" component={Link} sx={{ ml: "auto" }}>
          Home
        </Button>
        <Button to="/portfolio" component={Link}>
          Portfolio
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
