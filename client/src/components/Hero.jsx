import { Link } from "react-router-dom"



const Hero = () => {
    return (
        <>
        <div className="flex flex-col items-center mt-6 lg:mt-16 " >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl  text-center tracking-wide">
                
                <span className=" text-white text-transparent bg-clip-text" >Carbon Credits for your Organization</span>
            </h1>
            <p className="text-center text-lg mt-10  text-neutral-500 max-w-4xl " >
            A carbon credit is a tradable certificate that represents the reduction, removal, or avoidance of one metric ton of carbon dioxide or its equivalent in other greenhouse gases from the atmosphere. Carbon credits are a key component of carbon trading systems, which allow companies, organizations, and governments to offset their carbon emissions by investing in environmental projects such as reforestation, renewable energy, and energy efficiency initiatives. These credits incentivize carbon reduction efforts and play a crucial role in combating climate change by putting a price on carbon emissions, encouraging businesses to adopt more sustainable practices and contribute to global carbon neutrality goals.







            </p>
            <div className="justify-center flex my-10  " >
            <Link to='/home' className='rounded-md  text-black bg-gradient-to-r from-green-700 to-green-400 py-2 px-3 '> Buy Credits ! </Link>
            </div>
        </div>
        </>
    )
}
export default Hero