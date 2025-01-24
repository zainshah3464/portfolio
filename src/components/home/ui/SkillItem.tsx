import type { ISkillListItem } from "@/types";
import Image from "next/image";
import CardBox from "@/components/core/CardBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <CardBox classNames="p-6 items-center justify-start rounded-xl border border-[rgba(255,255,255,0.15)] dark:bg-[#1e293b] bg-[#f8fafc] shadow-lg transition-all transform hover:scale-105 duration-300 group">
      <p className="text-2xl font-semibold text-center text-[#334155] dark:text-[#ffffff] mb-4">{data.title}</p>

      {data.items.length > 0 ? (
        <Row classNames="gap-6 mt-6 flex-wrap justify-center items-center">
          {data.items.map((skill, index) => {
            return (
              <Column
                key={`skill-item-${index}`}
                classNames="items-center gap-3 text-[#475569] dark:text-[#e2e8f0] transition-all hover:text-[#1d4ed8]"
              >
                {skill.icon ? (
                  <Image
                    src={skill.icon}
                    alt={`logo-${skill.title}`}
                    width={120}
                    height={120}
                    sizes="100%"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/images/logical-thinking.png"
                    className="w-16 lg:w-20 h-auto rounded-full shadow-md transition-all transform hover:scale-110"
                  />
                ) : null}

                <p className="text-sm font-medium text-center">{skill.title}</p>
              </Column>
            );
          })}
        </Row>
      ) : null}
    </CardBox>
  );
};

export default SkillItem;
