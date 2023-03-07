import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = `Login`;
  }, []);
  return (
    <section className="flex justify-center items-center md:h-5/6 my-16 sm:my-32">
      <div className="bg-white backdrop-blur-sm shadow-md border sm:border-gray-700 rounded-xl sm:w-4/6 sm:max-w-md dark:bg-gray-800 py-10 px-10 md:dark:border-stone-50">
        <form className="space-y-6 my-10">
          <h3 className="text-2xl text-center font-semibold text-gray-900 dark:text-white">
            Sign in
          </h3>
          <div>
            <label
              for="phone"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Phone
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Phone number"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
            <div>
              New User?{" "}
              <Link
                to="/register"
                className="text-sm hover:underline ml-auto text-teal-500"
              >
                Register
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-teal-700 transition-transform transform duration-300 hover:scale-105 active:translate-y-1 hover:bg-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700"
          >
            Login to your account
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
