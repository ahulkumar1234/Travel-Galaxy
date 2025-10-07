import { useState } from "react"
import Modal from "./Modal"

const CallToAction = () => {
  const [modal,setmodal]=useState(false)

    const handleClickModal=()=>{
      setmodal(!modal);
    };

  return (
    <>
   
        <section className="Call-To-Action flex justify-center items-center flex-col  w-[100%] h-[300px]">
            <h1 className="heading text-4xl font-semibold">🚀 Hurry Up Book Your Tickets !</h1>
            <button onClick={handleClickModal} className="border border-white hover:border-gray-400 transition-all rounded-full cursor-pointer">Know More</button>
        </section>
        {
            modal && <Modal handleClickModal={handleClickModal}/> 
        }
    </>
  )
}

export default CallToAction