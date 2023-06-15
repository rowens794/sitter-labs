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
    <div className="bg-blue-100">
      <div className=" z-10 relative flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="w-44 mx-auto text-center scale-150">
            <Icon dark={true} />
          </div>
        </div>

        <div className="mt-10 px-4 ">
          <AuthenticateForm isSignup={false} />
        </div>
      </div>

      <div className="absolute opacity-[15%] top-0 w-full z-0 flex h-screen flex-1 flex-col bg-cover bg-center bg-white bg-[url('/images/babysitter.jpeg')]"></div>
    </div>
  );
}
