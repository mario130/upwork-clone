import { useState } from "react";
import { Link } from "react-router-dom";

const Templates = () => {
  const initialState = [
    {
      temName: "Social media",
    },
    {
      temName: "Accounting",
    },
    {
      temName: "Web Development",
    },
    {
      temName: "Web Design",
    },
    {
      temName: "Marketing",
    },
    {
      temName: "Writing",
    },
    {
      temName: "Customer Service",
    },
  ];
  const [templates] = useState(initialState);
  return (
    <section className=" bg-white" id="templates">
      <ul className="list-group">
        <li className="list-item-header ">
          <p className="font-bold text-2xl">Job Template</p>
        </li>
        {templates.map((tem) => (
          
            <li className="list-items justify-between p-4 " key={tem.temName}>
              <div className="">
                <h3 className="text-xl hover:underline  hover:text-primary overflow-hidden lines ">
                  <Link to="/">{tem.temName}</Link>
                </h3>
              </div>
              <button className=" w-8 h-8 flex justify-center items-center focus:outline-none border-none">
                <span className="text-primary">
                  <svg
                    width="12"
                    height="12"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    className="svg-inline--fa fa-arrow-right fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </span>
              </button>
            </li>
       
        ))}
      </ul>
    </section>
  );
};

export default Templates;
