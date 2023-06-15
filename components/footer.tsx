import Link from "next/link";

import Icon from "../components/icon";

const navigation = {
  solutions: [
    { name: "Sitter Sales Page", href: "/sales-page" },
    { name: "Booking Management", href: "/booking-management" },
    { name: "Automated Posting", href: "/automated-posting" },
  ],
  support: [
    { name: "Pricing", href: "/pricing" },
    { name: "Guides", href: "/guides" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export default function Index() {
  return (
    <footer className="bg-blue-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <Icon />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  What we do
                </h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Other Stuff
                </h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  About the Project
                </h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal Stuff
                </h3>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="cursor-pointer">
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
