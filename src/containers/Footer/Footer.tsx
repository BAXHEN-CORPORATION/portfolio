//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

//** Local Imports */
import { navLinks, socials } from "app-data";
import logo from "assets/logo.jpg";
import Socials from "components/Socials";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//** Typings */
export interface FooterProps {}

//** Default Props */
const defaultProps: Partial<FooterProps> = {};

/**
 * Container for rendering footer
 *
 * @container
 */
const Footer: React.FC<FooterProps> = () => {
  return (
    <Stack
      direction={{ tabletLarge: "row", mobile: "column" }}
      component="footer"
      gap="2rem"
      height={{ tabletLarge: "502px", mobile: "622px" }}
      paddingTop="150px"
      paddingBottom="130px"
      sx={{
        backgroundColor: "secondary.main",
        "& > *": {
          maxWidth: "300px",
        },
      }}
      alignItems="center"
    >
      <Stack
        display={{ tabletLarge: "flex", mobile: "none" }}
        direction="row"
        gap="1rem"
        flexWrap="wrap"
        ml="auto"
        mb="2.75rem"
        sx={{
          [`& > *:not(:nth-child(-n+${Math.round(navLinks.length / 2)}))`]: {
            display: { tabletLarge: "none", mobile: "initial" },
          },
        }}
        justifyContent="flex-start"
      >
        {navLinks.map(({ to, label }) => (
          <Button
            key={to}
            variant="nav-link"
            to={to}
            component={Link}
            sx={{
              ml: "auto",
              color: "white",
              minWidth: "4rem",
            }}
          >
            {label}
          </Button>
        ))}
      </Stack>
      <Stack gap="2rem">
        <Stack direction="column" alignItems="center" gap="1rem" mb="0.5rem">
          <Avatar sx={{ height: "70px", width: "70px" }}>
            <img src={logo} alt="logo" style={{ width: "100%" }} />
          </Avatar>

          <Typography variant="info-name">Carlos Henrique</Typography>
        </Stack>

        <Typography variant="content" color="white">
          Follow me on social networks:
        </Typography>

        <Socials socials={socials} htmlColor="white" />
      </Stack>

      <Stack
        display={{ mobile: "flex" }}
        direction="row"
        gap="1rem"
        flexWrap="wrap"
        mr={{ tabletLarge: "auto", mobile: "initial" }}
        mb={{ tabletLarge: "2.75rem", mobile: "initial" }}
        sx={{
          [`& > *:nth-child(-n+${Math.round(navLinks.length / 2)})`]: {
            display: { tabletLarge: "none", mobile: "initial" },
          },
          maxWidth: "250px",
          justifyContent: "center",
        }}
      >
        {navLinks.map(({ to, label }) => (
          <Button
            key={to}
            variant="nav-link"
            to={to}
            component={Link}
            sx={{
              color: "white",
            }}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

Footer.defaultProps = defaultProps;

export default Footer;
