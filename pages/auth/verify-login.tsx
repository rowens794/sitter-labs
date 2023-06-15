import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Icon from "../../components/icon";

export default function Login() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/";
    }
  }, [status]);

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center p-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="w-full ">
            <div className="w-44 mx-auto text-center scale-150">
              <Icon />
            </div>
          </div>
          <h2 className="mt-6 text-center text-lg sm:text-2xl tracking-tight text-gray-100">
            Please check your email for a login link.
          </h2>
          <Link href="/">
            <p className="text-center py-8 font-light underline">Go Home</p>
          </Link>
        </div>
      </div>
    </>
  );
}
