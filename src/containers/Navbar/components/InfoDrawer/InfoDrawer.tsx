//** External Imports */
import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";

//** Local Imports */

import logo from "../../../../assets/logo.jpg";
import { socials } from "../../../../app-data/socials";

//** Typings */
export interface InfoDrawerProps {
  open: boolean;
  email?: string;
  onToggle?: () => void;
}

//** Default Props */
const defaultProps: Partial<InfoDrawerProps> = {
  onToggle: () => {},
  email: "carlos@carloshenrique.com",
};

/**
 * Container for displaying info drawer
 *
 * @container
 */
const InfoDrawer: React.FC<InfoDrawerProps & typeof defaultProps> = ({
  open,
  onToggle,
  email,
}) => {
  return (
    <Drawer
      anchor="right"
      hideBackdrop
      open={open}
      sx={{ display: { tabletLarge: "initial", mobile: "none" } }}
    >
      <Box
        width="490px"
        height="100%"
        sx={{ backgroundColor: "secondary.main" }}
        padding="64px 101px 35px 66px"
      >
        <IconButton
          className="nav-close"
          onClick={onToggle}
          size="large"
          sx={{ position: "absolute", top: "31px", right: "46px" }}
        >
          <CloseIcon color="secondary" fontSize="large" />
        </IconButton>

        <Stack gap="1.75rem">
          <Stack direction="row" alignItems="center" gap="1rem" mb="0.5rem">
            <Avatar sx={{ height: "70px", width: "70px" }}>
              <img src={logo} alt="logo" style={{ width: "100%" }} />
            </Avatar>

            <Typography variant="info-name">Carlos Henrique</Typography>
          </Stack>
          <Typography variant="body1" fontWeight={500} color="white">
            Fullstack developer using NodeJs in the backend with AngularJs and
            ReactJs in the front-end.
          </Typography>
          <Typography variant="info-title">Where to find me</Typography>
          <Typography variant="body1" fontWeight={500} color="white">
            Phone: +55 (11) 94872-5475
          </Typography>
          <Typography
            component="a"
            href={`mailto:${email}`}
            variant="body1"
            fontWeight={500}
            fontSize="18px"
            color="white"
            sx={{ textDecoration: "none" }}
          >
            {email}
          </Typography>
          <Typography variant="info-title">Social</Typography>

          <Stack direction="row" gap="2rem">
            {socials.map(({ href, Icon }, index) => (
              <IconButton
                key={index}
                LinkComponent="a"
                target="_blank"
                href={href}
                size="small"
                sx={{ width: "4px" }}
              >
                <Icon htmlColor="white" fontSize="small" />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
};

InfoDrawer.defaultProps = defaultProps;

export default InfoDrawer;
