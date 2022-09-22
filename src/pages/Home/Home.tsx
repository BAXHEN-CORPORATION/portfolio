//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//** Local Imports */
import { skills, socials, workExperiences, works } from "app-data";
import photo from "../../assets/main-img.png";

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
          width="100%"
          maxWidth={{ tabletLarge: "550px", mobile: "500px" }}
          mb="30px"
          mt="30px"
          alignSelf={{ tabletLarge: "flex-start", mobile: "center" }}
          position={{ tabletLarge: "sticky", mobile: "initial" }}
          top={{ tabletLarge: "28vh", mobile: "initial" }}
          left={{ tabletLarge: "8vw", mobile: "initial" }}
          className="sticky"
        >
          <img
            alt="portfolio's owner photo"
            style={{ width: "100%", height: "auto" }}
            src={photo}
          />
        </Box>

        <Stack gap="2rem" maxWidth={{ tabletLarge: "450px", mobile: "100%" }}>
          <Typography variant="main">Well, hello there.</Typography>
          <Typography variant="content">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicituti din,
            lorem quis bibendum auctor, nisi elit consequat
          </Typography>

          <Typography variant="topic">Some of my skills:</Typography>

          {skills.map(({ name, proficiency, value }, index) => (
            <Stack key={index} spacing={1}>
              <Stack direction="row">
                <Typography variant="section">{name}:</Typography>
                <Typography variant="section" ml="auto" mr="3rem">
                  {proficiency}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                color="secondary"
                sx={{ backgroundColor: "white" }}
                value={value}
              />
            </Stack>
          ))}

          <Typography variant="topic" mt="2.5rem">
            Work experience:
          </Typography>

          {workExperiences.map(({ title, begin, end, description }, index) => (
            <Stack key={index} gap=".75rem">
              <Typography variant="section">
                {title} ({begin}-{end})
              </Typography>
              <Typography variant="content">{description}</Typography>
            </Stack>
          ))}

          <Typography variant="topic">Personal favorite projects:</Typography>

          <Stack direction="row" flexWrap="wrap">
            {works.map(({ name, img }, index) => (
              <CardActionArea
                key={index}
                sx={{
                  width: { tabletLarge: "33%", tablet: "50%", mobile: "100%" },
                  position: "relative",
                  "&::after": {
                    content: "''",
                    top: 0,
                    left: 0,
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    backgroundColor: `rgba(${
                      index % 1 === 0 ? 255 - index : 0
                    }, ${index % 2 === 0 ? 255 - index : 0}, ${
                      index % 3 === 0 ? 255 - index : 0
                    }, 0.1)`,
                  },
                }}
              >
                <CardMedia component="img" image={img} alt={name} />
              </CardActionArea>
            ))}
          </Stack>
        </Stack>
      </Box>

      <Box
        display={{ tabletLarge: "initial", mobile: "none" }}
        width="100%"
        maxWidth={{ tabletLarge: "500px", mobile: "none" }}
      ></Box>
      <Stack
        gap="2rem"
        paddingBottom="2.75rem"
        padding={{
          tabletLarge: "0 0 2.75rem 0",
          mobile: "0 2.75rem 2.75rem 2.75rem",
        }}
        maxWidth={{ tabletLarge: "500px", mobile: "100%" }}
      >
        <Typography variant="topic">Keep in touch:</Typography>

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
              <Icon color="secondary" fontSize="small" />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

Home.defaultProps = defaultProps;

export default Home;
