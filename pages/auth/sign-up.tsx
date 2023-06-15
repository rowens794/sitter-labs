import { useEffect } from "react";
import { useSession } from "next-auth/react";

import Icon from "../../components/icon";
import AuthenticateForm from "../../components/login-form";

export default function Index() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/";
    }
  }, [status]);

  return (
    <div className="bg-blue-100 h-full">
      <div className="relative isolate pt-14 min-h-screen z-10">
        <div className="">
          <div className="scale-150 text-center w-44">
            <Icon dark={true} />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-8  lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
            <h1 className=" mt-0 sm:mt-10 max-w-lg text-2xl font-bold tracking-tight text-blue-700 sm:text-4xl">
              Your Personal Babysitting Assistant
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Your life is about to get a whole lot easier. We help babysitters
              like you promote themselves and book jobs. Sign up for a free
              account and get busy getting work.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800 font-bold">
              Here&apos;s how your life gets easier:
            </p>
            <ul className="text-lg leading-6 text-gray-800 list-disc ml-4">
              <li className="mt-2">
                A webpage goes up showcasing your skills{" "}
              </li>
              <li className="mt-2">
                A calendar goes live showing families your availbility
              </li>
              <li className="mt-2">
                Automated social marketing helps families find you
              </li>
            </ul>
          </div>
          <AuthenticateForm isSignup={true} />
        </div>
      </div>

      <div className="fixed opacity-[15%] top-0 w-full z-0 flex h-full flex-1 flex-col bg-cover bg-center bg-white bg-[url('/images/babysitter.jpeg')]"></div>
    </div>
  );
}
