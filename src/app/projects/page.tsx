import React from "react";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const ProjectShowcasePage = () => {
  const projects = [
    {
      title: "E-Commerce Website in Next.js",
      description: `A fully functional e-commerce website built with Next.js. Features include product listings, user authentication, shopping cart, and checkout. This project was developed to practice frontend and backend integration, ensuring a seamless shopping experience for users.`,
      image: "/images/ecom.jpg",
      link: "https://hackhathon-01-zain.vercel.app/",
    },
    {
      title: "Portfolio in Next.js",
      description: `This is my personal portfolio built using Next.js. It showcases my skills, experience, and projects in a responsive and interactive layout. I implemented dynamic routing and SEO-friendly features to make it user and search engine friendly.`,
      image: "/images/pro.jpg",
      link: "https://zain1-ten.vercel.app/",
    },
    {
      title: "Banking Application in C++",
      description: `A banking application built in C++ that simulates banking operations like balance check, transfer, and withdrawal, focusing on object-oriented programming concepts. It provides a command-line interface for interacting with bank accounts and processes transactions securely.`,
      image: "/images/bank.png",
      link: "",
    },
    {
      title: "College Management System in C++",
      description: `A college management system designed to handle student data, attendance, grades, and other administrative tasks. This application uses file handling in C++ to store and manage the data efficiently, making it easy for teachers and students to access records.`,
      image: "/images/sm.png",
      link: "",
    },
    {
      title: "Chatbot in C++",
      description: `A simple chatbot application built in C++ that uses basic AI concepts to interact with users and provide automated responses. The chatbot simulates conversations, answering user queries about basic topics, demonstrating natural language processing capabilities.`,
      image: "/images/chatbot.png",
      link: "",
    },
    {
      title: "Video Editing & Graphic Designing",
      description: `A collection of my work in video editing and graphic designing. I have designed logos, banners, product animations, and various other assets for clients. The project showcases my creative process and attention to detail, available for view on my blog.`,
      image: "/images/comb.png",
      link: "/blog",
    },
  ];

  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-[var(--bgColorDark)] min-h-screen">
      <ConstrainedBox classNames="px-4 py-8 pt-16">
        <Column classNames="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            My Projects Showcase
          </h1>
          <p className="text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)] mt-4">
            A collection of my work in web development, C++ programming, and graphic designing.
          </p>
        </Column>

        {/* Projects Grid */}
        <Row classNames="flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Column key={index} classNames="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="relative rounded-md overflow-hidden shadow-lg bg-black dark:bg-gray-800">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover"
                />

                {/* Project Description */}
                <div className="p-4 bg-transparent">
                  <h3 className="text-xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--textColorLight)] dark:text-[var(--textColor)] mt-2">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)] mt-4 block"
                    >
                      View Project <FontAwesomeIcon icon={faLaptopCode} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </Column>
          ))}
        </Row>

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

export default ProjectShowcasePage;
