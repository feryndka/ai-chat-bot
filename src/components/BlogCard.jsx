import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ thumbnail, title, desc }) => {
  return (
    <Card className="my-5 hover:shadow-md dark:hover:shadow-[0_0_10px_grey]">
      <div className="md:flex">
        <div className="w-80">
          <Image
            src={thumbnail}
            width={500}
            height={500}
            alt="thumbnail"
            className="w-full h-full rounded-t-md"
          />
        </div>
        <div className="flex justify-between flex-col items-center md:items-start text-center md:text-start">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>
              <Link href={"/"}>Read more</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
