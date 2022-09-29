import ScrollToTop from "components/ScrollToTop";
import React from "react";
import { useLocation } from "react-router-dom";

export interface WithScrollToTopProps {}

export const withScrollToTop = <
  T extends WithScrollToTopProps = WithScrollToTopProps
>(
  WrappedComponent: React.ComponentType<T>
) => {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTheme = (props: Omit<T, keyof WithScrollToTopProps>) => {
    React.useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    return (
      <>
        <WrappedComponent {...(props as T)} />
        <ScrollToTop />
      </>
    );
  };

  ComponentWithTheme.displayName = `withScrollToTop(${displayName})`;

  return ComponentWithTheme;
};
