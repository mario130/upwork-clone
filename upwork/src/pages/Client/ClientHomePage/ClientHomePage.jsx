import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ClientCarousel from "../../../components/Client/ClientCarousel";
import Drafts from "../../../components/Client/Drafts";
import HowItWorks from "../../../components/Client/HowItWorks";
import Posts from "../../../components/Client/Posts";
import Templates from "../../../components/Client/Templates";
import Footer from "../../../components/shared/footer";
import Nav from "../../../components/shared/navbar";
import Btn from "../../../components/UI/Form/Btn/Btn";
import "./ClientHomePage.css"
const ClientHomePage = () => {
  const userName = localStorage.getItem('userName')
  
  return (
    <>
    <Nav/>
    <div id="home" className="bg-bodyGray">
      <div className="px-4 lg:px-6 pt-4 md:mx-12 lg:container lg:mx-auto lg:max-w-5xl ">
        <div className="flex justify-between flex-wrap mb-12">
          <p className="font-extrabold text-2xl md:mb-0 mb-5">
            {userName}
            <span className="ml-8 text-primary inline-block ">
              <svg
                width="30"
                height="30"
                className="text-primary inline-block pb-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-plus"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                ></path>
              </svg>
            </span>
          </p>
          <div className="btns sm:w-auto w-full flex flex-wrap items-center">
            <Btn className="bg-white hover:bg-gray-100 focus:ring-gray-300 text-primary  px-8 border border-gray-200 sm:w-auto w-full sm:mb-0 mb-2">
              Browse Project Catalog
            </Btn>
            <Link to="/client/job-post" className="py-2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2  rounded-lg bg-primary hover:bg-green-800 focus:ring-green-500  text-white px-8 sm:ml-3 sm:w-auto w-full">
              Post Job
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mb-5 md:pr-4 md:w-8/12 w-full">
            <div className=" mb-5">
            <Posts/>
            </div>
            {/* <div className=" mb-5">
            <Drafts/>
            </div> */}
            <div>
              <HowItWorks/>
            </div>
          </div>
          <div className=" md:pl-4 md:w-4/12 w-full">
            <aside className=" mb-5">
            <ClientCarousel/>
            </aside>
            <aside className="mb-4">
              <Templates/>
            </aside>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ClientHomePage;
