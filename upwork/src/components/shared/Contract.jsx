import React, { useState } from "react";

const Contract = () => {
  const [contract] = useState({
    title: "React bug fix",
    budget: 70,
    paid: 30,
    remaining: 40,
    earnings: 30,
  });
  const [client] = useState({
    name: "John Doe",
    imageUrl:
      "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
    localTime: "8:36 am",
  });

  return (
    <div className="pt-3 max-w-5xl mx-auto">
      <div className="text-right mb-3 mr-3">
        <button className="px-3 py-2 bg-primary text-white rounded-lg font-bold text-sm">
          Propose new contract
        </button>
      </div>

      <div className="bg-white py-3 lg:rounded-lg shadow-categ">
        <h2 className="px-3 lg:px-6 font-bold text-xl mb-5">
          {contract.title}
        </h2>

        {/* CLIENT */}
        <div className="px-3 lg:px-6 flex">
          <img src={client.imageUrl} className="w-16 mr-4" alt="" />
          <div>
            <p className="font-bold my-1">{client.name}</p>
            <p className="font-light">{client.localTime}</p>
          </div>
        </div>

        <ul className="px-3 lg:px-6 pt-4 mb-4 flex font-bold border-b border-gray-200 space-x-6">
          <li className="cursor-pointer border-b-2 border-primary text-primary text-sm">
            Milestones & Earnings
          </li>
          {/* <li className="border-b-2 border-transparent text-sm">
          Messages & Files
        </li> */}
          <li className="cursor-pointer border-b-2 border-transparent text-sm">
            Terms & settings
          </li>
          <li className="cursor-pointer border-b-2 border-transparent text-sm">
            Feedback
          </li>
        </ul>

        {/* Milestones */}
        <div className="px-3 lg:px-6 flex flex-wrap text-sm">
          <div className="w-1/2 lg:w-1/4 mb-2">
            <h4 className="font-bold">Budget</h4>
            <p className="text-lg">${contract.budget}</p>
          </div>
          <div className="w-1/2 lg:w-1/4">
            <h4 className="font-bold">Milestones Paid</h4>
            <p className="text-lg">${contract.paid}</p>
          </div>
          <div className="w-1/2 lg:w-1/4">
            <h4 className="font-bold">Remaining</h4>
            <p className="text-lg">${contract.remaining}</p>
          </div>
          <div className="w-1/2 lg:w-1/4">
            <h4 className="font-bold">Total Earnings</h4>
            <p className="text-lg">${contract.earnings}</p>
          </div>
        </div>

        {/* accept decline */}
        <div className="px-3 lg:px-6 flex md:w-96 mt-8 text-sm">
          <button className="flex-1 md:order-2 mx-1 py-2 rounded-lg font-bold text-red-500">
            Cancel contract
          </button>
          <button
            className="flex-1 md:order-1 mx-1 py-2 rounded-lg font-bold bg-primary text-white"
            type="submit"
          >
            Accept terms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contract;
