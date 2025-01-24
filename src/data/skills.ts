import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Video Editing",
    items: [
      {
        title: "Adobe Premiere Pro",
        level: SkillLevel.Expert,
        icon: "/skills/adobe-premiere.svg",
      },
      {
        title: "Final Cut Pro",
        level: SkillLevel.Intermediate,
        icon: "/skills/final-cut-pro.svg",
      },
      {
        title: "DaVinci Resolve",
        level: SkillLevel.Intermediate,
        icon: "/skills/davinci-resolve.svg",
      },
    ],
  },
  {
    title: "Graphic Designing",
    items: [
      {
        title: "Adobe Illustrator",
        level: SkillLevel.Expert,
        icon: "/skills/adobe-illustrator.svg",
      },
      {
        title: "Adobe Photoshop",
        level: SkillLevel.Expert,
        icon: "/skills/adobe-photoshop.svg",
      },
      {
        title: "CorelDRAW",
        level: SkillLevel.Intermediate,
        icon: "/skills/coreldraw.svg",
      },
    ],
  },
  {
    title: "Logo Designing",
    items: [
      {
        title: "Adobe Illustrator",
        level: SkillLevel.Expert,
        icon: "/skills/adobe-illustrator.svg",
      },
      {
        title: "CorelDRAW",
        level: SkillLevel.Intermediate,
        icon: "/skills/coreldraw.svg",
      },
    ],
  },
  {
    title: "Product Animation",
    items: [
      {
        title: "Blender",
        level: SkillLevel.Intermediate,
        icon: "/skills/blender.svg",
      },
      {
        title: "Adobe After Effects",
        level: SkillLevel.Expert,
        icon: "/skills/adobe-after-effects.svg",
      },
    ],
  },
  {
    title: "Web Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      {
        title: "C++",
        level: SkillLevel.Expert,
        icon: "/skills/cplusplus.svg",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Product Animation",
        level: SkillLevel.Intermediate,
        icon: "/skills/product-animation.svg",
      },
      {
        title: "Posters & Banners",
        level: SkillLevel.Expert,
        icon: "/skills/poster-banner-design.svg",
      },
      {
        title: "Advertisements",
        level: SkillLevel.Expert,
        icon: "/skills/advertisement-design.svg",
      },
    ],
  },
];

export default skills;
