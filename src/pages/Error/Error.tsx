//** External Imports */
import React from "react";

//** Local Imports */

//** Typings */
export interface ErrorProps {}

//** Default Props */
const defaultProps: Partial<ErrorProps> = {};

/**
 * Page for rendering error on routes
 *
 * @page
 */
const Error: React.FC<ErrorProps> = () => {
  return <div>Error</div>;
};

Error.defaultProps = defaultProps;

export default Error;
