import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({
  img = "/images/feature.jpg",
  title = "Crafted",
  caption = "Made with love",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative h-72  overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={img}
        alt="feature"
        className="absolute inset-0 w-full h-full object-cover "
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} // hidden + slightly down
        whileInView={{ opacity: 1, y: 0 }} // visible + moved up
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }} // triggers when 40% visible
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h4 className="font-display text-white text-lg mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{caption}</p>
      </motion.div>
    </motion.div>
  );
}
