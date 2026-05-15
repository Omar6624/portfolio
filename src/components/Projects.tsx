"use client";
import {} from "@/data/constant";
import ProjectNavButtons from "./ProjectNavButtons";
import { useState } from "react";
import ProjectSection from "./ProjectSection";
import { ProjectKeys } from "@/data/constant";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectKeys>("PHP");
  return (
    <div className="h-screen container mx-auto sm:px-15 py-10 ">
      <div className="text-2xl pb-5 text-center">
        <span className="text-teal-400 text-lg">03.</span> Projects
      </div>
      <div className=" border-1 border-gray-200 my-2">
        <ProjectNavButtons setActiveTab={setActiveTab} />
      </div>
      <div className=" border-1 border-gray-200 h-[90%] overflow-hidden items-center flex">
        <ProjectSection name={activeTab} />
      </div>
    </div>
  );
}
