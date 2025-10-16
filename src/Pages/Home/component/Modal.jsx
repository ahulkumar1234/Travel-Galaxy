import { Link } from "react-router-dom"
import { RxCross1 } from "react-icons/rx";


const Modal = ({handleClickModal}) => {
    return (
        <>
            <div className="modal-overlay bg-black/50 flex justify-center items-center">
                <div className="modal  border border-gray-700 rounded-lg w-[400px] h-[350px] bg-black/30 backdrop-blur-lg">
                    <h1 className="text-center text-lg font-bold">🚀 Explore the Galaxy with Us</h1>
                    <p className="text-center text-gray-300">Embark on an unforgettable journey through the stars.
                        At Galaxy Travel, we bring your cosmic dreams to life — from moonlight adventures to luxury cruises among Saturn’s rings.
                        Discover beauty beyond Earth and experience the universe like never before.</p>
                    <Link className="flex justify-center items-center border rounded-full" to="/pricing" style={{padding:"8px"}}>See More</Link>
                    <button  className="cross fixed top-1 right-1 cursor-pointer">
                        <RxCross1 onClick={handleClickModal}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal