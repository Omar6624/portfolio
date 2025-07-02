"use client";

import { techStack } from "@/data/constant";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { ProjectKeys } from "@/data/constant";

type ProjectNavButtonsProps = {
  setActiveTab: (tab: ProjectKeys) => void;
};

const ProjectNavButtons = ({ setActiveTab }: ProjectNavButtonsProps) => {
  const defaultTab =
    techStack.find((item) => item.label === "Php") || techStack[0];
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  return (
    <nav className="flex justify-center">
      <ul className="flex ">
        {techStack.map((item) => (
          <motion.li
            className="border-1  border-gray-400 px-5 cursor-pointer"
            key={item.label}
            initial={false}
            whileHover={{
              backgroundColor: item.bgcolor,
              opacity: 0.8,
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              backgroundColor: item === selectedTab ? item.bgcolor : "",
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setSelectedTab(item);
              setActiveTab(item.label);
            }}
          >
            <div>{item.label}</div>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default ProjectNavButtons;
