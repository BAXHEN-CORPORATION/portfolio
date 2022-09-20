import { create, themes } from "@storybook/theming";

import logo from "../public/logo.png";

export default create({
  ...themes.dark,
  brandTitle: "Baxhen",
  brandUrl: "https://baxhen.io",
  brandImage: logo,
  brandTarget: "_self",
});
