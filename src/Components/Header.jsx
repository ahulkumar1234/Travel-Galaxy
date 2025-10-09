import Image from "./../assets/Header-img.jpg";

const Header = ({heading,icon}) => {
  return (
    <>
      <section className="header ">
        <div className="bg-img">
          <img
            src={Image}
            alt=""
            className="w-[100vw] h-[100vh] object-cover"
          />
        </div>
        <div className="head-content absolute inset-0 text-center flex flex-col gap-4 items-center justify-center bg-black/50" style={{padding: "25px"}}>
        <h1 className=" text-white text-4xl font-bold">
          Explore the World with Galaxy Travel
        </h1>
        <p className="text-xl">Discover breathtaking destinations, plan your dream vacations, and make memories that last forever.</p>
        <h2 className="border flex justify-center items-center gap-2" style={{padding:"10px 30px"}}>{heading}{icon} </h2>
        </div>
      </section>
    </>
  );
};
 
export default Header;
