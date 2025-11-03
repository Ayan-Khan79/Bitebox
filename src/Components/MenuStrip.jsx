import React from 'react'
import { motion } from 'framer-motion'

export default function MenuStrip({
  image = '/images/menu-strip.jpg',
  label = 'gourmet plates'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full border-y border-white/10"
    >
      <div className="relative h-44 md:h-60 lg:h-80">

        {/* Background Image */}
        <img
          src={image}
          alt="strip"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center Label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm text-white text-sm">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
