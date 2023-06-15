import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import Icon from "../components/icon";

type Props = {};

export default function Header({}: Props) {
  const { data: session, status } = useSession();

  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Icon />
            <div className="hidden md:flex md:gap-x-6">
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-300 hover:bg-slate-100 hover:text-slate-900"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-300 hover:bg-slate-100 hover:text-slate-900"
                href="/about"
              >
                About
              </Link>
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-300 hover:bg-slate-100 hover:text-slate-900"
                href="/pricing"
              >
                Pricing
              </Link>
            </div>
          </div>

          {status === "unauthenticated" && <LoggedOut />}
          {status === "authenticated" && <LoggedIn />}
        </nav>
      </div>
    </header>
  );
}

const LoggedIn = () => {
  return (
    <div className="flex items-center gap-x-5 md:gap-x-8">
      <div className="hidden md:block">
        <button
          className="inline-block rounded-lg px-2 py-1 text-sm text-slate-300 hover:bg-slate-100 hover:text-slate-900"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>

      <Link
        className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
        href="/dashboard"
      >
        <span>Dashboard</span>
      </Link>
    </div>
  );
};

const LoggedOut = () => {
  return (
    <div className="flex items-center gap-x-5 md:gap-x-8">
      <div className="hidden md:block">
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm text-slate-300 hover:bg-slate-100 hover:text-slate-900"
          href="/auth/sign-in"
        >
          Sign in
        </Link>
      </div>

      <Link
        className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
        href="/auth/sign-up"
      >
        <span>Get Started</span>
      </Link>
    </div>
  );
};
