import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../pages/Client/ClientHomePage/ClientHomePage.css"
const Drafts = () => {
  const initialState = [
    {
      title: "Build responsive WordPress site with booking/payment  functionality in good way. Build responsive WordPress site with booking/payment functionality in good way.Build responsive WordPress site with booking/payment functionality in good way.",
      date: "3 day ago"
    },
    {
      title: "Build responsive WordPress site with booking/payment with booking/payment functionality in good way.",
      date: "9 day ago"
    },
    {
      title: "Build  site with booking/payment functionality in good way.Build responsive WordPress site with booking/payment functionality in good way.",
      date: "6 day ago"
    },
  ]
  const [drafts] = useState(initialState)
  return (
    <section className=" bg-white" id="myDraft">

      <ul className="list-group">
        <li className="list-item-header ">
          <p className="font-bold text-2xl">My Draft</p>
          <Link to="/" className="text-primary text-lg">
            all drafts
                </Link>
        </li>
        {drafts.map((draft, i) => <> <li className="list-items justify-between" key={i}>
          <div className="w-2/4" >
            <h3 className="text-xl hover:underline  hover:text-primary overflow-hidden lines ">
              <Link to="/">
                {draft.title}
              </Link>
            </h3>
            <span className="block text-gray-500">saved {draft.date}</span>
          </div>
          <button className="rounded-full border border-gray-500 w-8 h-8 flex justify-center items-center focus:outline-none">
            <span className="block text-gray-600">
              <svg
                width="16"
                height="16"

                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ellipsis-h"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                ></path>
              </svg>
            </span>
          </button>

        </li>
        </>
        )}


      </ul>
    </section>
  );
}

export default Drafts;