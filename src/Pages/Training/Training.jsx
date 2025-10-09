import Header from "../../Components/Header"
import { FaChalkboardTeacher } from "react-icons/fa";
import EarthImage from "../../assets/./earth-image.jpg"

const Training = () => {
  return (
    <>
      <Header heading='Training Page' icon={<FaChalkboardTeacher className="text-2xl" />} />
      <h1 className="heading flex justify-center items-center text-4xl font-semibold">🛰️ About Galaxy Travel</h1>
      <section className='about flex flex-col md:flex-row items-center gap-10 md:gap-16'>
        <div className="image ">
          <img className="w-full h-full object-cover rounded shadow-lg" src={EarthImage} alt="" />
        </div>
        <div className="about-content">
          <h2 className="flex justify-center md:justify-start text-center text-2xl font-semibold border-b-1 border-gray-600">Your Journey Beyond the Stars</h2>
          <div className="para text-center md:text-left text-gray-100 font-light">
            <p>
              Galaxy Travel is your gateway to exploring the universe. We offer unforgettable journeys across planets and galaxies, combining adventure, comfort, and cosmic wonder.
            </p>
            <p>
              Join us to discover breathtaking cosmic landscapes, experience the thrill of space travel, and make your dream adventures a reality.
            </p>
            <p>
              Galaxy Travel is your gateway to exploring the universe.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Training