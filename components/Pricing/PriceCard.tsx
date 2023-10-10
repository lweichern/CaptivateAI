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

const checkCircleClassname = "bg-green-500 rounded-full w-5 h-5";

type PropType = {
  subscriptionType: string;
  price?: number;
  features: string[];
};

function PriceCard({ subscriptionType, price, features }: PropType) {
  return (
    <Card
      className={`${
        subscriptionType == "Pro" && "border-4 border-primary"
      } w-full`}
    >
      <CardHeader>
        <CardTitle>{subscriptionType}</CardTitle>
        <CardDescription>
          {price ? `$${price.toString()} / month` : "Free"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-3 flex flex-col gap-3">
          {features.map((feature) => (
            <li>
              <CheckCircle2 className={checkCircleClassname} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      {price && (
        <CardFooter>
          <Button>Buy Now</Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default PriceCard;
