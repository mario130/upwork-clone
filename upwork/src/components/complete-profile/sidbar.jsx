import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidbar = () => {
  const [tags] = useState([
    {step:1,linkedTo:"Get Started"},
   { step:2,linkedTo:"Category"},
   { step:3,linkedTo:"Expertise"},
   { step:4,linkedTo:"Expertise Level"},
   { step:5,linkedTo:"Education"},
   { step:6,linkedTo:"Hourly rate"},
   { step:7,linkedTo:"Title & Overview"},
   { step:8,linkedTo:"Profile Photo & Phone No."},
   { step:9,linkedTo:"Location"},

  ]);

  return (
    <div className="md:col-start-3 md:col-span-2 md:block hidden">
      <ul>
        {tags.map((tag, i) => (
          <li key={tag.step} className="py-2 text-gray-500">
            <Link to={`/freelancer/create-profile/step${tag.step}`} disabled>{tag.linkedTo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidbar;
