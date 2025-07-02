"use client";
import { PROJECTS, ProjectKeys, colors } from "@/data/constant";
import { div } from "motion/react-m";
import { motion, AnimatePresence } from "framer-motion";

type ProjectSectionProps = {
  name: ProjectKeys;
};

const ProjectSection = ({ name }: ProjectSectionProps) => {
  const key: ProjectKeys = name;
  const project = PROJECTS[key];
  return (
    <AnimatePresence>
      <motion.div
        key={name}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0.1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex overflow-x-auto no-scrollbar"
      >
        {project.map((items, index) => (
          <div className="p-4 space-x-5">
            <div className=" bg-opacity-20 border border-gray-200 border-opacity-30 w-[400px] h-[600px] overflow-hidden  shadow-lg backdrop-blur-md flex flex-col relative">
              <div className="flex-1 grid grid-rows-[2fr_0.5fr_3fr_0.5fr] h-full">
                <div className="overflow-hidden">
                  <img
                    src="https://picsum.photos/800/600"
                    alt="Random"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-2 flex items-center font-semibold text-teal-400 pb-2 text-lg">
                  <h2>{items.name}</h2>
                </div>

                <div className="px-2 overflow-auto">
                  <ol className="list-disc pl-5 space-y-2 ">
                    {items.description.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ol>
                </div>

                <div className="p-2 space-x-2 flex flex-wrap">
                  {items.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-teal-400 px-4 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`absolute top-0 right-0 ${
                    items.type === "Professional"
                      ? "bg-rose-400"
                      : "bg-green-400"
                  }`}
                >
                  {items.type}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
export default ProjectSection;
