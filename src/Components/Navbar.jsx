import { useEffect, useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { FaEarthAfrica } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import './Navbar.css'
import AuthModal from './signUp-Login/AuthModal';
import SignUpModal from './signUp-Login/SignUpModal';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    //Login-Sign-up open/close
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [ismodalopen, setismodalopen] = useState(false);


    const navigate = useNavigate();

    // Check login status
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("DLX ActiveUser");
        toast.success("Logged out successfully!");
        setOpen(false);
        navigate("/");
    };

    // User check login/logout
    const LoggedUser = JSON.parse(localStorage.getItem("DLX ActiveUser"));


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
            {isSignUpOpen && <SignUpModal Close={() => setIsSignUpOpen(false)} openLogin={() => { setismodalopen(true) }} />}


            <nav className={`flex justify-between items-center fixed w-full z-50 ${color ? "bg-black/60 backdrop-blur-lg transition-colors duration-500" : ""}`}>
                <div className="logo flex items-center gap-2">
                    <FaEarthAfrica className='text-3xl text-blue-500' />
                    <h1 className='text-2xl font-semibold cursor-pointer'>GLX TRVL <span className='text-blue-500 '>.</span></h1>
                </div>
                {/* Desktop Menu */}
                <div className="menu bg-white/20 rounded-4xl backdrop hidden md:block " style={{ padding: "15px" }}>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                    <Link className="nav-link" to="/training">Training</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <div className="sign-up inline-block absolute right-[30px]">
                        <Link onClick={() => { setismodalopen(true) }} className={`${LoggedUser ? "hidden" : "block"}  border rounded-full`} style={{ padding: "5px 15px" }} to="#">Sign Up</Link>
                    </div>
                </div>
                {/* User-DropDown */}
                {LoggedUser && (
                    <div className="relative hidden md:inline-block  text-left">
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            style={{ padding: "6px 15px" }}
                        >
                            <p>{LoggedUser.name}</p> <RiArrowDropDownLine className='flex justify-center items-center text-xl' />
                        </button>

                        {open && (
                            <div className="absolute left-1/2 -translate-x-1/2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                                style={{ marginTop: "5px", width: "180px" }}>
                                <div className="py-1">
                                    <Link to="/" className="block text-sm text-gray-700 hover:bg-gray-100" style={{ padding: "10px 15px" }}>
                                        Profile
                                    </Link>
                                    <button onClick={handleLogout} className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" style={{ padding: "10px 15px" }}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}




                {/* mobile menu */}
                <div className={`${click ? "active" : "menu"} md:hidden absolute top-[0vh] left-[-100%] h-[100vh] flex flex-col justify-center items-center gap-[20px] text-white bg-black/90 backdrop-blur-lg w-full transition-all duration-500 ease-in-out z-[-1] inset-0`}>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/">Home</Link>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/pricing">Pricing</Link>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/training">Training</Link>
                    <Link onClick={handleCloseMenu} className="nav-link" to="/contact">Contact</Link>
                    <Link onClick={() => { setclick(false); setismodalopen(true) }} className={`${LoggedUser ? "hidden" : "block"} rounded-full hover:shadow-2xl transition-all`} style={{
                        padding: "5px 15px", background: "linear-gradient(135deg, #00f2fe, #4facfe)", boxShadow: "0 0 10px rgba(79, 172, 254, 0.5)"
                    }} to={"#"}>Sign up</Link>

                    {/* User-DropDown */}
                    {LoggedUser && (
                        <div className="relative inline-block text-left">
                            <button
                                onClick={() => setOpen(!open)}
                                className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                style={{ padding: "6px 15px" }}
                            >
                                <p>{LoggedUser.name}</p> <RiArrowDropDownLine className='flex justify-center items-center text-xl' />
                            </button>

                            {open && (
                                <div className="absolute left-1/2 -translate-x-1/2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                                    style={{ marginTop: "5px", width: "180px" }}>
                                    <div className="py-1">
                                        <Link to="/" className="block text-sm text-gray-700 hover:bg-gray-100" style={{ padding: "10px 15px" }}>
                                            Profile
                                        </Link>
                                        <button onClick={handleLogout} className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" style={{ padding: "10px 15px" }}>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}



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