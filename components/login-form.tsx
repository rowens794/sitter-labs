import React from "react";
import { useState } from "react";
import validator from "email-validator";
import { signIn } from "next-auth/react";
import Link from "next/link";

type Props = {
  isSignup: boolean; //determines whether signup form or signin form
};

export default function Index({ isSignup }: Props) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //check if valid email
    if (validator.validate(e.target.value)) {
      setEmail(e.target.value);
    } else {
      setEmail("");
    }
  };

  return (
    <div className="mt-8 sm:mt-12 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] ">
        <div className="sm:bg-blue-50 px-0 sm:py-12 sm:shadow sm:rounded-lg sm:px-12">
          <h2 className=" text-center text-2xl mb-8  font-light leading-9 tracking-tight text-blue-700">
            {isSignup ? "Create Your Free Account" : "Sign In to Your Account"}
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-light leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => handleEmailChange(e)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              {email !== "" ? (
                <button
                  //   type="submit"
                  onClick={() => signIn("email", { email: email })}
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {isSignup ? "Create Your Free Account" : "Sign In"}
                </button>
              ) : (
                <button
                  //   type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  {isSignup ? "Create Your Free Account" : "Sign In"}
                </button>
              )}
            </div>
          </div>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200 hidden sm:block" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="sm:bg-blue-50 px-6 text-gray-900 font-light">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#fff] px-3 border border-gray-300 py-1.5 text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  />
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  />
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  />
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">Google</span>
              </a>

              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#3b5998] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 310 310"
                >
                  <g id="XMLID_834_">
                    <path
                      id="XMLID_835_"
                      d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                    />
                  </g>
                </svg>
                <span className="text-sm font-semibold leading-6">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <Link
                href="/auth/sign-in"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Sign in here
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Sign up here
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
