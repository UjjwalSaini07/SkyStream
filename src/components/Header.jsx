import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/SkyShare-Logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentPath = window.location.pathname;

  return (
    <div className="flex justify-between items-center p-7 sticky top-0 bg-black z-50">
      <a href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}>
          <img
            src={logo}
            alt="SkyShare-Logo"
            style={{ width: "30px", height: "auto" }}
          />
          <h1 className="text-lg md:text-xl font-semibold text-white sm:ml-2">
            SkyStream<span className="text-blue-500">.</span>
          </h1>
        </div>
      </a>

      <div className="hidden md:flex justify-center items-center gap-7 flex-1 sm:mr-14">
        {[
          { name: "Home", path: "/" },
          { name: "ChatRoom", path: "/chat" },
          { name: "About", path: "/about" },
          { name: "Contact Us", path: "/contact" },
          { name: "Help Center", path: "/help-center" },
        ].map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`text-sm font-semibold ${
              currentPath === link.path
                ? "text-white"
                : "text-gray-400 hover:text-white"
            } transition`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile*/}
      <div ref={dropdownRef} className="relative md:hidden">
        <button
          className="text-gray-400 text-2xl cursor-pointer focus:outline-none"
          onClick={toggleDropdown}
        >
          <i className="bi bi-list"></i>
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-50 p-4 w-48">
            <ul className="list-none space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "ChatRoom", path: "/chat" },
                { name: "About", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Help Center", path: "/help-center" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className={`block text-base ${
                      currentPath === link.path
                        ? "text-blue-500"
                        : "text-black hover:text-blue-500"
                    } transition`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div ref={dropdownRef} className="relative hidden md:inline-block">
        <button
          className="text-gray-400 hover:text-blue-400 text-2xl cursor-pointer flex items-center focus:outline-none"
          onClick={toggleDropdown}
        >
          <i className="bi bi-person-fill mr-2 transition-transform transform hover:scale-110"></i>
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-50 p-4 w-48">
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="/contact"
                  className="block text-black text-base hover:text-blue-500 transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/help-center"
                  className="block text-black text-base hover:text-blue-500 transition"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
