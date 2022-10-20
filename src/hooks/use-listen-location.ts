import React from "react";
import { useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";

export const useLocationEffect = (callback: (location?: Location) => any) => {
  const location = useLocation();

  React.useEffect(() => {
    callback(location);
  }, [location, callback]);
};
