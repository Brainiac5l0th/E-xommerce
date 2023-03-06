import React from "react";

const Footer = () => {
  return (
    <div className="text-center w-full my-3">
      Developed by{" "}
      <a
        href="https://www.linkedin.com/in/shawon-talukder/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="font-semibold tracking-wider dark:text-teal-600 hover:border-b-2 hover:border-b-teal-800 dark:hover:border-0 dark:hover:text-teal-700  cursor-pointer">
          Shawon Talukder
        </span>
      </a>
    </div>
  );
};

export default Footer;
