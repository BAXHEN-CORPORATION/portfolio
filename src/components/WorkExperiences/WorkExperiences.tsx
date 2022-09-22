//** External Imports */
import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//** Local Imports */
import { Experience } from "app-data";

//** Typings */
export interface WorkExperiencesProps {
  experiences: Experience[];
}

//** Default Props */
const defaultProps: Partial<WorkExperiencesProps> = {};

/**
 * Container for rendering work experiences
 *
 * @container
 */
const WorkExperiences: React.FC<WorkExperiencesProps> = ({ experiences }) => {
  return (
    <>
      {experiences.map(({ title, begin, end, description }, index) => (
        <Stack key={index} gap=".75rem">
          <Typography variant="section">
            {title} ({begin}-{end})
          </Typography>
          <Typography variant="content">{description}</Typography>
        </Stack>
      ))}
    </>
  );
};

WorkExperiences.defaultProps = defaultProps;

export default WorkExperiences;
