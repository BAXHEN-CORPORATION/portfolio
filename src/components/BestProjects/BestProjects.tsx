//** External Imports */
import React from "react";

import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

//** Local Imports */
import { Project } from "app-data";

//** Typings */
export interface BestProjectsProps {
  projects: Project[];
}

//** Default Props */
const defaultProps: Partial<BestProjectsProps> = {};

/**
 * Container for rendering best works section
 *
 * @container
 */
const BestProjects: React.FC<BestProjectsProps> = ({ projects }) => {
  return (
    <Stack direction="row" flexWrap="wrap">
      {projects.map(({ name, img }, index) => (
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
              backgroundColor: `rgba(${index % 1 === 0 ? 255 - index : 0}, ${
                index % 2 === 0 ? 255 - index : 0
              }, ${index % 3 === 0 ? 255 - index : 0}, 0.1)`,
            },
          }}
        >
          <CardMedia component="img" image={img} alt={name} />
        </CardActionArea>
      ))}
    </Stack>
  );
};

BestProjects.defaultProps = defaultProps;

export default BestProjects;
