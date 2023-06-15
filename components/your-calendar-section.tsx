import {
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog8ToothIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Connect your Google calendar.",
    description:
      "Your calendar is your single source of truth.  Connect your schedule so parents don't have to wonder when you are available.",
    icon: Cog8ToothIcon,
  },
  {
    name: "Appointments show immediately.",
    description:
      "Configure your calendar so that parents can book immediately and know thier on your schedule.",
    icon: CalendarIcon,
  },
  {
    name: "Set up for your life.",
    description:
      "Manage blackout periods, such as early mornings or weekends, so that you can live your life.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Index() {
  return (
    <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Easy Bookings
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Make Scheduling Effortless
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Parents are always in a rush. When they need a babysitter, they
                need one now. Make it easy for them to book you and effortless
                for you to management appointments.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>

              <div className=" w-full text-right mt-12">
                <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                  href="/booking-management"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div className="w-full flex justify-center">
              <Image
                src="/images/calendar.png"
                className=""
                alt="Product screenshot"
                width={800}
                height={(880 / 800) * 800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
