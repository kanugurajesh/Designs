"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Toggle = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  useEffect(() => {
    toast.dismiss();
    if (isOn) {
      toast.success("Switch is now on");
    } else {
      toast.error("Switch is now off");
    }
  }, [isOn]);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => {
      console.log("Switch is now", !prevIsOn ? "on" : "off");
      return !prevIsOn;
    });
  };

  return (
    <>
      <Toaster />
      <div
        onClick={toggleSwitch}
        className={`w-40 h-24 bg-slate-200 flex rounded-full p-2 cursor-pointer ${
          isOn ? "justify-end" : "justify-start"
        }`}
      >
        <motion.div
          layout
          transition={spring}
          className="w-20 h-20 bg-white rounded-full"
        />
      </div>
    </>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Toggle;
