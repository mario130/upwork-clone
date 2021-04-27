import React, { useState } from "react";

const Footer = () => {
  const [footerLists] = useState([
    ["About Us", "Feedback", "Community"],
    ["Trust, Safety & Security", "Help & Support", "Upwork Foundation"],
    ["Terms of Service", "Privacy Policy", "Accessibility"],
    ["Desktop App", "Cookie Policy", "Enterprise Solutions"],
  ]);

  return (
    <footer className="bg-complementary lg:mt-6">
      <div className="container mx-auto p-4 lg:flex justify-between max-w-5xl border-b border-navBorder">
        {footerLists.map((list, i) => (
          <ul key={i} className="my-4 text-white text-sm">
            {list.map((item, j) => (
              <li key={j} className="my-2">{item}</li>
            ))}
          </ul>
        ))}
      </div>

      <div className="text-center text-white py-5 space-y-2">
        <h4 className="text-sm">&copy; 2021 Upwork</h4>
        <h5 className="text-sm text-gray-300">
          Cloned by Mario, Ahmed, Peter, Mohamed, Islam
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
