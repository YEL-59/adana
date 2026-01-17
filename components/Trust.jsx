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
        <div className="flex flex-wrap justify-center items-start gap-12 md:gap-16 mb-20">
          {/* Feature 1 */}
          <div className="flex flex-col items-center gap-4 max-w-[200px]">
            <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8B5A3C"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6m5.2-14.8L13.9 7.5m-3.8 9L6.8 19.8m14.2-7.8h-6m-6 0H3m14.8 5.2-3.3-3.3m-9-9L8.8 7.5" />
              </svg>
            </div>
            <span className="text-gray-900 text-base font-medium text-center">
              Science-backed data
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center gap-4 max-w-[200px]">
            <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8B5A3C"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-gray-900 text-base font-medium text-center">
              No brand bias
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center gap-4 max-w-[200px]">
            <div className="w-16 h-16 rounded-full bg-[#F5E6D3] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8B5A3C"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-gray-900 text-base font-medium text-center">
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
