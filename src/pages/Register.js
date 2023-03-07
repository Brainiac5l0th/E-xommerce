import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    document.title = `Sign Up`;
  }, []);
  return (
    <section className="container mx-auto bg-[#2a3549]">
      <div className="flex flex-col justify-center items-center rounded-xl py-8 ">
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <form className="w-full md:w-5/12">
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
              <div>
                <label
                  className="text-white dark:text-gray-200 font-semibold"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200 font-semibold"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200 relative font-semibold  after:content-['*'] after:text-pink-600 after:text-xl after:px-[1px]"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200 font-semibold after:content-['*'] after:text-pink-600 after:text-xl after:px-[1px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200 font-semibold after:content-['*'] after:text-pink-600 after:text-xl after:px-[1px]"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500  focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <input
                id="termsCondition"
                name="termsCondition"
                type="checkbox"
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-600 ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                required
              />
              <label
                htmlFor="termsCondition"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I Agree to the{" "}
                <Link
                  to="/terms-conditions"
                  className="text-sm hover:underline ml-auto text-teal-500"
                >
                  Terms And Conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-2 text-white transition-colors duration-200 transform bg-teal-600 rounded-md hover:bg-teal-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
