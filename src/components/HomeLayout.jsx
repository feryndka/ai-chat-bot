import React from "react";
import { Toggle } from "./Toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCardTitle } from "./HoverCardTitle";
import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div className="max-w-4xl px-4 md:mx-auto md:px-0 h-screen flex flex-col">
      {/* Header */}
      <div className="flex py-3 justify-between items-center bg-white dark:bg-background">
        {/* Traffic light buttons */}
        <div className="flex gap-2">
          <div className="h-4 w-4 bg-red-500 rounded-full"></div>
          <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
          <div className="h-4 w-4 bg-green-500 rounded-full"></div>
        </div>

        {/* Toggle Theme Button */}
        <Toggle />
      </div>

      {/* Chat UI Container */}
      <div className="flex-grow border rounded-md shadow-md dark:border-gray-700 bg-white dark:bg-gray-900 mb-4">
        {/* Chat Header */}
        <div className="border-b dark:border-gray-700 px-4 py-3 flex items-center justify-between shadow-sm dark:shadow-md">
          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">
              <HoverCardTitle />
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">AI Chat</p>
          </div>

          {/* Avatar */}
          <Link href={"/"}>
            <Avatar>
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>FA</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Chat Content */}
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
