import React from "react";
import { Progress } from "@/components/ui/progress";
import { mockData2 } from "@/mocdata/data";

const ProgressComponent = () => {
  return (
    <div className="flex w-full flex-col gap-4 min-w-[250px]">
      {mockData2.map((item) => (
        <div key={item.id} className="">
          <p>{item.programmingLanguage}</p>
          <Progress value={item.skillRate} />
        </div>
      ))}
    </div>
  );
};

export default ProgressComponent;
