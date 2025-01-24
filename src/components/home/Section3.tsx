import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

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
