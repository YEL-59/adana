const Hairsafe = () => {
  return (
    <div>
      {/* Why HairiSafe Exists Section */}
      {/* <section className="py-12 sm:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
                        Why HairiSafe Exists
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                       
                        <div className="flex-1">
                            <div className="w-full max-w-md mx-auto rounded-3xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop"
                                    alt="Woman with braids"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                     
                        <div className="flex-1 max-w-xl">
                            <div className="inline-flex items-center gap-2 bg-[#5C4033] text-white px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <span className="font-medium text-sm sm:text-base">Our mission</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Because what we put on our hair matters
                            </h3>

                            <p className="text-gray-600 mb-4">
                                For too long, harmful ingredients have been hidden behind complicated labels.
                                HairiSafe exists to change that.
                            </p>

                            <p className="text-gray-600">
                                We empower individuals - especially women of color - with transparent, science-backed
                                ingredient information, so you can make choices that honor your health and heritage.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

      <div className="bg-[#F3F3F5] py-20 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-center items-start md:max-w-6xl mx-auto ">
            <div className="sm:md-2 md:mb-16 w-full ">
              <h1 className="text-3xl md:text-5xl  lg:text-6xl font-normal text-gray-900 leading-tight">
                Because what we put on our hair
              </h1>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
                matters.
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 w-full">
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  For too long, harmful ingredients have been hidden behind
                  complicated labels. Hair/safe exists to change that.
                </p>
              </div>

              <div>
                <p className="text-gray-900 text-base leading-relaxed">
                  We empower individuals — especially women of color — with
                  transparent, science-backed ingredient information, so you can
                  make choices that honor your health and heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hairsafe;
