import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function Navbar(){
const loc = useLocation()
return (
<motion.header initial={{opacity:0}} animate={{opacity:1}}  className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display tracking-tight">BITEBOX</Link>
        <nav className="space-x-6 hidden md:flex items-center text-sm">
            <NavLink to="/" current={loc.pathname === '/'}>Home</NavLink>
            <NavLink to="/menu" current={loc.pathname === '/menu'}>Menu</NavLink>
            <NavLink to="/reserve" current={loc.pathname === '/reserve'}>Reserve</NavLink>
            <NavLink to="/reviews" current={loc.pathname === '/reviews'}>Reviews</NavLink>
        </nav>
    </div>
</motion.header>
)
}


function NavLink({to, children, current}){
return (
<Link to={to} className={`relative px-1 py-2 ${current ? 'text-white' : 'text-gray-300'}`}>
{children}
</Link>
)
}