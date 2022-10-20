//** External Imports */
import React from "react";

import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//** Local Imports */
import { Skill } from "app-data";

//** Typings */
export interface MySkillsProps {
  skills: Skill[];
}

//** Default Props */
const defaultProps: Partial<MySkillsProps> = {};

/**
 * Container for rendering skills
 *
 * @container
 */
const MySkills: React.FC<MySkillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map(({ name, proficiency, value }, index) => (
        <Stack key={index} spacing={1}>
          <Stack direction="row">
            <Typography variant="section">{name}:</Typography>
            <Typography variant="section" ml="auto" mr="3rem">
              {proficiency}
            </Typography>
          </Stack>
          <LinearProgress
            aria-label={`${value} out of 100 for ${name}`}
            variant="determinate"
            color="secondary"
            sx={{ backgroundColor: "white" }}
            value={value}
          />
        </Stack>
      ))}
    </>
  );
};

MySkills.defaultProps = defaultProps;

export default MySkills;
