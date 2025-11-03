import React from 'react'
import Testimonials from '../Components/Testimonials'


export default function Reviews(){
return (
    <div className="text-white">
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
            <h1 className="font-display text-6xl mb-4">From Customers</h1>
            <p className="text-gray-300 mb-8">Real quotes from our guests.</p>
        </section>

        <Testimonials 
            items={[
            {
                quote: "A beautiful blend of flavors and presentation. Every plate felt crafted with care. Easily one of the finest dining experiences I’ve had this year.",
                name: "Rahul Mehta"
            },
            {
                quote: "The ambience is warm, the staff is welcoming, and the food is extraordinary. Their signature dishes are a must-try — truly unforgettable.",
                name: "Aisha Kapoor"
            },
            {
                quote: "Perfect place for celebrations and date nights. The wine pairing was exceptional and the service made the evening feel special.",
                name: "Karan & Riya"
            }
            ]}
        />
    </div>
)
}