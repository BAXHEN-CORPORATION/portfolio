import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export interface Social {
  href: string;
  name: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export const socials: Social[] = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/baxhen/",
    Icon: LinkedInIcon,
  },
  { href: "https://github.com/baxhen", Icon: GitHubIcon, name: "github" },
  // { href: "https://instagram.com", Icon: InstagramIcon },
  // { href: "https://facebook.com", Icon: FacebookIcon },
  // { href: "https://twitter.com", Icon: TwitterIcon },
  // { href: "https://pintrest.com", Icon: PinterestIcon },
];
