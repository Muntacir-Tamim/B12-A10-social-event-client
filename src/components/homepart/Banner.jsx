import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-base-200 relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for professional look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-sm"></div>

      <div className="hero-content text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="mb-5 text-6xl font-extrabold uppercase tracking-tight leading-tight">
            Better World <span className="text-success">Together</span>
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Join the movement of social change. Create, manage, and participate
            in social development events in your local community.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform">
              Explore Events
            </button>
            <button className="btn btn-outline btn-info btn-lg shadow-lg hover:scale-103 transition-transform">
              Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
