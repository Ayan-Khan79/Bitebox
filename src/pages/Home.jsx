import React from 'react'
import Hero from '../Components/Hero'
import FeatureCard from '../Components/FeatureCard'
import MenuStrip from '../Components/MenuStrip'
import Testimonials from '../Components/Testimonials'


export default function Home(){
return ( <>
  <div className="text-white ">
  <Hero
    title={
      <>
        <span className="text-5xl md:text-7xl block">WELCOME TO</span>
        <span className="text-7xl md:text-9xl font-bold">BITEBOX</span>
      </>
    }
    subtitle="Where great food and great drinks meet"
    video="/videos/HeroSection.mp4"     // ✅ add your video here
    ctaText="View our menu"
    ctaLink="/menu"
  />


    <div className="m-[50px]">
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-40"
        style={{ backgroundImage: "url('/images/Hero3.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-white text-5xl md:text-6xl leading-tight text-center">
            What began as a gathering of friends<br />
            grew into a local favorite
          </h2>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="font-display text-7xl mt-5 mb-6">Serving only the best</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <FeatureCard
            img={"/images/Featurecard1.jpg"}
            title={"Crafted by our master chefs"}
            caption={"Hand curated plates"}
          />

          <FeatureCard
            img={"/images/Featurecard2.jpg"}
            title={"Made with finest ingredients"}
            caption={"Source-first"}
          />

          <FeatureCard
            img={"/images/Featurecard3.jpg"}
            title={"Prepared with care and passion"}
            caption={"We care"}
          />
        </div>
      </section>

      <section className="py-20">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">
          On the Menu
        </h2>

        <div>
          <MenuStrip image={'/images/Menustrip1.jpg'} label={'gourmet plates'} loading="lazy" />
          <MenuStrip image={'/images/Menustrip2.jpg'} label={'craft brews'} loading="lazy"/>
          <MenuStrip image={'/images/Menustrip3.jpg'} label={'wine & dish pairings'}loading="lazy" />
        </div>
      </section>


      <section 
        className="relative w-full py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Favouritemenu.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>   {/* Stronger overlay */}

        {/* Content wrapper */}
        <div className="relative max-w-6xl mx-auto px-6">

          <h2 className="font-display text-4xl text-center mb-12 text-white">
            Menu Favorites
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-200">
            <div className="text-center">
              <h4 className="font-semibold text-white">Truffle Pasta</h4>
              <p className="text-sm opacity-80 text-gray-200">
                Rich, creamy pasta infused with aromatic <br /> black truffles.
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-white">Steak Frites</h4>
              <p className="text-sm opacity-80 text-gray-200">
                Perfectly grilled steak paired with classic <br /> French fries.
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold text-white">Margherita Pizza</h4>
              <p className="text-sm opacity-80 text-gray-200">
              Wood-fired crust topped with fresh <br /> mozzarella and basil.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/menu" className="btn-oval text-white">
              View our full menu
            </a>
          </div>

        </div>
      </section>



      <section className="bg-brand-muted py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-4xl">Our story</h3>
            <p className="mt-6 text-gray-300">What began as a small table surrounded by friends quickly evolved into a bustling space filled with laughter and unforgettable meals.
            Every dish we serve carries a piece of that early spirit — warmth, togetherness, and a genuine love for great food. Today, we’re proud to be a place the community calls their own.</p>
          </div>
          <div className="w-full h-64 bg-gray-800">
            <img src={'/images/Story.jpg'} alt="story" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>
      <section className="bg-brand-muted py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image on Left */}
          <div className="w-full h-70 bg-gray-800">
            <img
              src={'/images/Chef.jpg'}
              alt="head chef"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text on Right */}
          <div>
            <h3 className="font-display text-4xl">Meet Our Head Chef</h3>
            <p className="mt-6 text-gray-300">
              With decades of culinary experience, our Head Chef brings passion,
              precision, and creativity to every plate.  
              From classic comfort dishes to innovative flavors, each recipe reflects a
              deep commitment to quality and craftsmanship.  
              Their vision is simple — to turn every meal into a memorable experience.
            </p>
          </div>

        </div>
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
  </div>
  </>
)
}