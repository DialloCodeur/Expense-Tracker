import { useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-24 h-24 rounded-lg flex items-center justify-center">
                            <img src='/MyFinance_logo.jpg' className='w-full h-full object-cover' />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">MyFinance</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8"> {/* Here navigations links are hidden on mobile. I've to use react, to display it */}
                        <button onClick={() => navigate("/")} className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</button>
                        <button onClick={() => navigate("/dashboard")} className="text-gray-700 hover:text-indigo-600 font-medium transition">Dashboard</button>
                        <button onClick={() => navigate("/reports")} className="text-gray-700 hover:text-indigo-600 font-medium transition">Reports</button>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex gap-3">
                        <button onClick={() => navigate("/login")} className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition">Login</button>
                        <button onClick={() => navigate("/register")} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">Sign up</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar