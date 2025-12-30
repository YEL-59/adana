import { Button } from "@/components/ui/button";

const Trust = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Quote Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 max-w-3xl mx-auto leading-tight">
            "Knowledge is power — and it starts with what you put in your hair."
          </h2>
          <p className="text-gray-500 text-sm">— HairSafe Team</p>
        </div>

        {/* Trust Features */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 mb-20">
          {/* Feature 1 */}
          <div className="flex items-center gap-3 border  border-[#E6E6E6] rounded-full px-4 py-4 md:px-6  shadow-sm hover:shadow-md transition-shadow">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#632B14"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="#632B14"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
            <span className="text-gray-900 text-base">Science-backed data</span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 border  border-[#E6E6E6] rounded-full px-4 py-4 md:px-6  shadow-sm hover:shadow-md transition-shadow">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#632B14"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="#632B14"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
            <span className="text-gray-900 text-base">No brand bias</span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 border  border-[#E6E6E6] rounded-full px-4 py-4 md:px-6  shadow-sm hover:shadow-md transition-shadow">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#632B14"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="#632B14"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
            <span className="text-gray-900 text-base">
              Built for real people
            </span>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <h3 className="text-[81px] md:text-4xl font-normal text-[#1D1D1F] mb-3 max-w-md mx-auto leading-tight">
            Take the guesswork out of hair care.
          </h3>
          <p className="text-gray-600 text-base mb-8">
            Scan smarter. Choose better. Protect your crown.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button className="bg-[#5C4033] text-white px-8 py-3 rounded-full hover:bg-[#4a3328] transition-colors text-base">
              Scan a Product
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-base bg-white"
            >
              Learn How to work
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Trust;
