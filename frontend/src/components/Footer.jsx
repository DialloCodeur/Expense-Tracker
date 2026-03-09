function Footer(){
    return(
        <>
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">💰</span>
                            <span className="text-xl font-bold text-white">MyFinance</span>
                        </div>
                        <p className="text-sm text-gray-400">Smart expense tracking for your financial freedom.</p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button className="hover:text-indigo-400 transition">Dashboard</button></li>
                            <li><button className="hover:text-indigo-400 transition">Reports</button></li>
                            <li><button className="hover:text-indigo-400 transition">Expenses</button></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button className="hover:text-indigo-400 transition">About Us</button></li>
                            <li><button className="hover:text-indigo-400 transition">Blog</button></li>
                            <li><button className="hover:text-indigo-400 transition">Contact</button></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button className="hover:text-indigo-400 transition">Privacy Policy</button></li>
                            <li><button className="hover:text-indigo-400 transition">Terms of Service</button></li>
                            <li><button className="hover:text-indigo-400 transition">Security</button></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-sm text-gray-400">© 2026 MyFinance. All rights reserved. Track smarter. Spend wiser. Grow faster.</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer