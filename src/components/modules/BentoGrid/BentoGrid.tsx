import { UiWrapper } from "@/components/shared";
import CardWrapper from "@/components/shared/CardWrapper";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BentoGrid = () => {
  return (
    <UiWrapper>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>
                Total of 2 years of experience in Corporate
              </CardDescription>
            </CardHeader>
            <div className="grid grid-cols-2 gap-4 p-6">
              <Card className="px-2 py-5">
                <CardTitle
                  className="px-2 py-2
                "
                >
                  Devstree It
                </CardTitle>
                <CardDescription className="px-2 py-2">
                  Jr Software Developer | April 2023 - Present <br />
                </CardDescription>
              </Card>
              <Card className="px-2 py-5">
                <CardTitle
                  className="px-2 py-2
                "
                >
                  Viji Foods
                </CardTitle>
                <CardDescription className="px-2 py-2">
                  Customer Service Team Lead | Jan 2022 - Nov 2022 <br />
                </CardDescription>
              </Card>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="w-full h-full 
           flex justify-center items-center
          "
          >
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
      </div>
    </UiWrapper>
  );
};

export default BentoGrid;
