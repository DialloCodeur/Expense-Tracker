import { LogOut } from "lucide-react"
import { useContext } from "react";
import { ExpenseContext } from "../../store/ExpenseContext";

function UserMenu({ name, email }) {

    const { resetUser } = useContext(ExpenseContext)
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <div className="flex gap-2">
                <LogOut /> <button className="cursor-pointer px-4 py-0.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200" onClick={resetUser}>Logout</button>
            </div>
        </>
    )
}

export default UserMenu;