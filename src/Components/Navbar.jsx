import { useEffect, useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { FaEarthAfrica } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import './Navbar.css'
import AuthModal from './signUp-Login/AuthModal';
import SignUpModal from './signUp-Login/SignUpModal';

const Navbar = () => {

    //Login-Sign-up
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [ismodalopen, setismodalopen] = useState(false);


    const [click, setclick] = useState(false)

    const handleClick = () => {
        setclick(!click)
    }

    const handleCloseMenu = () => {
        setclick(false)
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
        <>
            {/* login-modal */}
            {ismodalopen && <AuthModal Close={() => setismodalopen(false)} openSignUp={() => setIsSignUpOpen(true)} />}
            {isSignUpOpen && <SignUpModal Close={() => setIsSignUpOpen(false)} openLogin={()=>{setismodalopen(true)}}/>}


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
                    <div className="sign-up inline-block absolute right-[30px]">
                        <Link onClick={() => { setismodalopen(true) }} className=" border rounded-full" style={{ padding: "5px 15px" }} to="#">Sign Up</Link>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={`${click ? "active" : "menu"} md:hidden absolute top-[0vh] left-[-100%] h-[100vh] flex flex-col justify-center items-center gap-[20px] text-white bg-black/90 backdrop-blur-lg w-full transition-all duration-500 ease-in-out z-[-1] inset-0`}>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/">Home</Link>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/pricing">Pricing</Link>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/training">Training</Link>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/contact">Contact</Link>
                    <Link onClick={() => { setclick(false); setismodalopen(true) }} className=" border rounded-full hover:bg-white/30 transition-all" style={{ padding: "5px 15px" }} to={"#"}>Sign Up</Link>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {
                        click ? <FaTimes className='text-2xl md:hidden cursor-pointer' /> : <FaBars className='text-2xl md:hidden cursor-pointer' />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar