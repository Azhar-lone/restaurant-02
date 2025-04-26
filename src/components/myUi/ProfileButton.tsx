"use client";
import React from "react";
import { cn } from "@/lib/utils";
//shadcn  components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Icons
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings } from "lucide-react";

const user = {
  userName: "Azhar Lone",
  profileImage: "/images/user",
  role: "admin",
};

const ProfileButton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(className)}>
        <Avatar>
          <AvatarFallback>
            {user?.userName?.charAt(0).toUpperCase()}
          </AvatarFallback>
          <AvatarImage src={user?.profileImage} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 ">
        <DropdownMenuItem className="gap-4 p-2  cursor-pointer flex items-center ">
          <Avatar>
            <AvatarFallback>
              {user?.userName?.charAt(0).toUpperCase()}
            </AvatarFallback>
            <AvatarImage src={user?.profileImage} />
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-lg">{user?.userName}</h1>
            <h2 className="text-foreground/60">{user?.role}</h2>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="gap-2 cursor-pointer">
          <Settings /> Account Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 cursor-pointer">
          <LogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileButton;
