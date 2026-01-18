"use client";

import { useState } from "react";
import { WaitlistModal } from "./WaitlistModal";

const CtaSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#fff]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-3 sm:mb-4 px-2 max-w-2xl mx-auto">
            Take the guesswork out of hair care
          </h2>
          <p className="text-[#86868B] text-base sm:text-lg mb-6 sm:mb-8 px-2">
            Scan smarter. Choose better. Protect your crown.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full px-4">
            <button className="bg-[#632B14] text-[#fff] hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base">
              Scan a product
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent border-2 border-[#632B14] text-[#632B14] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-[#632B14] hover:text-white transition-all duration-200 w-full sm:w-auto text-sm sm:text-base cursor-pointer"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};
export default CtaSection;

