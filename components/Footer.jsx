import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#33353F]">
      <div className="mb-14 w-full container mx-auto p-4 flex justify-between items-center text-slate-400">
        <span className="">Kevin Kaslana</span>
        <div className="flex space-x-4">
          <p>Copyright &copy; All rights reserved</p>
          <a
            href="https://KevinKaslana.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit My Site
          </a>
          <a
            href="https://github.com/Hobine0123/portfoliochange"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
