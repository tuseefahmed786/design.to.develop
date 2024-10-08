import React, { useState } from "react";

const plans = [
    {
        title: "Plan 1 – Essentials",
        price: "1860",
        currency: "EUR",
        description: "per month / excl. tax",
        spotsLeft: "5 spots left for projects on this plan",
        features: [
            "Full service product development",
            "Digital product design & development",
            "Support and maintenance",
            "Unlimited requests",
            "Interactive MVP Prototyping",
            "Prototyping",
            "Branding",
            "Design Systems",
        ],
    },
    {
        title: "Plan 2 – Priority",
        price: "3300",
        currency: "EUR",
        description: "per month / excl. tax",
        spotsLeft: "3 spots left for projects on this plan",
        features: [
            "Full service product development",
            "Digital product design & development",
            "Unlimited requests",
            "Interactive MVP Prototyping",
            "Prototyping",
            "Branding",
            "Design Systems",
            "Support and maintenance",
            "Unlimited requests",
            "Interactive MVP Prototyping"
        ],
        mostPopular: true,
    },
    {
        title: "Plan 3 – VIP",
        price: "8770",
        currency: "EUR",
        description: "per month / excl. tax",
        spotsLeft: "2 spots left for projects on this plan",
        features: [
            "Full service product development",
            "Digital product design & development",
            "Unlimited requests",
            "Interactive MVP Prototyping",
            "Prototyping",
            "Branding",
            "Design Systems",
            "Support and maintenance",
            "Unlimited requests",
            "Interactive MVP Prototyping",
            "Market Fit Analysis & Adjustment"
        ],
    },
];

const Pricing = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("EUR");

    return (
        <>
            <div className="px-8 py-5 md:py-20 bg-[#f7f8f8]">
                <h1 className=" text-2xl sm:text-6xl md:w-[40rem] font-bold">Choose your speed,
                    be your own kickstarter.</h1>
                <p className="py-5 text-lg text-[#5b616e]">Regardless of the plan you choose to go with, you still get the same full service experience including product design, coaching and development. The only difference between the three subscription plans is speed of delivery.
                </p>
            </div>

            <div className="mx-auto p-4 sm:p-8">
                {/* Currency Selector */}
                {/* <div className="flex justify-center mb-8">
        {["CHF", "EUR", "USD"].map((currency) => (
          <button
            key={currency}
            onClick={() => setSelectedCurrency(currency)}
            className={`px-4 py-2 text-lg font-medium ${
              selectedCurrency === currency
                ? "text-red-500 border-b-4 border-red-500"
                : "text-gray-500"
            } focus:outline-none`}
          >
            {currency}
          </button>
        ))}
      </div> */}

                {/* Plans */}
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={` rounded-lg shadow-lg  ${plan.mostPopular
                                    ? "white border-2 relative border-red-500"
                                    : "white pricing-items"
                                }`}
                        >
                            <div className={`py-14  m-2 rounded-xl ${plan.mostPopular ? "bg-[#fef3f2]" : "bg-gray-50"}  px-10`}>
                                <h2 className="text-4xl font-bold mb-4">{plan.title}</h2>
                                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                                    {plan.price} {plan.currency}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold w-full">
                                    Subscribe
                                </button>
                                <p className="text-sm text-gray-500 mt-4">{plan.spotsLeft}</p>
                            </div>
                            <ul className="mt-6 px-8 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-sm ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="inline w-5 h-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {plan.mostPopular && (
                                <div className="absolute top-0 right-0 m-4">
                                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                        Most popular
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Pricing;
