import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="
        hero 
        min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] 
        bg-base-200 relative
      "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-sm"></div>

      <div className="hero-content text-center text-white relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Heading */}
          <h1
            className="
              mb-4 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-extrabold uppercase tracking-tight leading-tight
            "
          >
            Better World <span className="text-success">Together</span>
          </h1>

          {/* Description */}
          <p
            className="
              mb-6 
              text-sm sm:text-base md:text-lg
              opacity-90
            "
          >
            Join the movement of social change. Create, manage, and participate
            in social development events in your local community.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="
                btn btn-primary btn-md sm:btn-lg
                shadow-lg hover:scale-101 transition-transform
                w-full sm:w-auto
              "
            >
              Explore Events
            </button>

            <button
              className="
                btn btn-outline btn-info btn-md sm:btn-lg
                shadow-lg hover:scale-101 transition-transform
                w-full sm:w-auto
              "
            >
              Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
