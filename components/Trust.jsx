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
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20">
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#8B6F47] flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#8B6F47]"></div>
            </div>
            <span className="text-gray-900 text-base">Science-backed data</span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#8B6F47] flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#8B6F47]"></div>
            </div>
            <span className="text-gray-900 text-base">No brand bias</span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#8B6F47] flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#8B6F47]"></div>
            </div>
            <span className="text-gray-900 text-base">
              Built for real people
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default Trust;
