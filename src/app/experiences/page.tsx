import React from "react";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import { TimelineEntry } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ExperiencePage = () => {
  const experiences: TimelineEntry[] = [
    {
      title: "Software Development Engineer",
      content: (
        <>
          <p>
            I worked as a Software Development Engineer at StarApps Studio, focusing on mobile app development, backend systems, and product strategy.
          </p>
          <p><strong>Dates:</strong> January 2025 - Present</p>
          <p><strong>Skills Used:</strong> React, Node.js, JavaScript, TypeScript</p>
        </>
      ),
    },
    {
      title: "Full Stack Developer",
      content: (
        <>
          <p>
            As a Full Stack Developer at Merito, I contributed to both frontend and backend development, focusing on building scalable and maintainable web applications.
          </p>
          <p><strong>Dates:</strong> August 2024 - December 2024</p>
          <p><strong>Skills Used:</strong> Next.js, JavaScript, MongoDB, Express.js</p>
        </>
      ),
    },
    {
      title: "Full Stack Development Intern",
      content: (
        <>
          <p>
            During my internship at TECHOX LLP, I worked on web development projects and assisted in implementing frontend and backend features for various client projects.
          </p>
          <p><strong>Dates:</strong> June 2024 - August 2024</p>
          <p><strong>Skills Used:</strong> React, Node.js, SQL</p>
        </>
      ),
    },
    {
      title: "Web Development Intern",
      content: (
        <>
          <p>
            I interned at Career Corner Education Pvt Ltd, assisting in building and maintaining websites, with a focus on responsive design and user experience.
          </p>
          <p><strong>Dates:</strong> January 2024 - June 2024</p>
          <p><strong>Skills Used:</strong> HTML, CSS, JavaScript, WordPress</p>
        </>
      ),
    },
    {
      title: "C++ Programming",
      content: (
        <>
          <p>
            Learned and applied C++ programming in college, gaining hands-on experience with algorithms, data structures, and object-oriented programming principles.
          </p>
          <p><strong>Skills Used:</strong> C++, Algorithms, Data Structures</p>
        </>
      ),
    },
  ];

  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-[var(--bgColorDark)] min-h-screen">
      <ConstrainedBox classNames="px-4 py-8 pt-16">
        <Column classNames="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            My Experience & Education
          </h1>
          <p className="text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)] mt-4">
            A glimpse of my professional and academic journey in the tech industry.
          </p>
        </Column>

        {/* Education Section */}
        <div className="mt-16">
          <Row classNames="flex-col lg:flex-row justify-between items-center mb-12">
            <Column classNames="w-full lg:w-1/2 px-4 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Education
              </h3>
              <p>
                <strong>1st Year Student</strong> at Pak Askari College & Governor House Sindh IT University, learning programming and development.
              </p>
              <p>
                <strong>Matriculation:</strong> Passed from Nishan-e-Haider School with excellent grades.
              </p>
              <p>
                <strong>Currently Learning:</strong> Programming languages like JavaScript, C++, and web development at university.
              </p>
            </Column>
            <Column classNames="w-full lg:w-1/2 px-4 text-center">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]"
              />
            </Column>
          </Row>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <Row classNames="flex-col lg:flex-row justify-between items-center mb-12">
            <Column classNames="w-full lg:w-1/2 px-4 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            Skills & Expertise
              </h3>
              <p>
                <strong>Graphic Designer & Video Editor:</strong> Self-employed, providing professional design services for clients, creating logos, videos, and advertisements.
              </p>
              <p>
                <strong>Programming Skills:</strong> Expertise in C++, JavaScript, and web development technologies.
              </p>
            </Column>
            <Column classNames="w-full lg:w-1/2 px-4 text-center">
              <FontAwesomeIcon
                icon={faCode}
                className="text-6xl text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]"
              />
            </Column>
          </Row>
        </div>

        {/* Achievement Section */}
        <div className="mt-16">
          <Row classNames="flex-col lg:flex-row justify-between items-center mb-12">
            <Column classNames="w-full lg:w-1/2 px-4 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                Achievements
              </h3>
              <p>
                <strong>Winner:</strong> Steam Exhibition Certificate for my Banking Application project developed in C++.
              </p>
              <Image
                src="/images/winner.jpg" // Make sure to add the correct image path
                alt="Steam Exhibition Certificate"
                width={400}
                height={300}
                className="rounded-md mt-4"
              />
            </Column>
           
          </Row>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
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

export default ExperiencePage;
