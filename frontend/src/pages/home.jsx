import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-indigo-100">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
                    <div className="text-center space-y-8">
                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Welcome to <span className="bg-linear-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">MyFinance</span>
                        </h1>

                        {/* Subheading */}
                        <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold leading-relaxed">
                            Track Smarter<br />
                            Spend Wiser<br />
                            Grow Faster
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Stay organized. Visualize your spending. Make informed financial decisions effortlessly.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 shadow-lg hover:shadow-xl" onClick={() => navigate("/login")}>
                                Get Started
                            </button>
                            <button className="px-8 py-3 bg-white hover:bg-gray-50 text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 transition duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose MyFinance?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="p-8 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Analytics</h3>
                                <p className="text-gray-700">Get detailed insights into your spending patterns with beautiful charts and reports.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-8 bg-linear-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200 hover:shadow-lg transition">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Goal Tracking</h3>
                                <p className="text-gray-700">Set and monitor your financial goals with real-time progress tracking.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="p-8 bg-linear-to-br from-indigo-50 to-indigo-100 rounded-xl border border-indigo-200 hover:shadow-lg transition">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
                                <p className="text-gray-700">Your financial data is encrypted and protected with bank-level security.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-linear-to-r from-indigo-600 to-teal-500 py-16 md:py-20">
                    <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Finances?</h2>
                        <p className="text-lg opacity-90">Join thousands of users who are taking control of their spending today.</p>
                        <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-200 inline-block" onClick={() => navigate("/login")}>
                            Start Free Today
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home