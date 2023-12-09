import ProgressComponent from "@/components/progressComponent";
import React from "react";

const AboutPage = () => {
  return (
    <div className=" container p-4 w-full flex-wrap  flex gap-3 items-stretch ">
      <div className="max-md:flex-1 flex flex-col p-6  gap-4 md:max-w-[350px] justify-center h-fit  1 border rounded-lg md:mt-14 ">
        <h1 className=" px-4   text-[--card] rounded-md">My Skills</h1>
        <ProgressComponent />
      </div>
      <div className="md:flex-1 flex flex-col md:mt-10 p-3   gap-4 min-w-300px   ">
        <h2 className="md:text-4xl max-md:text-2xl ">About Me</h2>
        <p className="text-justify indent-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam ea soluta et delectus totam distinctio nam incidunt minima
          ex illo velit ad debitis, perferendis modi deleniti dignissimos
          aspernatur ab? Ratione quod at, alias magnam est excepturi illo,
          necessitatibus ipsum corrupti optio voluptates similique quidem quo
          sunt iure delectus? Eum ratione accusantium velit magni aliquid labore
          magnam inventore libero necessitatibus!
        </p>
        <h2 className="md:text-4xl max-md:text-2xl ">In the future..</h2>
        <p className="text-justify indent-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam ea soluta et delectus totam distinctio nam incidunt minima
          ex illo velit ad debitis, perferendis modi deleniti dignissimos
          aspernatur ab? Ratione quod at, alias magnam est excepturi illo,
          necessitatibus ipsum corrupti optio voluptates similique quidem quo
          sunt iure delectus? Eum ratione accusantium velit magni aliquid labore
          magnam inventore libero necessitatibus!
        </p>
        <h2 className="md:text-4xl max-md:text-2xl ">Who Am I</h2>
        <p className="text-justify indent-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam ea soluta et delectus totam distinctio nam incidunt minima
          ex illo velit ad debitis, perferendis modi deleniti dignissimos
          aspernatur ab? Ratione quod at, alias magnam est excepturi illo,
          necessitatibus ipsum corrupti optio voluptates similique quidem quo
          sunt iure delectus? Eum ratione accusantium velit magni aliquid labore
          magnam inventore libero necessitatibus!
        </p>
        <h2 className="md:text-4xl max-md:text-2xl ">Check my project..</h2>
        <p className="text-justify indent-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam ea soluta et delectus totam distinctio nam incidunt minima
          ex illo velit ad debitis, perferendis modi deleniti dignissimos
          aspernatur ab? Ratione quod at, alias magnam est excepturi illo,
          necessitatibus ipsum corrupti optio voluptates similique quidem quo
          sunt iure delectus? Eum ratione accusantium velit magni aliquid labore
          magnam inventore libero necessitatibus!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
