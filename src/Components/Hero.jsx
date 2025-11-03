import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, video, image, ctaText, ctaLink='/' }) {
  return (
    <section className="relative">
      
      {/* VIDEO BACKGROUND */}
      {video && (
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* FALLBACK IF NO VIDEO */}
      {!video && (
        <img
          loading="lazy"
          src={image}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white h-[70vh] md:h-[85vh] flex items-center"
      >
        <div>
          <h1 className="font-display text-6xl md:text-8xl leading-tight">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg opacity-90">{subtitle}</p>
          )}
          {ctaText && (
            <a href={ctaLink} className="btn-oval mt-8 inline-block">
              {ctaText}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
