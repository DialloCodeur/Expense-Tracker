import { jwtDecode } from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CircleUserRound } from "lucide-react"
import UserMenu from './UserMenu';
function Navbar() {
    let navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isUserIconClicked, setIsUserIconClicked] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false);
    const userMenuRef = useRef(null);
    const token = localStorage.getItem("token");
    //console.log(token)
    //console.log(jwtDecode(token).exp);
    useEffect(() => {
        let ignore = false;

        const handleTokenValidation = (expirationTime) => {
            const currentTimestamp = Math.floor(Date.now() / 1000);
            return setIsTokenValid(expirationTime >= currentTimestamp);
        }
        if (token) {
            const tokenExpirationTime = jwtDecode(token).exp;
            handleTokenValidation(tokenExpirationTime);
        }
        if (!isTokenValid || token == null) {
            return;
        }

        const loadUserProfile = async () => {
            try {
                const response = await axios.get("/api/users/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (!ignore) {
                    const userInformations = response.data;
                    setUserName(userInformations.name);
                    setUserEmail(userInformations.email);
                }
            } catch (error) {
                console.log(error);
            }
        }
        loadUserProfile();
        return () => {
            ignore = true;
        }
    }, [token, isTokenValid]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setIsUserIconClicked(false);
            }
        }
        if (isUserIconClicked) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [isUserIconClicked]);

    const handleUserIconClick = () => {
        setIsUserIconClicked(!isUserIconClicked);
        //console.log("user icon is clicked")
    }

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-24 h-24 rounded-lg flex items-center justify-center">
                            <img src='/MyFinance_logo.jpg' className='w-full h-full object-cover' />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">MyFinance</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => navigate("/")} className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</button>
                        <button onClick={() => (token == null || !isTokenValid) ? navigate("/login") : navigate("/dashboard")} className="text-gray-700 hover:text-indigo-600 font-medium transition">Dashboard</button>
                    </div>
                    <div className="flex gap-3">
                        {
                            (token == null || !isTokenValid) &&
                            <div>
                                <button onClick={() => navigate("/login")} className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition">Login</button>
                                <button onClick={() => navigate("/register")} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition">Sign up</button>
                            </div>
                        }
                        {
                            isTokenValid &&
                            <div ref={userMenuRef}>
                                <CircleUserRound onClick={handleUserIconClick} className="cursor-pointer" />
                                {isUserIconClicked
                                    && <UserMenu
                                        name={userName}
                                        email={userEmail}
                                    />
                                }
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar