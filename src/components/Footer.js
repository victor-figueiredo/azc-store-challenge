import React from "react";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            className="hover:text-[#040000] hover:underline"
            href="https://linkedin.com/in/vcfo"
            target="_blank"
          >
            <div className="navbar_icon_wrapper icon">
              <Linkedin />
            </div>
          </Link>
          <Link
            className="hover:text-[#040000] hover:underline"
            href="https://github.com/victor-figueiredo"
            target="_blank"
          >
            <div className="navbar_icon_wrapper icon">
              <Github />
            </div>
          </Link>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            AZC Store &copy; 2024 Developed by{" "}
            <Link
              className="hover:text-[#040000] hover:underline"
              href="https://victorfigueiredo.vercel.app"
            >
              Victor Figueiredo
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
