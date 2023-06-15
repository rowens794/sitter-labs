import { ClockIcon, SparklesIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Let parents get to know you.",
    description:
      "Easily create and post a video introducing yourself so that parents can get to know you before they book.",
    icon: UserIcon,
  },
  {
    name: "Your best foot forward.",
    description:
      "Highlight the parts of you that make you different and will have kids begging for you to come back.",
    icon: SparklesIcon,
  },
  {
    name: "Your availability, always available.",
    description:
      "Let parents view your up-to-date calendar so that know when they can expect you.",
    icon: ClockIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Sell yourself on the Web
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your personalized sales page
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                So much of getting new jobs is just letting people know you are
                available. We make that easy.
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
                  href="/sales-page"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/images/iphone-mockup.png"
              alt="Product screenshot"
              className=""
              width={300}
              height={(768 / 300) * 300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
