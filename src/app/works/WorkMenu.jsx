"use client";
import CustomButton from "@/components/utils/CustomButton";
import React from "react";

const WorkMenu = ({ object, activeSection, onSectionClick }) => {
  const sections = Object.keys(object);
  return (
    <section className="w-full flex flex-wrap gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 lg:px-5  py-4 sm:py-6">
      {sections.map((section, index) => (
        <CustomButton
          key={index}
          section={section}
          isActive={section === activeSection}
          onClick={() => onSectionClick(section)}
        />
      ))}
    </section>
  );
};

export default WorkMenu;
