"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

const AddProjectPage = () => {
  return (
    <div className="w-full flex">
      <form className="flex min-w-[320px] max-w-[1024px] items-center justify-center w-full flex-col gap-7 bg-[--card2] p-14 rounded-md">
        <h1 className="self-start">Add New Project</h1>
        <Input
          id="projectName"
          className="py-6 indent-2"
          placeholder="Project Name"
        />
        <Input
          id="projectImage"
          className="py-6 indent-2"
          placeholder="Project Image"
        />
        <Input
          id="projectLink"
          className="py-6 indent-2"
          placeholder="Project Link"
        />
        <Button className="self-center w-full">Save</Button>
      </form>
    </div>
  );
};

export default AddProjectPage;
