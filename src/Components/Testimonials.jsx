import React from 'react'
import { motion } from 'framer-motion'


export default function Testimonials({items = []}){
return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
            <h2 className="font-display text-4xl mb-6">From customers</h2>
            <div className="space-y-8">
                {items.map((t,i)=> (
                <motion.blockquote key={i} initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}} className="bg-gray-900 p-6">
                <p className="text-sm mb-3">{t.quote}</p>
                <cite className="block font-semibold">– {t.name}</cite>
                </motion.blockquote>
                ))}
            </div>
        </div>
        <div className="order-first md:order-last">
            <img src="/images/Testomonial.jpg" alt="testimonial" className="w-full h-96 object-cover"/>
        </div>
    </section>
)
}