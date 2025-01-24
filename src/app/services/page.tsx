import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPalette, faPen, faBox, faCreditCard, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";

const ServicesPage = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-[var(--bgColorDark)] min-h-screen">
      <ConstrainedBox classNames="px-4 py-8 pt-16">
        <Column classNames="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            Professional Services
          </h1>
          <p className="text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)] mt-4">
            Explore my top-tier services that deliver exceptional quality and results.
          </p>
        </Column>

        {/* Service 1: Video Editing */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Video Editing
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I provide high-quality video editing services, from basic cutting to advanced effects. Whether for social media, YouTube, or promotional content, I make sure your video is engaging and visually stunning.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/after3.png" alt="Adobe Premiere" className="w-16 h-16" />
                <img src="/skills/adpr.png" alt="After Effects" className="w-16 h-16" />
                <img src="/skills/12.png" alt="Final Cut Pro" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faVideo} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Service 2: Graphic Design */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Graphic Design
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I craft stunning visuals that communicate your message effectively. From logos and branding to social media graphics and illustrations, I help bring your vision to life with creative designs.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/psop.png" alt="Photoshop" className="w-16 h-16" />
                <img src="/skills/illus1.png" alt="Illustrator" className="w-16 h-16" />
                <img src="/skills/canva.jpeg" alt="InDesign" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faPalette} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Service 3: Logo Design */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Logo Design
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I specialize in creating unique and memorable logos that reflect your brand’s identity. A great logo is essential for your business and I ensure it’s versatile and timeless.
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

        {/* Service 4: Product Animation */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Product Animation
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I bring your products to life with 3D and 2D animations, showcasing their features and benefits in an engaging way. Perfect for explainer videos, product launches, and more.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <img src="/skills/blender.png" alt="Blender" className="w-16 h-16" />
                <img src="/skills/canva.jpeg" alt="Cinema 4D" className="w-16 h-16" />
                <img src="/skills/after3.png" alt="After Effects" className="w-16 h-16" />
              </div>
            </Column>
            <Column classNames="w-full md:w-1/2 px-4 text-center">
              <FontAwesomeIcon icon={faBox} className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]" />
            </Column>
          </Row>
        </div>

        {/* Service 5: Web Development */}
        <div className="mt-16">
          <Row classNames="flex-col md:flex-row justify-between items-center">
            <Column classNames="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Web Development
              </h2>
              <p className="mt-4 text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                I build dynamic, scalable, and responsive websites using Next.js, JavaScript, and TypeScript. My web solutions are optimized for performance and user experience.
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

export default ServicesPage;
