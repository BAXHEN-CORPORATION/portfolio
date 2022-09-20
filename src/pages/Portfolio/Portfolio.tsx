//** External Imports */
import React from "react";

//** Local Imports */

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
  return <div>Portfolio</div>;
};

Portfolio.defaultProps = defaultProps;

export default Portfolio;
