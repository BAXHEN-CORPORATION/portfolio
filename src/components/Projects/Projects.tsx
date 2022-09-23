//** External Imports */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

//** Local Imports */
import { Project } from "app-data";

//** Typings */
export interface ProjectsProps {
  projects: Project[];
}

//** Default Props */
const defaultProps: Partial<ProjectsProps> = {};

/**
 * Container for rendering best works section
 *
 * @container
 */
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <AnimatePresence>
      {projects.map(({ name, img }, index) => (
        <Card
          key={index}
          component={motion.div}
          layout
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          elevation={0}
          sx={{
            borderRadius: 0,
            // width: { tabletLarge: "33%", tablet: "50%", mobile: "100%" },
          }}
        >
          <CardActionArea
            sx={{
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
        </Card>
      ))}
    </AnimatePresence>
  );
};

Projects.defaultProps = defaultProps;

export default Projects;
