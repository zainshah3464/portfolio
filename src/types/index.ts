import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import type { MouseEventHandler, ReactNode, RefObject } from "react";

// ==========================
// Navigation Menu Interfaces
// ==========================

/**
 * Represents a single navigation menu item.
 */
export interface INavMenuItem {
  id: string;
  title: string;
  path: string;
  section: string;
  submenu?: INavMenuItem[]; // Optional nested submenus
}

/**
 * Represents a navigation item with an icon and link.
 */
export interface INavItem {
  name: string;
  link: string;
  icon: IconProp;
}

// ==========================
// Experience and Project Interfaces
// ==========================

/**
 * Represents an experience item in the user's work history.
 */
export interface IExperienceItem {
  designation: string;
  company: string;
  startDate: string;
  endDate?: string; // Optional if current job
  isCurrentJob: boolean;
  location: string;
  shortDescription?: string; // Short description about the job
  description: string[]; // Detailed description of the job
}

/**
 * Enum for repository type.
 */
export enum RepoType {
  Public = "Public",
  Private = "Private",
}

/**
 * Enum for project type (e.g., personal, job work, freelance).
 */
export enum ProjectType {
  Personal = "Personal",
  JobWork = "JobWork",
  Freelance = "Freelance",
}

/**
 * Represents a project item.
 */
export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  repoType: RepoType;
  projectType?: ProjectType; // Optional project type
  githubUrl?: string; // GitHub URL, if applicable
  url?: string; // Live project URL
  tags?: string[]; // Tags related to the project
  screenshots?: string[]; // Optional screenshots for the project
  about?: string; // Optional detailed description of the project
}

// ==========================
// Service and Skill Interfaces
// ==========================

/**
 * Represents a service item provided by the user.
 */
export type IServiceItem = {
  id: number | string;
  title: string;
  icon?: IconDefinition;
  shortDescription: string;
  description: string;
  icons: string[]; // List of icons representing the service
};

/**
 * Represents a list of skills with their respective categories.
 */
export interface ISkillListItem {
  title: string;
  items: ISkillItem[];
}

/**
 * Enum for skill levels.
 */
export enum SkillLevel {
  Expert = "Expert",
  Intermediate = "Intermediate",
  Beginner = "Beginner",
}

/**
 * Represents an individual skill.
 */
export interface ISkillItem {
  title: string;
  level?: SkillLevel; // Optional skill level
  icon?: string; // Optional icon for the skill
}

// ==========================
// Social Links and Menu Props
// ==========================

/**
 * Represents a social link item.
 */
export interface ISocialLinkItem {
  url: string;
  icon: IconDefinition | string;
  text: string;
  name?: string; // Optional name for the link
}

/**
 * Props for a single menu item in the navigation menu.
 */
export interface MenuItemProps {
  items: INavMenuItem;
  depthLevel: number;
  mobileNav: boolean;
  handleCloseMobileMenu: () => void;
  current?: string;
}

/**
 * Props for a dropdown menu containing submenus.
 */
export interface DropdownMenuProps extends Omit<MenuItemProps, "items" | "current"> {
  submenus: INavMenuItem[];
  dropdown: boolean;
}

// ==========================
// Button and Core Component Props
// ==========================

/**
 * Props for a button component.
 */
export interface ButtonComponentProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  classNames?: string; // Optional additional class names
  name?: string; // Optional button name
}

/**
 * Props for a core component wrapper.
 */
export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string; // Optional additional class names
  onClick?: MouseEventHandler<HTMLDivElement>; // Optional click handler
  id?: string; // Optional unique identifier
  elementRef?: RefObject<HTMLDivElement>; // Optional reference to the element
}

// ==========================
// Viewport and Animations
// ==========================

/**
 * Props for viewport settings (e.g., for animations).
 */
export interface ViewportProps {
  root?: null | undefined;
  rootMargin?: string | undefined;
  threshold?: number | undefined;
}

/**
 * Props for shooting star animation.
 */
export interface ShootingStarProps {
  vw: number; // Viewport width
  vh: number; // Viewport height
}

// ==========================
// Timeline and Bullet Text
// ==========================

/**
 * Represents an entry in a timeline (e.g., a project or experience).
 */
export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

/**
 * Props for displaying bulleted text.
 */
export interface BulletedTextProps {
  children: ReactNode;
  classNames?: string; // Optional additional class names
  iconSize?: string | number; // Optional size for the bullet icon
  bulletColor?: string; // Optional color for the bullet icon
}
