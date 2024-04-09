import React from "react";
import { Toggle } from "./Toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "./Menu";
import { HoverCardTitle } from "./HoverCardTitle";

const HomeLayout = ({ children }) => {
  return (
    <div className="max-w-[90%] mx-auto h-fit mb-10">
      <div className="flex py-3 justify-between">
        <div className="flex gap-3 items-center">
          <div className="h-6 w-6 bg-red-500 rounded-full"></div>
          <div className="h-6 w-6 bg-yellow-500 rounded-full"></div>
          <div className="h-6 w-6 bg-green-500 rounded-full"></div>
        </div>
        <div>
          <Toggle />
        </div>
      </div>
      <div className="h-full border rounded-md shadow-[0_0_10px_grey]">
        <div className="h-16">
          <div className="border-b h-full py-2 px-4 shadow-md dark:shadow-[0_2px_10px_grey]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold">
                  <HoverCardTitle />
                </h1>
                <h1 className="dark:text-gray-400 text-gray-600 text-sm cursor-default">
                  Blog Website
                </h1>
              </div>
              <div>
                <Avatar>
                  <AvatarImage src="/avatar.jpeg" />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="pb-2">
            <Menu />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
