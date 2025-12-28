import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Instant Scanning",
    description: "Get results in milliseconds.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Harmful Ingredient Alerts",
    description: "Know exactly what to avoid.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Ingredient Education",
    description: "Learn the science behind the labels.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        ></path>
      </svg>
    ),
  },
  {
    title: "Global Database",
    description: "Products from around the world.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Community Trusted",
    description: "Verified by real users.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-3">
            Everything you need to know.
          </h2>
          <p className="text-gray-600 text-base">
            Powerful features built for your peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* First Row - 3 cards */}
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.slice(3, 5).map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[#5C4033] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-white text-xl font-semibold mb-4">
              Ready to start?
            </h3>
            <Button className="bg-white text-[#5C4033] px-6 py-2 hover:bg-gray-100 transition-colors duration-200 rounded-full text-sm font-medium">
              Start Scanning Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
