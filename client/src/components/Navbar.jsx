import { Link } from 'react-router-dom'
import cbn from '../assets/cbn.png'
import {Menu,X} from 'lucide-react'
import { useState } from 'react'
const Navbar  = () => {
  const[hamburger,setHamburger]= useState(false)
  const toggleHamburger = () => {
    setHamburger(!hamburger)
  }
    return (
        <>
        
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b  " >
                <div className="container px-4 mx-auto relative text-sm" >
                    <div className="items-center justify-between flex" >
                                 <Link to='/'>
                                 <div className="flex items-center flex-shrink-0 " >
                                         <img src={cbn} alt='logo' className='h-10 w-10 mr-2' />
                                         <span className='tracking-tight text-xl' > Carbon Credit </span>
                                </div>
                                 </Link>
                                <div className='hidden lg:flex justify-center space-x-12 items-center ' >
                                       <Link className='py-2 px-3 border rounded-md ' >Sign In</Link>
                                       <Link className='rounded-md bg-gradient-to-r from-green-700 to-green-400 py-2 px-3 '> Register </Link>
                                </div>
                                <div className='lg:hidden md:flex flex-col justify-end ' >
                                              <button onClick={toggleHamburger} > 
                                                          { hamburger ? <X/>  : <Menu/> }
                                              </button>
                                </div>
                    </div>
                    {
                        hamburger && (
                            <div className='w-full p-12 bg-neutral-900 fiexed right z-20 flex flex-col justify-center items-center lg:hidden ' >
                                      <ul>
                                        <li className='py-4' >
                                            <Link to='/' >About</Link>
                                        </li>
                                        <li className='py-4' >
                                            <Link to='/'>Organizations</Link>
                                        </li>
                                      </ul>
                                      <div className='space-x-6 flex mt-5 '>
                                         <Link className='px-3 py-2 rounded-md border  ' >Sign In</Link>
                                         <Link className='rounded-md bg-gradient-to-r from-green-700 to-green-400 py-2 px-3 '> Register </Link>
                                        </div>
                                </div>
                        )
                    }

                </div>
        </nav>

        </>
    )
}
export default Navbar