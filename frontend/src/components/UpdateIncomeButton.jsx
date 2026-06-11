import { useState } from "react"
import { useNavigate } from "react-router-dom";


function UpdateIncomeButton() {
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const navigate = useNavigate();
    const displayUpdateForm = () => {
        setIsUpdateFormVisible(!isUpdateFormVisible);
        navigate("/update-income")
    }
    return (
        <>
            <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition duration-200" onClick={displayUpdateForm}>Update Income</button>
        </>
    )
}

export default UpdateIncomeButton