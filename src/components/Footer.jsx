import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className=" screen-max-wdith">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:
            <span className="underline text-blue"> Find an Apple Store </span>
            or
            <span className="underline text-blue">
              {" "}
              another retailer near you{" "}
            </span>
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966
          </p>
        </div>
        <div className=" bg-neutral-700 my-5 h-[1px] w-full"></div>
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Made by Vighnesh Mandavkar.
          </p>
          <div className="flex">
            {footerLinks.map((link) => (
              <p
                key={link}
                className="font-semibold text-gray text-xs underline m-1"
              >
                {" "}
                {link}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
