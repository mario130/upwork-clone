import React, { useState } from "react";

const Say = () => {
  const [skills] = useState([
    'Data Entry Specialists',
    'Video Editors',
    'Data Analyst',
    'Shopify Developer',
    'Ruby on Rails Developer',
    'Android Developer',
    'Bookkeeper',
    'Content Writer',
    'Copywriter',
    'Database Administrator',
    'Data Scientist',
    'Front-End Develooper',
  ])

  return (
  <div className="mt-20 mx-auto">
    <div className="relative">

    <div className="container max-w-sm mx-auto md:max-w-full px-3">
      {/*  md:absolute md:right-5 */}
      <h5 className="text-gray-500 font-extrabold uppercase tracking-widest text-xs text-center">
        What they say
      </h5>

      <div className="md:absolute md:w-1/2 md:right-0 md:px-4">
        <h3 className="text-complementary font-play text-xl mt-4 mb-5 md:mt-8 md:mb-4">
          “The freelance talent that I’m able to access creates productivity in
          a way that I don’t think any of us thought possible.”
        </h3>
        <h5 className="text-md text-complementary font-bold">Cara Bedford</h5>
        <h6 className="text-sm font-semibold text-complementary">
          Director Strategic Marketing, CompuVision
        </h6>
      </div>
    </div>

    {/* pics */}
    <div className="grid grid-cols-7 mt-4 md:grid-cols-12 container mx-auto">
      <img
        className="col-start-1 col-end-5 row-start-1 row-end-5 md:col-start-1 md:col-span-6 md:row-start-1"
        src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/cara.f9078b9.jpg"
        alt=""
      />
      <img
        className="col-start-4 col-end-8 row-start-3 row-end-7 bg-white pt-2 pl-2 md:col-start-6 md:col-end-13 md:row-start-4"
        src="https://www.upwork.com/static/assets/Brontes/5205c4c/img/sam.670fec0.jpg"
        alt=""
      />
    </div>

    <div className="container max-w-sm mx-auto md:max-w-full px-3">
      <div className="md:absolute md:w-1/2 md:left-0 md:bottom-0 md:pl-4 md:pr-14 lg:bottom-20 lg:pr-20 xl:pr-32">
        <h3 className="text-complementary font-play text-xl mt-4 mb-5 md:mt-8 md:mb-10">
          “My relationship with Cara & CompuVision has grown over the years.
          We’ve continued to work together on larger and more technical
          projects.”
        </h3>
        <h5 className="text-md text-complementary font-bold">Sam Crockett</h5>
        <h6 className="text-sm font-semibold text-complementary">
          Independent Web Developer
        </h6>
      </div>
    </div>
    </div>

    <div className="container mx-auto max-w-3xl">
      <h5 className="text-gray-500 font-extrabold uppercase tracking-widest text-xs text-center mt-16 mb-6">
        Top skills
      </h5>
      <div className="skills flex flex-wrap space-x-3 items-center justify-center ">
        {skills.map(skill => (
          <span className="px-2 py-1 mb-2 border border-complementary text-complementary rounded-full hover:bg-complementary hover:text-white cursor-pointer">{skill}</span>
        ))}
        <button className="text-primary font-bold pb-2">See more</button>
      </div>
    </div>
  </div>
  )
};

export default Say;
