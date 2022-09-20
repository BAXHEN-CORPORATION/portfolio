//** External Imports */
import React from "react";

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
  return <div>Footer</div>;
};

Footer.defaultProps = defaultProps;

export default Footer;
