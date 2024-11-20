import React from "react";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className=" h-screen w-full  text-white bg-black flex flex-col justify-center items-center text-center relative"
    >
      <Image
        src={"/coffee.webp"} 
        alt="Coffee Cup"
        className=" w-fit h-fit z-10 mb-4  " 
        width={1000}
        height={100}
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
   
      <h2 className="text-4xl md:text-5xl font-bold mb-4 z-10 bad-script-regular ">
        Welcome to <br className="block sm:hidden"></br>
        <span className="text-yellow-700 md:text-6xl text-4xl">
          Caffeine Dreams
        </span>
        <br className="block sm:hidden"></br> Cafe
      </h2>
      <p className="text-xl mb-8 z-10 bad-script-regular sm:text-wrap ">
        Your perfect cup of coffee, brewed just for you!
      </p>
    
    </section>
   
  );
};

export default Hero;
