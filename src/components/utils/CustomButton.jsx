"use client";
import React from "react";

const CustomButton = ({ section, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg transition-colors ${
        isActive
          ? "bg-white text-gray-900 hover:bg-gray-100"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }`}
    >
      {section}
    </button>
  );
};

export default CustomButton;
