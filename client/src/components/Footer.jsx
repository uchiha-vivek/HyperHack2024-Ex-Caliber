import { Link } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Footer = () => {
    const handleSubscribe = (event) => {
        event.preventDefault()
        toast.success('Thank you for subscribing',{
            position:"top-center",
            autoClose:3000,
            closeOnClick:true,
            hideProgressBar:false,
            pauseOnHover:false,
            draggable:true,
            progress:undefined,
            scheme:"colored"
        })
    }
    return (
        <>
            <footer className="mt-20 border-t py-10 border-neutral-700 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-md font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-neutral-400 hover:text-white">API</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-neutral-400 hover:text-white">API</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-neutral-400 mb-4">Get the latest updates and offers.</p>
                        <form className="space-y-4" onSubmit={handleSubscribe} >
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full p-2 rounded bg-neutral-800 text-neutral-400 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button 
                                type="submit" 
                                className="w-full p-2 bg-gradient-to-r from-green-700 to-green-400 text-black rounded"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
            <ToastContainer/>
        </>
    );
};

export default Footer;
