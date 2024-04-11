import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const BlogCard = ({ thumbnail, title, desc, price }) => {
  return (
    <Card className="my-5 hover:shadow-md dark:hover:shadow-[0_0_10px_grey]">
      <div className="md:flex items-center">
        <div className="md:w-32 md:h-32 flex items-center justify-center">
          <div className="w-32 h-full flex items-center m-2">
            <Image
              src={thumbnail}
              width={500}
              height={500}
              alt="thumbnail"
              className="w-32 h-32"
            />
          </div>
        </div>
        <div className="flex justify-between flex-col items-center md:items-start text-center md:text-start">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Badge variant="outline" className="px-4 py-2 text-sm">${price}</Badge>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
