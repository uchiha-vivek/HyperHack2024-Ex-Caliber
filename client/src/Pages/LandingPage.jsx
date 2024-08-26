import { useNavigate } from "react-router-dom";
import FadeInCard from "../components/Card/FadeInCard";

function LandingPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/home');
    }

    return (
        <>

            {/* <div>

                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4"
                    style={{ backgroundImage: 'url("")' }}>

                    <div className="flex flex-col items-center space-y-4">
                        <FadeInCard />


                    </div>
                    <button
                        onClick={handleClick}
                        className="bg-black text-white py-2 px-4 rounded"
                    >
                        Go to New Page
                    </button>
                </div>

            </div> */}
            <div>
                <FadeInCard/>
              
            </div>

        </>
    );
}

export default LandingPage;
