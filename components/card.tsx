import React from "react";
import { mockData } from "@/mocdata/data";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <>
      {mockData.map((item, i) => (
        <div
          key={i}
          className="flex p-3 gap-3 rounded-md bg-[--accent] text-[--card] flex-col items-center justify-center border-2 border-rose-500"
        >
          <Link href={item.projectLink}>
            <Image
              src={item.projectImage}
              className="top-0 left-0 hover:scale-105 transition-all"
              alt="projectImage"
              width={250}
              height={250}
            />
          </Link>
          <div className="text-center">
            <b>{item.projectName}</b>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
