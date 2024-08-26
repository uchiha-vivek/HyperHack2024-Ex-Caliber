import { useNavigate } from "react-router-dom"

function Button(){
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate('/home')
    }
    return (
        <>
        <div>
<button  onClick={handleSubmit} className="bg-black text-white py-2 px-4 rounded-md" >Explore More !</button>
        </div>
        </>
    )
}
export default Button