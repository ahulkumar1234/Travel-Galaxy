import { useState, useEffect, use } from "react";
import { toast } from "react-toastify";


function AuthModal({ Close, openSignUp }) {

    const [userinput, setUserInput] = useState({
        email: "",
        password: ""
    })

    const [User, setUser] = useState([])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userinput, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userinput.email || !userinput.password) {
            toast.error("Please enter both email and password!");
            return;
        }

        // check user exist or not If yes then login success
        const savedUsers = JSON.parse(localStorage.getItem("DLX Users")) || [];

        const user = savedUsers.find(
            u => u.email === userinput.email && u.password === userinput.password
        );

        if (user) {

            // toast.success("Login Succesfully!");

            // saving current individual user to local storage
            localStorage.setItem("DLX ActiveUser", JSON.stringify(user));
            toast.success(`Welcome ${user.name}!`);

            // close modal after login
            Close();
        } else {
            toast.error("Invalid email or password!");
        }
        setUser((prevuser) => [...prevuser, userinput])

        setUserInput({
            email: "",
            password: ""
        })
    }

    useEffect(() => {
        sessionStorage.setItem("DLX user", JSON.stringify(userinput))
    }, [userinput])




    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[9999]">
            <div className="bg-black/20 backdrop-blur rounded-xl relative w-96" style={{ padding: "24px" }}>
                <button
                    onClick={Close}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
                >
                    ✕
                </button>
                <h2 className="text-xl font-bold" style={{ marginBottom: "16px" }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label style={{ marginBottom: "10px", display: "block" }}>Enter Your Email</label>
                    <input
                        onChange={handleChange}
                        value={userinput.email}
                        name="email"
                        type="email" placeholder="Email"
                        className="border w-full rounded"
                        style={{ padding: "8px", marginBottom: "12px" }} />
                    <label style={{ marginBottom: "10px", display: "block" }}>Enter Your Password</label>
                    <input
                        onChange={handleChange}
                        value={userinput.password}
                        name="password"
                        type="password" placeholder="Password"
                        className="border w-full rounded"
                        style={{ padding: "8px", marginBottom: "12px" }} />

                    <button className="bg-blue-600 cursor-pointer text-white w-full rounded" style={{ padding: "8px 0" }}>Submit</button>
                    <p className="" style={{ marginTop: "10px" }}>Don't have an account? <button type="button" onClick={() => { openSignUp(); Close(); }} className="text-blue-500 cursor-pointer" >Sign up</button></p>
                </form>
            </div>
        </div>
    );
}

export default AuthModal