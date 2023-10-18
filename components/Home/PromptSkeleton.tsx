import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "../ui/separator";

function PromptSkeleton() {
  return (
    <div className="flex flex-col items-start space-x-4 my-6">
      <div>
        <Skeleton className="h-4 w-[120px]" />
      </div>
      <Separator className="my-3" />
      <div className="space-y-4 w-full my-4">
        {Array.from({ length: 5 }, (_, index) => (
          <Skeleton key={index} className="h-4 w-[90%]" />
        ))}
      </div>
      {/* <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div> */}
    </div>
  );
}

export default PromptSkeleton;
