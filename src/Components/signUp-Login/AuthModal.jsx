
function AuthModal({ Close, openSignUp }) {
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
        <form>
          <label style={{ marginBottom: "10px", display: "block" }}>Enter Your Email</label>
          <input type="email" placeholder="Email" className="border w-full rounded" style={{ padding: "8px", marginBottom: "12px" }} />
          <label style={{ marginBottom: "10px", display: "block" }}>Enter Your Password</label>
          <input type="password" placeholder="Password" className="border w-full rounded" style={{ padding: "8px", marginBottom: "12px" }} />
          <button className="bg-blue-600 cursor-pointer text-white w-full rounded" style={{ padding: "8px 0" }}>Submit</button>
          <p className="" style={{ marginTop: "10px" }}>Don't have an account? <button onClick={() => { openSignUp(); Close(); }} className="text-blue-500 cursor-pointer" >Sign up</button></p>
        </form>
      </div>
    </div>
  );
}

export default AuthModal