//** External Imports */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//** Local Imports */
import { filters, FilterTag } from "app-data/filters";
import { allProjects, Project } from "app-data";
import BestProjects from "components/Projects";
import Box from "@mui/material/Box";

//** Typings */
export interface PortfolioProps {}

//** Default Props */
const defaultProps: Partial<PortfolioProps> = {};

/**
 * Page for rendering portfolio
 *
 * @page
 */
const Portfolio: React.FC<PortfolioProps> = () => {
  const [tag, setTag] = React.useState<FilterTag>("all");

  const filterByTag = ({ tags }: Project) => {
    if (tag === "all") return true;

    if (tags.includes(tag)) {
      return true;
    }

    return false;
  };

  return (
    <Stack
      padding={{ tabletLarge: "4rem 10rem", mobile: "3rem" }}
      direction={{ tabletLarge: "row", mobile: "column" }}
      minHeight="100vh"
    >
      <Stack
        gap="0.25rem"
        alignItems="flex-start"
        mb="2rem"
        mr={{ tabletLarge: "5rem", mobile: 0 }}
        width={{ tabletLarge: "215px", mobile: "initial" }}
      >
        <Typography variant="info-title" color="black" mb="0.75rem">
          Sort by:
        </Typography>

        {filters.map(({ label, tag: filterTag }) => (
          <Button
            className={tag === filterTag ? "active" : ""}
            variant="filter"
            key={filterTag}
            onClick={() => setTag(filterTag)}
          >
            {label}
          </Button>
        ))}
      </Stack>
      <Box
        flex={1}
        component={motion.div}
        layout
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        height="min-content"
        gap="2rem"
      >
        <BestProjects projects={allProjects.filter(filterByTag)} />
      </Box>
    </Stack>
  );
};

Portfolio.defaultProps = defaultProps;

export default Portfolio;
