import React from "react";

const ComingSoon = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#b2f7ef] via-[#5fd6c2] to-[#2cb5a0] text-white font-sans overflow-hidden">

      {/* Floating Circle */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full -top-24 -left-24 blur-3xl animate-pulse"></div>

      {/* Black Content Box */}
      <div className="z-10 backdrop-blur-xl bg-black/80 border border-white/10 p-10 rounded-3xl shadow-2xl text-center max-w-xl animate-fadeIn">
        
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/logo.png"
            alt="Wowpio Logo"
            className="mx-auto w-24 h-24 object-contain drop-shadow-md"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-white">
          Something Refreshing is on the Way 💧
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/80 mb-6">
          Stay hydrated. Stay tuned. Wowpio is launching soon with pure innovation in every drop.
        </p>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-white text-[#2cb5a0] font-semibold rounded-full shadow-md hover:bg-[#e0fffa] transition duration-300">
          Get Notified
        </button>

        {/* Footer */}
        <div className="mt-8 text-sm opacity-80 text-white">
          <p>© 2025 Wowpio. All rights reserved.</p>
          <p className="mt-1">
            Built with ❤️ by{" "}
            <a
              href="https://infysofttech.growwithus.co.in/"
              className="underline hover:text-teal-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              InfySoft Tech
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
