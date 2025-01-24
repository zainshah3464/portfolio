import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Services",
    link: "/services",  // New route for services
    icon: faBriefcase,
  },
  {
    name: "Experiences",
    link: "/experiences",  // New route for experiences
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: "/skills",  // New route for skills
    icon: faAward,
  },
  {
    name: "Projects",
    link: "/projects",  // New route for projects
    icon: faLaptopCode,
  },
  {
    name: "Blog",
    link: "/blog",  // New route for services
    icon: faBriefcase,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
  {
    name: "Payment",
    link: "/payment",
    icon: faCreditCard,
  },
];
