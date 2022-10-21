import { MessagesIds } from "lang/types";
import { NavLinks } from "containers/Navbar/Navbar";

export const navLinks: NavLinks[] = [
  { to: "/", label: MessagesIds.LINK_HOME },
  { to: "/portfolio", label: MessagesIds.LINK_PORTFOLIO },
];
