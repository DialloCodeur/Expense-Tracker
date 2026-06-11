import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("")
        setError("");
        setLoading(true);
        try {
            const response = await axios.post("/api/auth/login", {
                email,
                password
            })
            console.log(`Login Successful: ${response.data}`);
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed")
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Login to your account
                    </h1>
                    <p className="text-gray-500 text-center text-sm mb-8">
                        Manage your expenses. Stay in control.
                    </p>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
                        >
                            {loading ? "Logining to account..." : "Login"}
                        </button>
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