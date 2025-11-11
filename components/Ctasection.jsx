const CtaSection = () => {
    return (
        <div>
            <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#5C4033]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
                        Take the guesswork out of hair care
                    </h2>
                    <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 px-2">
                        Scan smarter. Choose better. Protect your crown.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full px-4">
                        <button className="bg-white text-[#5C4033] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base">
                            Scan a product
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>

                        <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white hover:text-[#5C4033] transition-all duration-200 w-full sm:w-auto text-sm sm:text-base">
                            Join the waitlist
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CtaSection;