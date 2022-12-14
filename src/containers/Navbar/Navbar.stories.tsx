import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from ".";
import Stack from "@mui/material/Stack";
import { navLinks } from "../../app-data/nav-links";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [withRouter],
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    bgcolor="common.cream"
    p={8}
  >
    <Navbar {...args} />
  </Stack>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  links: navLinks,
};
