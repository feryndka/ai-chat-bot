"use client";
import BlogCard from "@/components/BlogCard";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </>
    );
  }

  return (
    <div>
      {data.map((item, index) => {
        return <BlogCard key={index} products={item} />;
      })}
    </div>
  );
};

export default Home;

function Loading() {
  return (
    <Card className="flex flex-col gap-2 my-4 items-center md:items-start md:flex-row">
      <div className="w-44 h-32 flex items-center justify-center m-2">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex flex-col items-center justify-between w-[100%] h-32 md:items-start py-4">
        <div className="w-full flex flex-col items-center md:items-start">
          <Skeleton className="h-4 w-[50%] mb-2" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
        <Skeleton className="h-8 w-14"></Skeleton>
      </div>
    </Card>
  );
}
