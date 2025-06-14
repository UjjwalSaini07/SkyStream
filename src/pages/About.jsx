import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-2"
    >
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

      <div className="text-center mb-12">
        <motion.div
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
        >
        <h2 style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mt-4">
          About Sky Stream
        </h2>
        </motion.div>
        <motion.div
          variants={textVariant(0.8)}
          initial="hidden"
          animate="show"
        >
        <p style={{ fontFamily: 'Ancizar Serif, sans-serif' }} className="text-lg text-white mt-4 max-w-3xl mx-auto opacity-90">
          SkyStream enables real-time communication with WebRTC-powered tools for seamless collaboration. Experience secure interactions, instant connections, and enhanced productivity—perfect for teams and developers looking to streamline teamwork!
        </p>
        </motion.div>
        <motion.div
          variants={textVariant(1)}
          initial="hidden"
          animate="show"
        >
        <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        <motion.div
          variants={textVariant(1.2)}
          initial="hidden"
          animate="show"
        >
        <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <motion.div
            variants={textVariant(1.7)}
            initial="hidden"
            animate="show"
          >
          <h3 style={{ fontFamily: 'Cormorant Upright, sans-serif' }} className="text-3xl font-bold">Instant Access</h3>
          </motion.div>
          <motion.div
            variants={textVariant(2)}
            initial="hidden"
            animate="show"
          >
          <p style={{ fontFamily: 'Ancizar Serif, sans-serif' }} className="mt-2 opacity-90">
            No sign-ups or installations needed. Connect instantly via WebRTC with a single click using a joining code, QR code scan, and seamless real-time collaboration.
          </p>
          </motion.div>
        </div>
        </motion.div>

        <motion.div
          variants={textVariant(2.4)}
          initial="hidden"
          animate="show"
        >
        <div className="p-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <motion.div
            variants={textVariant(2.9)}
            initial="hidden"
            animate="show"
          >
          <h3 style={{ fontFamily: 'Cormorant Upright, sans-serif' }} className="text-3xl font-bold">Secure Sharing</h3>
          </motion.div>
          <motion.div
            variants={textVariant(3.4)}
            initial="hidden"
            animate="show"
          >
          <p style={{ fontFamily: 'Ancizar Serif, sans-serif' }} className="mt-2 opacity-90">
            Your privacy is our priority. Sky Share uses end-to-end encryption, 
          ensuring that your data and shared content remain protected at all times.
          </p>
          </motion.div>
        </div>
        </motion.div>

        <motion.div
          variants={textVariant(3.9)}
          initial="hidden"
          animate="show"
        >
        <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105">
          <motion.div
            variants={textVariant(4.4)}
            initial="hidden"
            animate="show"
          >
          <h3 style={{ fontFamily: 'Cormorant Upright, sans-serif' }} className="text-2xl font-bold">Multi-Device Support</h3>
          </motion.div>
          <motion.div
            variants={textVariant(5)}
            initial="hidden"
            animate="show"
          >
          <p style={{ fontFamily: 'Ancizar Serif, sans-serif' }} className="mt-2 opacity-90">
            Whether you're on a desktop, tablet, or mobile device, Sky Share provides a seamless, high-quality, secure, and reliable real-time collaboration experience.
          </p>
          </motion.div>
        </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <motion.div
          variants={textVariant(5.6)}
          initial="hidden"
          animate="show"
        >
        <h3 style={{ fontFamily: 'Almendra, sans-serif' }} className="text-4xl font-bold text-white">Start Sharing Instantly</h3>
        </motion.div>
        <motion.div
          variants={textVariant(6.1)}
          initial="hidden"
          animate="show"
        >
        <p style={{ fontFamily: 'Ancizar Serif, sans-serif' }} className="mt-4 text-lg text-white opacity-90">
          No downloads or sign-ups required—connect instantly and collaborate effortlessly with secure, real-time communication, making teamwork smoother, faster, and more productive than ever before.
        </p>
        </motion.div>
        <motion.div
          variants={textVariant(6.6)}
          initial="hidden"
          animate="show"
        >
        <div className="mt-5">
          <Link 
            to="/"
            style={{ fontFamily: 'Almendra, sans-serif' }}
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center text-white text-lg hidden md:block">
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
