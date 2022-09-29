//** External Imports */
import React from "react";
import { Outlet } from "react-router";

//** Local Imports */
import { user } from "app-data";
import { navLinks } from "../../app-data/nav-links";
import Footer from "../../containers/Footer";
import Navbar from "../../containers/Navbar";

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
      <Footer name={user.name} />
    </>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;
