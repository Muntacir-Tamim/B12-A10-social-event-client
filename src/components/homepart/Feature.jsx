import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Event Management",
      desc: "Easily create and track your social activities.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Community Network",
      desc: "Connect with like-minded volunteers nearby.",
      icon: "🤝",
    },
    {
      id: 3,
      title: "Real-time Tracking",
      desc: "Keep track of your joined and upcoming events.",
      icon: "📊",
    },
  ];

  return (
    <section
      className="
        py-12 sm:py-16 lg:py-20
        bg-base-100
        w-full lg:w-[1250px]
        mx-auto
        px-4 sm:px-6
      "
    >
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold mb-3 sm:mb-4
          "
        >
          Why Join Us?
        </h2>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((f) => (
          <motion.div
            whileHover={{ y: -10 }}
            key={f.id}
            className="
              card bg-base-200 shadow-md lg:shadow-lg
              border-l-4 border-primary
              rounded-xl p-5 sm:p-6
              transition-all hover:shadow-xl
            "
          >
            <div className="card-body items-center text-center p-0">
              <span className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">
                {f.icon}
              </span>

              <h3 className="card-title text-lg sm:text-xl lg:text-2xl">
                {f.title}
              </h3>

              <p className="opacity-70 mt-2 text-sm sm:text-base">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
