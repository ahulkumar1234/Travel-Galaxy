import Video from '../../../assets/moon-video.mp4'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            
            <div className="hero w-full min-h-screen relative z-10">
                <video
                    src={Video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-[100vw] h-[100vh] object-cover absolute top-0 left-0 z-[-1]'
                />
                <div className="content flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent">
                    <h1 className=' text-4xl font-bold text-center'>Travel. Galaxies</h1>
                    <p className='w-[60vw] text-center text-xl'>Explore the beauty of space, stars, and planets with us — journey beyond Earth, uncover cosmic wonders, and let your adventure begin among the galaxies.</p>
                    <div className="btns">
                        <Link className='hero-btn border rounded-full' to="/training">Try Now</Link>
                        <Link className='hero-btn border rounded-full hover:bg-white/30 transition-all' to="/contact">Launch!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero