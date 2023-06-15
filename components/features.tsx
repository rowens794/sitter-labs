import {
  NewspaperIcon,
  CameraIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const features = [
  {
    name: "Your own personal sales page",
    description:
      "Create a personal sales page that showcases your skills and gives parents a way to view your availability and book your services.",
    href: "/sales-page",
    icon: CameraIcon,
  },
  {
    name: "No more scheduling headaches",
    description:
      "Connect your Google calendar so that parents can easily see when you can work and book appointments immediately.",
    href: "/booking-management",
    icon: CalendarDaysIcon,
  },
  {
    name: "Automate Facebook Marketing",
    description:
      "Automate periodic facebook posts to let your network know your availability and create a steady stream of work without manual outreach.",
    href: "/automated-posting",
    icon: NewspaperIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            Book more jobs than ever before
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            An automated stream of new jobs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Caring for kids is awesome. Seeing children grow, learn, and smile
            is what make the job great. But finding jobs is hard. We fix that.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-blue-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
