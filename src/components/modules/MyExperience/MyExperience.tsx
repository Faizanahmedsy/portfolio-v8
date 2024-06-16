import V3Wrapper from "@/components/shared/v3Wrapper";
import { cn } from "@/lib/utils";
import { experienceData } from "../../../../constants/data";
import Subtitle from "@/components/shared/subtitle";
import SectionTitle from "@/components/shared/section-title";

export default function MyExperience() {
  return (
    <>
      <V3Wrapper>
        <SectionTitle>Experience & Education</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard className="col-span-2">
            <div className="flex">
              <div className="bg-violet-200 text-violet-800 rounded-l-3xl w-full p-6">
                <Subtitle>{experienceData[0].subRoles[0].role}</Subtitle>
                <p className="text-sm">
                  {experienceData[0].company} | April 2023 - Present <br />
                </p>
              </div>
              <div className="bg-[#9ecac9] text-[#0d4644] rounded-r-3xl  w-full p-6">
                <Subtitle>{experienceData[0].subRoles[0].role}</Subtitle>
                <p className="text-sm">
                  {experienceData[0].company} | April 2023 - Present <br />
                </p>
              </div>
            </div>
          </SimpleCard>
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </V3Wrapper>
    </>
  );
}

const SimpleCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("border rounded-3xl", className)}>{children}</div>;
};
