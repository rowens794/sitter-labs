import {
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Post at peak demand.",
    description:
      "Schedule your posts to display during the day on Friday & Saturday as people are making plans.",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "We handle the content.",
    description:
      "We'll take care of creating language and images that are proven to generate results. You just need to approve.",
    icon: DocumentTextIcon,
  },
  {
    name: "Coordinated with your calendar.",
    description:
      "Our post algorithm will check your calendar so that you're not making posts when your not available.",
    icon: CalendarDaysIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Automate Your Marketing
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Schedule Facebook Posts
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Parents live on Facebook. To get consistent work, you need to
                let them know that you&apos;re available to work. With our
                Facebook integration, you can easily stay top of mind.
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
                  href="/automated-posting"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/images/facebook-post.webp"
              alt="Product screenshot"
              className=""
              width={550}
              height={384}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
