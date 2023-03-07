import React from "react";

const Terms = ({ title, data }) => {
  return (
    <div className="my-4">
      <h1 className="text-center text-2xl text-teal-600 font-bold">{title}</h1>
      <ul className="">
        {data?.map((singleObj, i) => {
          return (
            <li className="my-2 before:content-['->'] relative before:absolute before:-left-5  before:font-semibold">
              <h2 className="text-teal-500">
                {Object.keys(singleObj)[0].replaceAll("_", " ")}
              </h2>
              <p>{Object.values(singleObj)[0]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Terms;
