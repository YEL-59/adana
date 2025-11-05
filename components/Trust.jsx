const Trust = () => {
    return (
        <div>
            <div className=" bg-white">

                {/* Trust & Transparency Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Trust & Transparency
                            </h2>
                            <p className="text-gray-600 text-lg mb-2">
                                "Knowledge is power — and it starts with what you put in your hair."
                            </p>
                            <p className="text-gray-500">— HairiSafe Team</p>
                        </div>

                        {/* Features Grid */}
                        <div className="flex flex-wrap justify-center items-start gap-12 mt-16">
                            {/* Feature 1 */}
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg">Science-backed data</h3>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg">No brand bias</h3>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-col items-center text-center max-w-xs">
                                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg">Built for real people</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Trust;
