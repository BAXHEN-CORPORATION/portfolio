//** External Imports */
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//** Local Imports */
import { allProjects, filters, FilterTag, Project } from "app-data";

import BestProjects from "components/Projects";

import { withScrollToTop } from "hoc";
import { MessagesIds } from "lang/types";
import { FormattedMessage } from "react-intl";

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
  const location = useLocation();

  const [tag, setTag] = React.useState<FilterTag>(
    location?.state?.tag || "all"
  );

  const filterByTag = ({ tags }: Project) => {
    if (tag === "all") return true;

    const currTag = tags.find((projectTag) => projectTag.tag === tag);

    if (currTag) {
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
          <FormattedMessage id={MessagesIds.FILTER_LABEL} />:
        </Typography>

        {filters.map(({ label, tag: filterTag }) => (
          <Button
            className={tag === filterTag ? "active" : ""}
            variant="filter"
            key={filterTag}
            onClick={() => setTag(filterTag)}
          >
            <FormattedMessage id={label} />
          </Button>
        ))}
      </Stack>
      <Box
        flex={1}
        component={motion.div}
        layout
        display="grid"
        gridTemplateColumns="repeat(auto-fit, 150px)"
        gridTemplateRows="repeat(auto-fit, 180px)"
        height="min-content"
        gap="2rem"
      >
        <BestProjects projects={allProjects.filter(filterByTag)} />
      </Box>
    </Stack>
  );
};

Portfolio.defaultProps = defaultProps;

export default withScrollToTop(Portfolio);
