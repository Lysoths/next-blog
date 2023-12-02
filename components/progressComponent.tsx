import React from "react";
import { Progress } from "@/components/ui/progress";
import { mockData2 } from "@/mocdata/data";

const ProgressComponent = () => {
  return (
    <div className="w-full max-w-[250px]">
      {mockData2.map((item) => (
        <div
          key={item.id}
          className="flex gap-2 items-center justify-between flex-col"
        >
          <p>{item.programmingLanguage}</p>
          <Progress value={item.skillRate} />
        </div>
      ))}
    </div>
  );
};

export default ProgressComponent;
