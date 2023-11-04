import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center h-screen pt-40">
      <SignIn />
    </div>
  );
}
