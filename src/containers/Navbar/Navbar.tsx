//** External Imports */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DragHandleIcon from "@mui/icons-material/DragHandle";

//** Local Imports */

import logo from "../../assets/logo.png";
import Drawer from "./components/Drawer";
import InfoDrawer from "./components/InfoDrawer";
import { useTheme } from "@mui/material";
import { user } from "app-data";

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
  const theme = useTheme();
  const { pathname } = useLocation();

  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen((old) => !old);
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent" }}>
        <Toolbar
          sx={{
            height: {
              tabletLarge: theme.navbar.height,
              mobile: `calc(${theme.navbar.height} - 30px)`,
            },
            padding: { tabletLarge: "0 10rem", mobile: "0 3.15rem" },
            zIndex: (theme) => theme.zIndex.appBar + 1,
            backgroundColor: { tabletLarge: "primary.main", mobile: "white" },
          }}
        >
          <Avatar
            component={Link}
            sx={{
              height: { tabletLarge: "70px", mobile: "50px" },
              width: { tabletLarge: "70px", mobile: "50px" },
            }}
            to="/"
          >
            <img src={logo} alt="logo" style={{ width: "100%" }} />
          </Avatar>

          <Stack direction="row" gap="3rem" ml="auto">
            {links.map(({ to, label }) => (
              <Button
                key={to}
                variant="nav-link"
                className={to === pathname ? "active" : ""}
                to={to}
                component={Link}
                sx={{
                  ml: "auto",
                  display: { tabletLarge: "inline-flex", mobile: "none" },
                }}
              >
                {label}
              </Button>
            ))}

            <IconButton className="nav" size="large" onClick={onToggle}>
              <DragHandleIcon htmlColor="white" fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <InfoDrawer open={open} onToggle={onToggle} {...user} />
      <Drawer links={links} open={open} onToggle={onToggle} />
    </>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
