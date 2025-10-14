import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function SignUpModal({ Close, openLogin }) {


    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })


    // Ye line isliye hai agar localStorage mai User data hai to usko wapas array mai convert karo agar nahi hai Userdata to blank array kardo

    const [users, setUsers] = useState(() => {
        const SavedUsers = localStorage.getItem("DLX Users")
        return SavedUsers ? JSON.parse(SavedUsers) : []
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validation
        if (!input.name || !input.email || !input.password) {
            toast.error("Please provide all the required details before submitting.");
            return;
        }

        // already exists/duplicate check
        const SavedUsers = JSON.parse(localStorage.getItem("DLX Users")) || [];

        const exists = SavedUsers.some(u => u.email === input.email);

        if (exists) {
            toast.error("Email already exists!");
            return;
        }


        // save user in state
        const updatedUsers = [...users, input];
        toast.success("Registration successful!");
        setUsers(updatedUsers);
        console.log(input.name)

        // save directly in localStorage
        localStorage.setItem("DLX Users", JSON.stringify(updatedUsers));

        // reset form
        setInput({ name: "", email: "", password: "" });

        // close sign-up & open login
        Close();
        openLogin();

    };

    // useEffect ka use isliye hua hai data localStorage mai save ke liye kuki useEffect latest data update karta or state current data ko update nahi kar pata
    // useEffect(() => {
    //     localStorage.setItem("DLX Users", JSON.stringify(users))
    // }, [users])



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[9999]">
            <div className="bg-black/20 backdrop-blur rounded-xl relative w-96" style={{ padding: "24px" }}>
                <button onClick={Close} className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer">✕</button>
                <h2 className="text-xl font-bold mb-4" style={{ marginBottom: "16px" }}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2" style={{ marginBottom: "10px", display: "block" }}>Enter Your Name</label>
                    <input
                        value={input.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="border w-full rounded"
                        style={{ padding: "8px", marginBottom: "12px" }} />
                    <label className="block mb-2" style={{ marginBottom: "10px", display: "block" }}>Enter Your Email</label>
                    <input
                        value={input.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="border w-full rounded"
                        style={{ padding: "8px", marginBottom: "12px" }} />
                    <label className="block mb-2" style={{ marginBottom: "10px", display: "block" }}>Enter Your Password</label>
                    <input
                        value={input.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="border w-full rounded "
                        style={{ padding: "8px", marginBottom: "12px" }} />


                    <button className="bg-blue-600 text-white cursor-pointer w-full rounded p-2" style={{ padding: "8px 0" }}>Submit</button>
                    <p className="" style={{ marginTop: "10px" }}>Already have an account? <button type="button" onClick={() => { openLogin(); Close(); }} className="text-blue-500 cursor-pointer" >Login</button></p>

                </form>
            </div>
        </div>
    );
}
export default SignUpModal