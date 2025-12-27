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
    <section className="py-20 bg-base-100 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Join Us?</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <motion.div
            whileHover={{ y: -10 }}
            key={f.id}
            className="card bg-base-200 shadow-lg border-l-4 border-primary rounded-xl p-6 transition-all hover:shadow-xl"
          >
            <div className="card-body items-center text-center">
              <span className="text-6xl mb-4">{f.icon}</span>
              <h3 className="card-title text-2xl">{f.title}</h3>
              <p className="opacity-70 mt-2">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
