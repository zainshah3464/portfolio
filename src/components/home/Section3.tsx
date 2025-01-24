import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  classNames?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, classNames }) => {
  return <h2 className={classNames}>{children}</h2>;
};

interface ConstrainedBoxProps {
  children: React.ReactNode;
  classNames?: string;
}

const ConstrainedBox: React.FC<ConstrainedBoxProps> = ({ children, classNames }) => {
  return <div className={classNames}>{children}</div>;
};

interface ResponsiveBoxProps {
  children: React.ReactNode;
  classNames?: string;
  id?: string;
}

const ResponsiveBox: React.FC<ResponsiveBoxProps> = ({ children, classNames, id }) => {
  return (
    <div className={classNames} id={id}>
      {children}
    </div>
  );
};

interface ExperienceItemProps {
  data: any;
  classNames?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ data, classNames }) => {
  return <div className={classNames}>{data.title}</div>;
};

interface TimelineProps {
  data: { title: string; content: React.ReactNode }[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          {item.content}
        </div>
      ))}
    </div>
  );
};

const experiences = [
  {
    title: "Software Developer at XYZ",
    startDate: "Jan 2022",
    endDate: "Dec 2023",
  },
  {
    title: "Intern at ABC",
    startDate: "May 2021",
    endDate: "Dec 2021",
  },
];

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-gradient-to-r from-[#f2f2f2] to-[#e0e0e0] min-h-screen flex items-center justify-center px-6 py-16"
      id={id}
    >
      <ConstrainedBox classNames="p-6 py-16 rounded-xl shadow-2xl bg-[#1a1a1a]">
        {/* Section Title */}
        <SectionTitle classNames="text-3xl font-extrabold text-[#f5f5f5] tracking-wide mb-8">
          Experiences
        </SectionTitle>

        {/* Timeline */}
        <Timeline
          data={experiences.map((exp, i) => ({
            title: exp.startDate + " - " + (exp.endDate || "Present"),
            content: (
              <ExperienceItem
                key={`experience-${i}`}
                data={exp}
                classNames="bg-[#1f1f1f] p-6 rounded-lg shadow-md mb-8 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#333333]"
              />
            ),
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
