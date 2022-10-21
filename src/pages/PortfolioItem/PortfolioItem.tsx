//** External Imports */
import React from "react";
import { Link, useParams } from "react-router-dom";

import Carousel from "react-material-ui-carousel";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Card, CardMedia, IconButton, Modal } from "@mui/material";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import LinkedinShareButton from "react-share/lib/LinkedinShareButton";
import TwitterShareButton from "react-share/lib/TwitterShareButton";

//** Local Imports */
import { allProjects } from "app-data";
import { withScrollToTop } from "hoc";
import Error from "pages/Error";

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
  const params = useParams<"name">();

  const project = allProjects.find((project) => project.id === params.name);

  const [open, setOpen] = React.useState(false);

  if (!project) {
    return <Error />;
  }

  return (
    <Stack minHeight="100vh">
      <Stack
        padding={{ tabletLarge: "0 10rem", mobile: "0 3rem" }}
        width="100%"
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

      <Stack
        direction={{ laptop: "row" }}
        padding={{ tabletLarge: "0 10rem", mobile: "0 3rem" }}
        mt="5rem"
        gap="5rem"
        mb="5rem"
      >
        <Box
          component="a"
          onClick={() => setOpen(true)}
          display="grid"
          gridTemplateColumns={{
            laptop: "repeat(2, minmax(250px, 1fr))",
            mobile: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
          height="min-content"
          gap="1rem"
          sx={{ cursor: "pointer" }}
        >
          {project?.imgs
            ?.filter((_, i) => i < 4)
            ?.map((img: string, index: number) => (
              <Stack
                direction="row"
                key={index}
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
              >
                <img
                  src={img}
                  style={{
                    objectFit: "contain",
                    width: "250px",
                    height: "250px",
                  }}
                  alt="project sample"
                />
              </Stack>
            ))}
        </Box>

        <Stack gap="3rem" mb="3rem" mt="3rem">
          <Typography variant="topic">{project.details}</Typography>
          <Typography variant="content">{project.description}</Typography>

          <Stack gap="0.5rem">
            <Stack direction="row" gap="0.5rem">
              <Typography variant="section">Data:</Typography>
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
            <Stack direction="row" gap="0.5rem" flexWrap="wrap">
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
            {project?.resources?.length ? (
              <Stack
                direction="row"
                gap="0.5rem"
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography variant="section">Detalhes:</Typography>
                {project?.resources.map(({ Icon, url }) => (
                  <IconButton
                    LinkComponent="a"
                    href={url}
                    target="__blank"
                    disableRipple
                    sx={{
                      "&:hover": {
                        background: "transparent",
                      },
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <Icon
                      color="secondary"
                      sx={{ "&:hover, &:focus": { color: "primary.main" } }}
                    />
                  </IconButton>
                ))}
              </Stack>
            ) : null}
            <Stack
              direction="row"
              gap="0.5rem"
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography variant="section">Compartilhar:</Typography>
              <FacebookShareButton
                title={project.details}
                quote={project.description}
                url={`${process.env.REACT_APP_LIVE_URL}/portfolio/${project.id}`}
                style={{ display: "flex" }}
              >
                <FacebookIcon
                  color="secondary"
                  sx={{ "&:hover, &:focus": { color: "primary.main" } }}
                />
              </FacebookShareButton>
              <TwitterShareButton
                title={project.details}
                url={`${process.env.REACT_APP_LIVE_URL}/portfolio/${project.id}`}
                style={{ display: "flex" }}
              >
                <TwitterIcon
                  color="secondary"
                  sx={{ "&:hover, &:focus": { color: "primary.main" } }}
                />
              </TwitterShareButton>
              <LinkedinShareButton
                title={project.details}
                summary={project.description}
                url={`${process.env.REACT_APP_LIVE_URL}/portfolio/${project.id}`}
                style={{ display: "flex" }}
              >
                <LinkedInIcon
                  color="secondary"
                  sx={{ "&:hover, &:focus": { color: "primary.main" } }}
                />
              </LinkedinShareButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Carousel swipe sx={{ margin: "10vh 10vw" }}>
          {project?.imgs?.map((url) => (
            <Card sx={{ height: "80vh" }}>
              <CardMedia
                component="img"
                sx={{ objectFit: "contain", height: "80vh" }}
                image={url}
                alt="image"
              />
            </Card>
          ))}
        </Carousel>
      </Modal>
    </Stack>
  );
};

PortfolioItem.defaultProps = defaultProps;

export default withScrollToTop(PortfolioItem);
