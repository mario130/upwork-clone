import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <>
    {/* ADD px-3 FOR ALIGNMENT */}
    <div className="container mx-auto mt-6">
      <div className="md:grid grid-cols-12">
        {/* HERO AREA */}
        <div className="px-5 max-w-md md:max-w-full mx-auto md:mx-0 col-start-1 col-end-8 row-start-1 row-end-4 z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-play font-bold text-complementary">
            The world’s work
            <br />
            marketplace
          </h1>

          <p className="text-complementary my-4 md:my-12 md:text-lg lg:text-xl">
            Engage the largest network of trusted
            <br />
            independent professionals to unlock
            <br />
            the full potential of your business.
          </p>

          <div className="flex space-x-4 md:max-w-xs">
            <Link to={`/login`}>
              <button className="bg-primary text-white font-bold flex-1 border border-gray-300 rounded-md py-2 px-4">
                Find Talent
            </button>
            </Link>
            <Link to={`/login`}>
              <button className="bg-white text-primary font-bold flex-1 border border-gray-300 rounded-md py-2 px-4">
                Find Work
            </button>
            </Link>
          </div>

          {/* brands */}
          <div className="hidden md:flex space-x-5 items-center absolute -bottom-16 lg:-bottom-32 xl:-bottom-44 w-full">
            <img
              className="w-14 h-10"
              src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/microsoft.94fec27.svg"
              alt=""
            />
            <img
              className="w-14 h-10"
              src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/airbnb.0db5415.svg"
              alt=""
            />
            <img
              className="w-6 h-10"
              src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/ge.5a23edc.svg"
              alt=""
            />
            <img
              className="w-14 h-10"
              src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/godaddy.d9459f1.svg"
              alt=""
            />
            <img
              className="w-14 h-6"
              src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/bissell.3861a37.svg"
              alt=""
            />
          </div>
        </div>

        {/* HERO IMAGES */}
        <div className="grid grid-cols-5 grid-rows-7 mt-4 col-start-7 col-end-13 row-start-1 row-end-7">
          <img
            className="col-start-1 col-end-4 row-start-1 row-end-4"
            src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/susan-desktop.86a7b2d.jpg"
            alt=""
          />
          <img
            className="col-start-3 col-end-6 row-start-2 row-end-7 pt-2 pl-2 bg-white"
            src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/john-desktop.3298528.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-white text-center">
        <svg
          className="mx-auto mt-8 mb-4 md:mt-28 animate-bounce"
          width="44"
          height="21"
          viewBox="0 0 44 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L22 18L42 2"
            stroke="#6FDA44"
            strokeWidth="4"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  </>
);

export default Hero;
