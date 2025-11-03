import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'


import Home from './pages/Home'
import Menu from './pages/Menu'
import Story from './pages/OurStory'
import Reserve from './pages/Reserve'
import Reviews from './pages/Reviews'


export default function App(){
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/menu" element={<Menu/>} />
<Route path="/story" element={<Story/>} />
<Route path="/reserve" element={<Reserve/>} />
<Route path="/reviews" element={<Reviews/>} />
</Routes>
</main>
<Footer />
</div>
)
}