import "./Home.css"
import Hero from './component/Hero'
import About from './component/About'
import Service from './component/Service'
import CallToAction from "./component/CallToAction"
import Faq from "./component/Faq"


const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Service/>
    <CallToAction/>
    <Faq/>
    </>
  )
}

export default Home