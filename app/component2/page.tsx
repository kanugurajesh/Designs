"use client";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motions";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="h-screen">
      <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
        <div className="absolute w-auto h-auto top-0 z-[5]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            Performance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              &{" "}
            </span>
            Security
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.5)}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            Github
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(1)}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            Website
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default page;
