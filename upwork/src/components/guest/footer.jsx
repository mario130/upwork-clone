import React, { useState } from "react";
import FooterList from "./footerListItem";

const Footer = () => {
  const [footerLists] = useState([
    {
      title: "For Clients",
      links: [
        "How to Hire",
        "Talent Marketplace",
        "Project Catalog",
        "Talent Scout",
        "Enterprise",
        "Payroll Services",
        "Direct Contracts",
        "Hire Worldwide",
        "Hire in the USA",
      ],
    },
    {
      title: "For Talents",
      links: [
        "How to Find Work",
        "Direct Contracts",
        "Find Freelance Jobs Worldwide",
        "Find Freelance Jobs in the USA",
      ],
    },
    {
      title: "Resources",
      links: [
        "Help & Support",
        "Success Stories",
        "Upwork Reviews",
        "Resources",
        "Blog",
        "Community",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Leadership",
        "Investor Relations",
        "Careers",
        "Upwork Foundation",
        "Press",
        "Contact Us",
        "Trust, Safety & Security",
      ],
    },
  ]);

  return (
    <div className="bg-complementary py-3 px-5 text-gray-100 mt-14">
      <div className="max-w-5xl mx-auto">
      <div className="container mx-auto md:flex justify-between md:border-b md:border-twilight mb-6">
        {footerLists.map((list, i) => (
          <FooterList list={list} i={i} />
        ))}
      </div>

      {/* copyright */}
      <h4 className="text-sm">&copy; 2021 Upwork</h4>
      <h5 className="text-sm text-gray-300">
        Cloned by Mario, Ahmed, Peter, Mohamed, Islam
      </h5>
      </div>
    </div>
  );
};

export default Footer;
