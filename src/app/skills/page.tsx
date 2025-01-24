import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faCode, faDesktop, faPaintBrush, faFilm, faClipboardList, faPen, faLaptopCode, faBox } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";


const SkillsPage = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-[var(--bgColorDark)] min-h-screen">
      <ConstrainedBox classNames="px-4 py-8 pt-16">
        <Column classNames="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            My Skills
          </h1>
          <p className="text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)] mt-4">
            Explore the skills I possess that help me create exceptional work in technology and design.
          </p>
        </Column>

        {/* Skill 1: Graphic Design */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Graphic Design
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I have advanced expertise in graphic design, using industry-standard tools to create visual masterpieces. From logos to advertisements, I can bring your creative vision to life.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/photoshop.png" alt="Photoshop" className="w-16 h-16" />
                <img src="/skills/illus1.png" alt="Illustrator" className="w-16 h-16" />
                <img src="/skills/canva.jpeg" alt="InDesign" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faPaintBrush} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Skill 2: Video Editing */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Video Editing
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I provide professional video editing services with a focus on cinematic storytelling, transitions, effects, and color grading. Perfect for YouTube, promotional videos, and more.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/adpr.png" alt="Adobe Premiere" className="w-16 h-16" />
                <img src="/skills/after3.png" alt="After Effects" className="w-16 h-16" />
                <img src="/skills/12.png" alt="Final Cut Pro" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faFilm} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Skill 3: Logo Design */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Logo Design
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                Creating unique logos that stand out and reflect your brand’s identity is my specialty. I focus on versatility and timeless designs that work across all platforms.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/illus1.png" alt="Adobe Illustrator" className="w-16 h-16" />
                <img src="/skills/photoshop.png" alt="Photoshop" className="w-16 h-16" />
                <img src="/skills/canva.jpeg" alt="CorelDRAW" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faPen} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Skill 4: Web Development */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Web Development
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                As a web developer, I specialize in building fast, responsive, and user-friendly websites using Next.js, JavaScript, and TypeScript. Your website’s performance and user experience matter the most.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/nextjs.png" alt="Next.js" className="w-16 h-16" />
                <img src="/skills/javascript.svg" alt="JavaScript" className="w-16 h-16" />
                <img src="/skills/typescript.svg" alt="TypeScript" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faLaptopCode} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Skill 5: Product Animation */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Product Animation
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I create dynamic product animations in both 2D and 3D, giving your product features a captivating visual story. Perfect for marketing, product demos, and educational content.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/blender.png" alt="Blender" className="w-16 h-16" />
                <img src="/skills/after3.png" alt="Cinema 4D" className="w-16 h-16" />
                <img src="/skills/canva.jpeg" alt="After Effects" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faBox} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* New Skill Section: Programming Skills */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Programming Skills
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I am proficient in various programming languages and frameworks that allow me to develop high-performance applications and systems. Here are some of the technologies I excel in:
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/cpp.png" alt="C++" className="w-16 h-16" />
                <img src="/skills/javascript.svg" alt="JavaScript" className="w-16 h-16" />
                <img src="/skills/typescript.svg" alt="TypeScript" className="w-16 h-16" />
                <img src="/skills/nextjs.png" alt="Python" className="w-16 h-16" />
                <img src="/skills/react.svg" alt="React" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faCode} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923458750296"
            target="_blank"
            rel="noopener noreferrer"
            className="app__outlined_btn text-xl px-6 py-2 rounded-lg border-[var(--primaryColor)] text-[var(--primaryColor)]"
          >
            Get in Touch: +92 345 8750296
          </a>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default SkillsPage;
