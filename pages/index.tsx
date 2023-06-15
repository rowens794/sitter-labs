import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import SalesPage from "../components/sales-page-section";
import YourCalendar from "../components/your-calendar-section";
import AutomateFacebook from "../components/facebook-posts";
import Footer from "../components/footer";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <main className=" min-h-screen">
        <div className="absolute top-0 w-full">
          <Header />
        </div>
        <Hero />
        <Features />
        <SalesPage />
        <YourCalendar />
        <AutomateFacebook />
        <Footer />
      </main>
    </>
  );
}
