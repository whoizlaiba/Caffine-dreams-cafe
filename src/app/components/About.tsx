import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <div className="bg-black py-12" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center bad-script-regular text-white mb-8">
          About Our Coffee Shop
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       
          <div className="space-y-6">
            <p className="text-lg text-gray-500 bad-script-regular">
              Welcome to our coffee shop, where every cup tells a story. Our mission is to offer more than just a cup of coffee—we aim to create an experience. From our carefully sourced beans to the heartwarming environment, we want to be your go-to spot for that perfect blend of comfort and flavor.
            </p>
            <p className="text-lg text-gray-500  bad-script-regular">
              Whether you are here for a quick pick-me-up or to spend time with friends, we ensure every moment spent here is special. Our cozy seating, friendly baristas, and commitment to quality make us a place where memories are made.
            </p>
            <p className="text-lg text-gray-500 bad-script-regular">
            Here, you will find a space that feels like an extension of your own home, where the aroma of freshly brewed coffee mingles with the laughter of good company. Our passion for coffee goes beyond just the craft&mdash;it&#39;s about creating a place where connections are made, stories are shared, and every visit feels like a little escape from the hustle of daily life.


            </p>
            <p className="text-lg text-gray-500 bad-script-regular">
              Come and experience the magic of freshly brewed coffee, crafted with love, and served with a smile. Join us in celebrating the art of coffee, community, and connection.
            </p>
          </div>

      
          <div className="relative w-full h-80 sm:h-96 lg:h-full">
            <Image
              src="/aboutpic.jpeg" 
              alt="Coffee Shop Interior"
              className="object-cover w-full h-full rounded-lg shadow-lg"
              width={1000}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
