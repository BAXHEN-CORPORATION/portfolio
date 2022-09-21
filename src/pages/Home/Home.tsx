//** External Imports */
import React from "react";

import Box from "@mui/material/Box";

//** Local Imports */
import photo from "../../assets/main-img.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    <Stack
      direction="row"
      height="min-content"
      width="100%"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Stack gap="1.75rem" padding="2.5rem">
        <Box
          width="100%"
          maxWidth="500px"
          // alignSelf="flex-start"
          // sx={{ position: "sticky", top: "30vh", left: "12vw" }}
        >
          <img
            alt="portfolio's owner photo"
            style={{ width: "100%", height: "auto" }}
            src={photo}
          />
        </Box>
        <Typography variant="h1" fontWeight={700}>
          Well, hello there.
        </Typography>
        <Typography variant="body1" paddingRight="30%">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicituti din,
          lorem quis bibendum auctor, nisi elit consequat
        </Typography>

        <Typography variant="h2" fontWeight={700}>
          Some of my skills:
        </Typography>
      </Stack>
    </Stack>
  );
};

Home.defaultProps = defaultProps;

export default Home;
