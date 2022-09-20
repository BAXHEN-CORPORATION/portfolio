//** External Imports */
import React from "react";
import { Outlet } from "react-router";

//** Local Imports */
import Footer from "../../containers/Footer";
import Navbar from "../../containers/Navbar";
import { navLinks } from "./nav-links";

//** Typings */
export interface LayoutProps {}

//** Default Props */
const defaultProps: Partial<LayoutProps> = {};

/**
 * Surface for rendering navbar and footer
 *
 * @surface
 */
const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Navbar links={navLinks} />
      <Outlet />
      <Footer />
    </>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
