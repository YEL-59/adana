import { Button } from "@/components/ui/button";

const features = [
    {
        title: "Instant Ingredient Scanning",
        description: "Quickly scan ingredients to get instant insights.",
        icon: (
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                ></path>
            </svg>
        ),
    },
    {
        title: "Ingredient Education Library",
        description: "Learn about ingredients in our detailed library.",
        icon: (
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l7 7v9a2 2 0 01-2 2z"
                ></path>
            </svg>
        ),
    },
    {
        title: "Harmful Ingredient Alerts",
        description: "Receive alerts for any harmful ingredients found.",
        icon: (
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                ></path>
            </svg>
        ),
    },
    {
        title: "Global Product Database",
        description: "Access a vast database of products worldwide.",
        icon: (
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                ></path>
            </svg>
        ),
    },
    {
        title: "Community Trusted",
        description: "Products trusted and rated by our community.",
        icon: (
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
        ),
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-gray-50 text-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-2">Features</h2>
                <p className="text-gray-600 mb-12">
                    Five powerful features working together to ensure every product meets
                    the highest standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex items-start gap-4 p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="bg-orange-500 p-3 rounded-lg">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-gray-500 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="bg-black text-white px-6 py-3 hover:bg-gray-800">
                    Start Scanning Now
                </Button>
            </div>
        </section>
    );
}
