//** External Imports */
import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//** Local Imports */
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import { Link, useLoaderData } from "react-router-dom";
import LinkedinShareButton from "react-share/lib/LinkedinShareButton";

//** Typings */
export interface PortfolioItemProps {}

//** Default Props */
const defaultProps: Partial<PortfolioItemProps> = {};

/**
 * Page for rendering portfolioItem
 *
 * @page
 */
const PortfolioItem: React.FC<PortfolioItemProps> = () => {
  const { project } = useLoaderData() as any;

  return (
    <Stack
      // direction={{ tabletLarge: "row", mobile: "column" }}
      minHeight="100vh"
    >
      <Stack
        padding={{ tabletLarge: "0 10rem", mobile: "0 3rem" }}
        width="100vw"
        height="100px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="common.lynxWhite"
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: "1.22em",
            letterSpacing: "-.04em",
            wordWrap: "break-word",
          }}
        >
          {project.name}
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{
            display: {
              tablet: "initial",
              mobile: "none",
            },
          }}
        >
          <MuiLink
            component={Link}
            underline="none"
            color="secondary"
            to="/"
            fontSize="14px"
          >
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            underline="none"
            color="secondary"
            to="/portfolio"
            fontSize="14px"
          >
            Portfolio
          </MuiLink>
          <Typography color="inherit" fontSize="14px">
            {project.name}
          </Typography>
        </Breadcrumbs>
      </Stack>

      <Box
        display="grid"
        gridTemplateColumns={{
          // tablet: "repeat(auto-fill, minmax(300px, 1fr))",
          mobile: "repeat(auto-fill, minmax(200px, 1fr))",
        }}
        height="min-content"
        gap="1rem"
        padding={{ tabletLarge: "0 10rem", mobile: "3rem" }}
      >
        {project.imgs.map((img: string, index: number) => (
          <Box key={index} height="100%" width="100%">
            <img
              src={img}
              style={{ objectFit: "cover", width: "100%" }}
              alt="project sample"
            />
          </Box>
        ))}
      </Box>

      <Stack
        padding={{ tabletLarge: "0 10rem", mobile: "0 3rem" }}
        gap="3rem"
        mb="3rem"
      >
        <Typography variant="topic">{project.details}</Typography>
        <Typography variant="content">{project.description}</Typography>
      </Stack>

      <Stack padding={{ tabletLarge: "0 10rem", mobile: "0 3rem" }} mb="3rem">
        <Stack direction="row" gap="0.5rem">
          <Typography variant="section">Date:</Typography>
          <Typography
            variant="content"
            sx={{
              "&:hover": {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            {project.date}
          </Typography>
        </Stack>
        <Stack direction="row" gap="0.5rem">
          <Typography variant="section">Tags:</Typography>
          {project.tags.map((tag: any, index: number) => (
            <Typography
              component={Link}
              sx={{
                textDecoration: "none",
                color: "black",
                "&:hover, &:focus": { color: "primary.main" },
              }}
              to="/portfolio"
              state={{ tag: tag.tag }}
            >
              {tag.pretty}
              {index + 1 === project?.tags?.length ? "" : ","}
            </Typography>
          ))}
        </Stack>
        <Stack direction="row" gap="0.5rem">
          <Typography variant="section">Share:</Typography>
          <LinkedinShareButton
            title={project.details}
            summary={project.description}
            url={`${process.env.REACT_APP_LIVE_URL}/portfolio/${project.id}`}
          >
            <div className="icon-socmed-white linkedin">In</div>
          </LinkedinShareButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

PortfolioItem.defaultProps = defaultProps;

export default PortfolioItem;
