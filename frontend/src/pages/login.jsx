function Login() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Login to your account
                    </h1>
                    <p className="text-gray-500 text-center text-sm mb-8">
                        Manage your expenses. Stay in control.
                    </p>

                    {/* Form */}
                    <form className="space-y-5">

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
                        >
                            Login
                        </button>

                        {/* Login Link */}
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Don't have an account?{' '}
                            <a href="/register" className="text-indigo-600 font-semibold hover:text-indigo-700">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login