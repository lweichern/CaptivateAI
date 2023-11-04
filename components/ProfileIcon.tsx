import { LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/nextjs";

export function ProfileDropdownMenu() {
  const { user } = useUser();
  const { signOut } = useClerk();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Image
            loader={() => user?.imageUrl}
            src={`${user?.imageUrl}`}
            alt=""
            width={30}
            height={30}
            className="rounded-full outline-none"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 flex flex-col gap-4 py-4">
        <DropdownMenuItem className="flex gap-3">
          <Image
            loader={() => user?.imageUrl}
            src={`${user?.imageUrl}`}
            alt=""
            width={40}
            height={40}
            className="rounded-full outline-none"
          />
          <div>
            <h4>{user?.fullName}</h4>
            <h5 className="text-sm text-slate-400">
              {user?.primaryEmailAddress?.emailAddress}
            </h5>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Manage Account</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
