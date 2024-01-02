import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import SlideUpAnimation from "../SlideUpAnimation";

const checkCircleClassname = "bg-green-500 rounded-full w-5 h-5";

type PropType = {
  subscriptionType: string;
  price?: number;
  features: string[];
};

function PriceCard({ subscriptionType, price, features }: PropType) {
  return (
    <SlideUpAnimation className="w-full rounded-lg">
      <Card
        className={`${
          subscriptionType == "Pro" && "border-4 border-primary"
        } w-full group h-full rounded-sm`}
      >
        <CardHeader className="group-hover:skew-y-6 group-hover:translate-y-[15px] duration-100">
          <CardTitle>{subscriptionType}</CardTitle>
          <CardDescription>
            {price ? `$${price.toString()} / month` : "Free"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-3 flex flex-col gap-3">
            {features.map((feature, index) => (
              <li key={index}>
                <CheckCircle2 className={checkCircleClassname} />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        {price !== 0 ? (
          <CardFooter>
            <Button>Buy Now</Button>
          </CardFooter>
        ) : (
          <CardFooter>
            <Button className="bg-transparent border-primary border-2">
              Free Trial
            </Button>
          </CardFooter>
        )}
      </Card>
    </SlideUpAnimation>
  );
}

export default PriceCard;
