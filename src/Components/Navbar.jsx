import { useEffect, useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { FaEarthAfrica } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [click, setclick] = useState(false)

    const handleClick = () => {
        setclick(!click)
    }

    const [color, setcolor] = useState(false)

    const handleNavColor = () => {
        if (window.scrollY > 100) {
            setcolor(true)
        }
        else {
            setcolor(false)
        }
    }
   useEffect(() => {
      window.addEventListener("scroll", handleNavColor)
   }, [])
   

    return (
        <nav className={`flex justify-between items-center fixed w-full z-50 ${color ? "bg-black/60 backdrop-blur-lg transition-colors duration-500" : ""}`}>
            <div className="logo flex items-center gap-2">
                <FaEarthAfrica className='text-3xl text-blue-500' />
                <h1 className='text-2xl font-semibold cursor-pointer'>GLX TRVL <span className='text-blue-500 '>.</span></h1>
            </div>
            {/* Desktop Menu */}
            <div className="menu hidden md:block ">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/pricing">Pricing</Link>
                <Link className="nav-link" to="/training">Training</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            {/* mobile menu */}
            <div className={`${click ? "active" : "menu"} md:hidden absolute top-[0vh] left-[-100%] h-[100vh] flex flex-col justify-center items-center gap-[20px] text-white bg-black/90 backdrop-blur-lg w-full transition-all duration-500 ease-in-out z-[-1] inset-0`}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/pricing">Pricing</Link>
                <Link className="nav-link" to="/training">Training</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {
                    click ? <FaTimes className='text-2xl md:hidden cursor-pointer' /> : <FaBars className='text-2xl md:hidden cursor-pointer' />
                }
            </div>
        </nav>
    )
}

export default Navbar