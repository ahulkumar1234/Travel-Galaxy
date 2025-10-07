import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useRef } from "react";

const Service = () => {
    const slideref = useRef(null)

    const rightslide = () => {
        slideref.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
    const leftslide = () => {
        slideref.current.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const travelPackages = [
        {
            id: 1,
            name: "Moonlight Adventure",
            destination: "Moon",
            description: "Experience the beauty of Earthrise from the Moon’s surface. Perfect for stargazers and adventure lovers.",
            price: "$25,000",
            duration: "5 Days / 4 Nights",
            image: "https://w0.peakpx.com/wallpaper/679/526/HD-wallpaper-moonlight-john-wilhelm-reative-luna-children-creative-woman-mother-baby-situation-moon-girl-copil-climbing-white-blue-night.jpg"
        },
        {
            id: 2,
            name: "Mars Expedition",
            destination: "Mars",
            description: "Explore the red planet and witness the Martian sunrise. Includes guided rover tours and space camp experience.",
            price: "$50,000",
            duration: "10 Days / 9 Nights",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSfuJJ7xfXm1B6A7vI7j8nnuWW89UPbMWpA&s"
        },
        {
            id: 3,
            name: "Saturn Rings Cruise",
            destination: "Saturn",
            description: "Sail around the beautiful rings of Saturn on our luxury space cruise. Enjoy cosmic dining and zero-gravity fun.",
            price: "$80,000",
            duration: "14 Days / 13 Nights",
            image: "https://images5.alphacoders.com/132/1328084.png"
        },
        {
            id: 4,
            name: "Galactic Tour Deluxe",
            destination: "Milky Way Galaxy",
            description: "A full tour across multiple planets — Moon, Mars, and Saturn. Ideal for explorers who want it all!",
            price: "$120,000",
            duration: "20 Days / 19 Nights",
            image: "https://img.goodfon.com/wallpaper/big/8/cf/vselennaia-planety-zviozdy-galaktika-noch-gorizont-kosmos-ne.webp"
        },
        {
            id: 5,
            name: "Nebula Dream Escape",
            destination: "Orion Nebula",
            description: "Witness the glowing beauty of distant stars. A relaxing and romantic getaway among cosmic clouds.",
            price: "$150,000",
            duration: "7 Days / 6 Nights",
            image: "https://images4.alphacoders.com/255/thumb-1920-25546.jpg"
        },
        {
            id: 6,
            name: "Black Hole Explorer",
            destination: "Cygnus X-1",
            description: "For thrill-seekers! Get close to the edge of a black hole (safely) and feel the ultimate rush of cosmic gravity.",
            price: "$200,000",
            duration: "12 Days / 11 Nights",
            image: "https://cdn.mos.cms.futurecdn.net/s7ciDuGDKyYCHhMgG3guXY.jpg"
        }
    ];

    return (
        <>
            <h1 className='heading flex justify-center items-center text-4xl font-semibold'>🪐 Galaxy Travel Packages</h1>
            <div className="controlbtns flex justify-end items-center text-gray-500 text-3xl md:text-4xl gap-4">
                <button onClick={leftslide} className="cursor-pointer hover:text-gray-400 transition-all"><FaCircleArrowLeft /></button>
                <button onClick={rightslide} className="cursor-pointer hover:text-gray-400 transition-all"><FaCircleArrowRight /></button>
            </div>
            <section className="service flex justify-center items-center">
                <div ref={slideref}  className="container flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth ">
                    {travelPackages.map((item) => (
                        <div
                            key={item.id}
                            className="service-card min-w-[300px] border border-gray-700 bg-gray-900 text-white p-4 rounded-lg hover:scale-105  transition duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-md mb-3 hover:scale-100 transition duration-300"
                            />
                            <h2 className="card-title text-xl font-semibold text-blue-400">
                                {item.name}
                            </h2>
                            <p className="card-desc  text-gray-300 text-sm mt-2">{item.description}</p>
                            <p className="card-price text-blue-300 font-semibold mt-3">{item.price}</p>
                            <p className="card-duration text-gray-400 text-sm">{item.duration}</p>
                            <button className="service-btn w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Service