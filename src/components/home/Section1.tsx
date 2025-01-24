import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <img
              src="/images/profilez.jpeg"
              alt="Zain Ali Shah"
              className="w-32 h-32 rounded-full object-cover border-4 border-[var(--primaryColor)]"
            />
          </div>

          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Zain Ali Shah.", "@zainshahzs110"]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
            Video Editor 🖥 & Graphic Designer 🖥
          </p>

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            {/* Let's Talk Button */}
            <a
              href="https://wa.me/923458750296"
              target="_blank"
              rel="noopener noreferrer"
              className="app__outlined_btn px-6 py-2 rounded-lg text-[var(--textColor)] border-[var(--textColor)] font-medium"
            >
              Let&apos;s Talk
            </a>
            {/* Resume Later Button */}
            <a
              href="/images/zainresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="app__outlined_btn px-6 py-2 rounded-lg text-[var(--textColor)] border-[var(--textColor)] font-medium"
            >
              Resume Later
            </a>
          </div>
        </Column>

        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
