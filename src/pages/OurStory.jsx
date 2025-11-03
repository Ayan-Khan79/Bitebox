import React from 'react'
import FeatureCard from '../Components/FeatureCard'


export default function OurStory(){
return (
    <div className="text-white">
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
            <div>
                <h1 className="font-display text-5xl mb-6">Our Story</h1>
                <p className="text-gray-300">About the restaurant. Give a brief history and capture how the restaurant became a favorite. Mention key achievements or notable features to attract potential customers.</p>
            </div>
            <div className="w-full h-80 bg-gray-800"><img src={'/images/story-hero.jpg'} alt="story" className="w-full h-full object-cover"/></div>
        </section>


        <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="w-full h-80 bg-gray-800"><img src={'/images/head-chef.jpg'} alt="chef" className="w-full h-full object-cover"/></div>
                <div>
                    <h2 className="font-display text-3xl">Head Chef</h2>
                    <p className="mt-6 text-gray-300">Chef's name and culinary background. Highlight their signature style, standout achievements, and training.</p>
                </div>
            </div>
        </section>


        <section className="bg-brand-muted py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="font-display text-4xl mb-8">In the News</h3>
                <div className="bg-gray-900 p-8">
                    <p className="text-sm">News write-ups offer a great way to let clients know about new products and services, events, awards, and more.</p>
                    <ul className="mt-6 space-y-6 text-sm">
                    <li>– THE FOOD HUB</li>
                    <li>– ONLINE CUPBOARD</li>
                    <li>– EAT THE WORLD</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
)
}