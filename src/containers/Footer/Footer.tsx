//** External Imports */
import React from "react";

import { Box } from "@mui/material";

//** Local Imports */

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
  return <Box height="100vh">Footer</Box>;
};

Footer.defaultProps = defaultProps;

export default Footer;
