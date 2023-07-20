import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className=" bg-white border-t">
      <div className="mx-auto py-10"></div>
      <p className="text-center text-ts text-black">
        &copy; {year == 2023 ? "2023" : `2023 - ${year}`} Edokan - All Right
        Reserved
      </p>
    </div>
  );
};

export default Footer;
