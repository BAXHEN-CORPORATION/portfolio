//** External Imports */
import Box from "@mui/material/Box";
import React from "react";

//** Local Imports */

//** Typings */
export interface HomeProps {}

//** Default Props */
const defaultProps: Partial<HomeProps> = {};

/**
 * Page for rendering application home
 *
 * @page
 */
const Home: React.FC<HomeProps> = () => {
  return (
    <Box height="300vh" width="100%">
      Home
    </Box>
  );
};

Home.defaultProps = defaultProps;

export default Home;
