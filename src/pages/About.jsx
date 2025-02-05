import React from "react";
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-2"
    >
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          About Sky Share
        </h2>
        <p className="text-lg text-white mt-4 max-w-3xl mx-auto opacity-90">
          Sky Share allows screen-sharing solution that enables instant collaboration with zero downloads or logins. Fast, secure, and effortless—experience the next level of remote communication.
        </p>
        <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold">Instant Access</h3>
          <p className="mt-2 opacity-90">
            No sign-ups, no installations Required. Just share your screen with a single 
          click and collaborate instantly with joining code and qrcode scanning.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold">Secure Sharing</h3>
          <p className="mt-2 opacity-90">
            Your privacy is our priority. Sky Share uses end-to-end encryption, 
          ensuring that your data and shared content remain protected at all times.
          </p>
        </div>

        <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-bold">Multi-Device Support</h3>
          <p className="mt-2 opacity-90">
            Whether you're on a desktop, tablet, or mobile device, Sky Share provides 
          a seamless sharing experience with High quality Video Sharing.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-4xl font-bold text-white">Start Sharing Instantly</h3>
        <p className="mt-4 text-lg text-white opacity-90">
          No need to install apps or create accounts. Simply start sharing your screen 
          in seconds and enjoy a hassle-free collaboration experience.
        </p>
        <div className="mt-5">
          <Link 
            to="/" 
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center text-white text-lg">
        <a
          className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 p-2 rounded"
          href="https://github.com/UjjwalSaini07"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
          {" "}by Ujjwal
        </a>
      </div>
    </section>
  );
}
