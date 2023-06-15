import { useSession } from "next-auth/react";

import Header from "../components/header";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <main className=" min-h-full">
        <div className="absolute top-0 w-full">
          <Header />
        </div>

        <div className="mt-32 max-w-5xl mx-auto">
          <p>TODO:</p>
          <p>Create info on guides</p>
        </div>
      </main>
    </>
  );
}
