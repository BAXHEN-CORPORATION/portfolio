//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FileDownloadIcon from "@mui/icons-material/FileDownload";

//** Local Imports */
import {
  bestProjects,
  skills,
  socials,
  workExperiences,
  downloadResume,
} from "app-data";
import MySkills from "components/MySkills";
import BestProjects from "components/Projects";
import Socials from "components/Socials";
import WorkExperiences from "components/WorkExperiences";
import { withScrollToTop } from "hoc";
import photo from "../../assets/main-img.png";
import { FormattedMessage } from "react-intl";
import { MessagesIds } from "lang/types";

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
          <Typography variant="main">
            <FormattedMessage id={MessagesIds.MAIN_MESSAGE} />
          </Typography>
          <Typography variant="content">
            <FormattedMessage id={MessagesIds.MAIN_DESCRIPTION} />
          </Typography>

          <Typography variant="topic">
            <FormattedMessage id={MessagesIds.MY_SKILLS} />:
          </Typography>

          <MySkills skills={skills} />

          <Typography variant="topic" mt="2.5rem">
            <FormattedMessage id={MessagesIds.WORK_EXPERIENCE} />:
          </Typography>

          <WorkExperiences experiences={workExperiences} />

          <Typography variant="topic">
            <FormattedMessage id={MessagesIds.MAIN_PROJECTS} />:
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{
              tabletLarge: "repeat(auto-fill, minmax(100px, 1fr))",
              mobile: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
            height="min-content"
            gap="2rem"
          >
            <BestProjects projects={bestProjects} />
          </Box>
          <Stack gap="2rem" maxWidth={{ tabletLarge: "500px", mobile: "100%" }}>
            <Typography variant="topic">
              <FormattedMessage id={MessagesIds.WANNA_KNOW_MORE} /> <br />
              <FormattedMessage id={MessagesIds.RESUME_CALL} />:
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={downloadResume}
              endIcon={<FileDownloadIcon />}
            >
              <FormattedMessage id={MessagesIds.DOWNLOAD_RESUME} />
            </Button>
          </Stack>
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
        <Typography variant="topic">
          <FormattedMessage id={MessagesIds.GET_IN_TOUCH} />:
        </Typography>
        <Socials color="secondary" socials={socials} />
      </Stack>
    </Box>
  );
};

Home.defaultProps = defaultProps;

export default withScrollToTop(Home);
