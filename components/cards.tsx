import React from "react";
import { mockData } from "@/mocdata/data";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cards = () => {
  return (
    <>
      {mockData.map((item, i) => (
        <Card key={i} className=" flex flex-col items-center min-w-[300px] ">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>{item.projectName}</CardTitle>
            <CardDescription>Basic Project</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={item.projectLink}>
              <Image
                src={item.projectImage}
                className="rounded-md"
                alt="projectImage"
                width={300}
                height={250}
              />
            </Link>
          </CardContent>
          <CardFooter className=" text-xs border border-t-2 w-full flex justify-center">
            <p className="text-center w-full mt-4 ">2 Days Ago</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Cards;
