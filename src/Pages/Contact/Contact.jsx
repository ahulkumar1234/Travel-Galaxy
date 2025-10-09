import Header from "../../Components/Header";
import { FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Contact = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });

    const [users, setUsers] = useState([])

    const [success, setSuccess] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedUser = { ...user, [name]: value };
        setUser(updatedUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedUsers = ([...users, { ...user }])
        setUsers(updatedUsers)
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        console.log(updatedUsers)
        setUser({
            firstName: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
        })
    }

    useEffect(() => {
        localStorage.setItem("Customers", JSON.stringify(users))
    }, [users])



    return (
        <>
            <Header heading="Contact Us" icon={<FaPhoneAlt className="text-xl" />} />

            <section className="min-h-screen bg-gray-950 flex justify-center items-center" style={{ padding: "40px 20px" }}>
                <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-900 text-white rounded-2xl shadow-2xl flex flex-col gap-6 border border-gray-800" style={{ padding: "32px" }}>
                    <h2 className="text-3xl font-semibold text-center text-blue-400">
                        Get in Touch
                    </h2>
                    <p className="text-center text-gray-400 text-sm">
                        We’d love to hear from you! Please fill out the form below and we’ll get back to you soon.
                    </p>

                    {/* Name Fields */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <input
                            type="text"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="First Name"
                            style={{ padding: "12px" }}
                            name="firstName"
                            onChange={handleChange}
                            value={user.firstName}
                        />
                        <input
                            type="text"
                            className="w-full rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Last Name"
                            style={{ padding: "12px" }}
                            name="lastname"
                            onChange={handleChange}
                            value={user.lastname}
                        />
                    </div>

                    {/* Email Field */}
                    <input
                        type="email"
                        className="w-full rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter your email"
                        style={{ padding: "12px" }}
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                    />
                    {/* Phone Field */}
                    <input
                        type="text"
                        className="w-full rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Phone number"
                        style={{ padding: "12px" }}
                        name="phone"
                        onChange={handleChange}
                        value={user.phone}
                    />
                    {/* Message Field */}
                    <textarea
                        className="w-full rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none h-40"
                        placeholder="Write your message..."
                        style={{ padding: "12px" }}
                        name="message"
                        onChange={handleChange}
                        value={user.message}
                    ></textarea>

                    {success && (
                        <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                    )}
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg font-semibold shadow-md cursor-pointer"
                        style={{ padding: "18px" }}
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;
