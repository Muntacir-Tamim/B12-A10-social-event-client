import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://i.ibb.co.com/pj5Y6KQv/treeplantation04.jpg ",
    "https://i.ibb.co.com/tw0NxHXX/Blood-Donation-Camps.jpg ",
    "https://i.ibb.co.com/QjTPHhwW/Youth-Leadership-Seminars.jpg ",
    "https://i.ibb.co.com/MkR8qkQd/Food-Distribution-Drives.jpg ",
    "https://i.ibb.co.com/zW968X4b/Community-Sports-Events.jpg ",
    "https://i.ibb.co.com/MygL71C5/Community-Clean-Up-Drives.jpg ",
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Impact Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt="Event"
                className="hover:scale-110 transition-transform duration-500 w-full h-55 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
