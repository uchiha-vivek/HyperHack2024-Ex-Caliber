import { useNavigate } from "react-router-dom";
import FadeInCard from "../components/Card/FadeInCard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
 

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
            {/* <div>
                <FadeInCard/>
              
            </div> */}
            <Navbar/>
            <div className="max-w-7xl pt-20 px-6 mx-auto " >
               
               <Hero/>
               <Feature/>
            </div>
            <Footer/>

        </>
    );
}

export default LandingPage;
