//** External Imports */
import React from "react";

import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//** Local Imports */

//** Typings */
export interface SrollToTopProps {}

//** Default Props */
const defaultProps: Partial<SrollToTopProps> = {};

/**
 * Container for scrooling to top
 *
 * @container
 */
const ScrollToTop: React.FC<SrollToTopProps> = () => {
  const [show, setShow] = React.useState(false);

  const onScroll = () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Fade
      in={show}
      timeout={{ enter: 1000, exit: 1000 }}
      unmountOnExit
      mountOnEnter
    >
      <IconButton
        onClick={goToTop}
        sx={{
          position: "fixed",
          bottom: 100,
          right: 30,
          backgroundColor: "secondary.main",
          "&:hover, &:focus": {
            backgroundColor: "secondary.main",
          },
        }}
      >
        <KeyboardArrowUpIcon fontSize="large" htmlColor="white" />
      </IconButton>
    </Fade>
  );
};

ScrollToTop.defaultProps = defaultProps;

export default ScrollToTop;
