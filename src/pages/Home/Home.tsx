//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//** Local Imports */
import { bestProjects, skills, socials, workExperiences } from "app-data";
import BestProjects from "components/BestProjects";
import MySkills from "components/MySkills";
import Socials from "components/Socials";
import WorkExperiences from "components/WorkExperiences";
import photo from "../../assets/main-img.png";
import ScrollToTop from "components/ScrollToTop";

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
    <>
      <Box
        height="min-content"
        width="100%"
        display="grid"
        gridTemplateColumns={{
          tabletLarge: "1fr 1fr",
          mobile: "1fr",
        }}
        gap="2rem"
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Box
          height="min-content"
          width="100%"
          display="grid"
          gridTemplateColumns={{
            tabletLarge: "1fr 1fr",
            mobile: "1fr",
          }}
          gap="2rem"
          padding={{ mobile: "2.75rem" }}
          sx={{
            backgroundColor: "primary.main",
            "& :not(.sticky)": {
              gridColumnStart: { tabletLarge: "initial", mobile: "initial" },
            },
            gridColumn: "span 2",
          }}
        >
          <Box
            className="sticky"
            position={{ tabletLarge: "sticky", mobile: "initial" }}
            top={{ tabletLarge: "28vh", mobile: "initial" }}
            left={{ tabletLarge: "8vw", mobile: "initial" }}
            alignSelf={{ tabletLarge: "flex-start", mobile: "center" }}
            width="100%"
            maxWidth={{ tabletLarge: "550px", mobile: "500px" }}
            mb="30px"
            mt="30px"
          >
            <img
              alt="portfolio's owner"
              style={{ width: "100%", height: "auto" }}
              src={photo}
            />
          </Box>

          <Stack gap="2rem" maxWidth={{ tabletLarge: "450px", mobile: "100%" }}>
            <Typography variant="main">Well, hello there.</Typography>
            <Typography variant="content">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicituti
              din, lorem quis bibendum auctor, nisi elit consequat
            </Typography>

            <Typography variant="topic">Some of my skills:</Typography>

            <MySkills skills={skills} />

            <Typography variant="topic" mt="2.5rem">
              Work experience:
            </Typography>

            <WorkExperiences experiences={workExperiences} />

            <Typography variant="topic">Personal favorite projects:</Typography>

            <BestProjects projects={bestProjects} />
          </Stack>
        </Box>

        <Box
          display={{ tabletLarge: "initial", mobile: "none" }}
          width="100%"
          maxWidth={{ tabletLarge: "500px", mobile: "none" }}
        />

        <Stack
          gap="2rem"
          mb="2.75rem"
          padding={{
            tabletLarge: "0",
            mobile: "0 2.75rem",
          }}
          maxWidth={{ tabletLarge: "500px", mobile: "100%" }}
        >
          <Typography variant="topic">Keep in touch:</Typography>
          <Socials color="secondary" socials={socials} />
        </Stack>
      </Box>
      <ScrollToTop />
    </>
  );
};

Home.defaultProps = defaultProps;

export default Home;
