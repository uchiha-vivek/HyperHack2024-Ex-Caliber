import { Link } from "react-router-dom"



const Hero = () => {
    return (
        <>
        <div className="flex flex-col items-center mt-6 lg:mt-16 " >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl  text-center tracking-wide">
                
                <span className=" text-white text-transparent bg-clip-text" >Carbon Credits for your Organization</span>
            </h1>
            <p className="text-center text-lg mt-10  text-neutral-500 max-w-4xl " >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorum corrupti voluptate. Tempora mollitia sint illo minus deleniti a dolores vel eaque odio! Commodi iure rerum nostrum, perferendis libero quod.
            </p>
            <div className="justify-center flex my-10  " >
            <Link to='/home' className='rounded-md  text-black bg-gradient-to-r from-green-700 to-green-400 py-2 px-3 '> Trade Credits ! </Link>
            </div>
        </div>
        </>
    )
}
export default Hero