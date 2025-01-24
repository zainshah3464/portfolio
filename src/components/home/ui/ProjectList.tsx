"use client";

import { createRef } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-6 overflow-x-auto scroll-smooth no-scrollbar bg-[var(--primaryColor5)] dark:bg-[var(--primaryColor2)] rounded-xl p-4 shadow-lg"
        elementRef={carouselRef}
      >
        {projects.map((item, index) => {
          return <ProjectItem key={`project-item-${index}`} project={item} />;
        })}
      </Row>

      <Row classNames="w-full items-center justify-center gap-8 mt-10">
        <button
          type="button"
          className="app__filled_btn !px-6 !py-3 !text-lg !font-semibold bg-[#1d4ed8] text-white rounded-lg transition-all transform hover:scale-105 hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
          onClick={_handleOnClickPrev}
        >
          Prev
        </button>

        <button
          type="button"
          className="app__filled_btn !px-6 !py-3 !text-lg !font-semibold bg-[#1d4ed8] text-white rounded-lg transition-all transform hover:scale-105 hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
          onClick={_handleOnClickNext}
        >
          Next
        </button>
      </Row>
    </Column>
  );
};

export default ProjectList;
