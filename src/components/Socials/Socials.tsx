//** External Imports */
import React from "react";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

//** Local Imports */
import { Social } from "app-data";

//** Typings */
export interface SocialsProps {
  socials: Social[];
  color?:
    | "inherit"
    | "disabled"
    | "action"
    | "secondary"
    | "primary"
    | "error"
    | "info"
    | "success"
    | "warning";

  htmlColor?: string;
}

//** Default Props */
const defaultProps: Partial<SocialsProps> = {};

/**
 * Container for rendering socials
 *
 * @container
 */
const Socials: React.FC<SocialsProps> = ({ socials, color, htmlColor }) => {
  return (
    <Stack direction="row" gap="2rem" pl="5px">
      {socials.map(({ href, Icon }, index) => (
        <IconButton
          key={index}
          LinkComponent="a"
          target="_blank"
          href={href}
          size="small"
          sx={{ width: "4px" }}
        >
          <Icon color={color} htmlColor={htmlColor} fontSize="small" />
        </IconButton>
      ))}
    </Stack>
  );
};

Socials.defaultProps = defaultProps;

export default Socials;
