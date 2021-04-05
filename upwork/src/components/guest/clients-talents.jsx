import React, { useState } from "react";

const ClientsAndTalents = () => {
  const [clientCategs] = useState([
    { title: "Post a job and hire a pro", area: "Talent Marketplace" },
    { title: "Browse and buy projects", area: "Project Catalog" },
    { title: "Let us find the right talent", area: "Talent Scout" },
  ]);
  const [clientTags] = useState(['Developmennt & IT', 'Design & Creative', 'Sales & Marketing', 'Writing', 'Customer Support', 'Marketing', 'See all categories'])

  const [talentCategs] = useState([
    {title: 'Find a project to work on', area: 'Talent Marketplace'},
    {title: 'See all predefined projects', area: 'Project Catalog'},
  ])

  return (
    <div className="mt-12 text-center container mx-auto px-3">
      <div className="max-w-sm  mx-auto md:max-w-full">
        <h5 className="text-gray-500 font-extrabold uppercase tracking-widest text-xs">
          For clients
        </h5>
        <h3 className="text-complementary font-play text-2xl mt-6 mb-5 md:text-5xl md:mt-8 md:mb-10">
          Find talent your way
        </h3>
        <p className="mb-7 md:text-lg">
          Develop trusted relationships and build your own virtual talent bench
          for quick project turnarounds or big transformations.
        </p>

        {/* categ cards */}
        <div className="md:flex md:space-x-6">
          {clientCategs.map((categ) => (
            <div className="mb-4 shadow-categ text-left relative group md:flex-1">
              <div className="p-5 group-hover:bg-light cursor-pointer transition-all ease-out">
                <h5 className="text-complementary text-xl md:text-2xl font-play group-hover:text-white">
                  {categ.title}
                </h5>
                <p className="text-gray-500 text-xs md:text-sm mt-3 mb-8 group-hover:text-white">
                  {categ.area}
                </p>
                <div>
                  <svg
                    className="h-10 w-10 absolute right-0 bottom-0 p-2 bg-light text-white group-hover:text-light group-hover:bg-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* categ question */}
        <div className="text-sm mt-6 mb-12 md:flex md:justify-center">
          <h5>Need a solution for large organizations?</h5>&nbsp;
          <button className="text-primary font-bold">
            Enterprise Suite has you covered.
          </button>
        </div>

        {/* client tags */}
        <div className="text-3xl text-gray-800 space-y-5 mb-20">
        {clientTags.map(tag => (
          <h3 className="hover:text-light cursor-pointer">{tag}</h3>
        ))}
        </div>

        {/* for talents */}
        <h5 className="text-gray-500 font-extrabold uppercase tracking-widest text-xs">
          For talents
        </h5>
        <h3 className="text-complementary font-play text-2xl mt-6 mb-5 md:text-5xl md:mt-8 md:mb-10">
        Work your way
        </h3>
        <p className="mb-7 md:text-lg">
        Choose how you work, and unlock 122,322 new opportunities to earn.
        </p>

        {/* talent categ cards */}
        <div className="md:flex md:space-x-6 md:justify-center">
          {talentCategs.map((categ) => (
            <div className="mb-4 shadow-categ text-left relative group">
              <div className="p-5 group-hover:bg-light cursor-pointer transition-all ease-out ">
                <h5 className="text-complementary text-xl md:text-2xl font-play group-hover:text-white">
                  {categ.title}
                </h5>
                <p className="text-gray-500 text-xs md:text-sm mt-3 mb-8 group-hover:text-white">
                  {categ.area}
                </p>
                <div>
                  <svg
                    className="h-10 w-10 absolute right-0 bottom-0 p-2 bg-light text-white group-hover:text-light group-hover:bg-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsAndTalents;
