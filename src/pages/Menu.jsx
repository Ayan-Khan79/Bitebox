import React from "react";

export default function MenuPage() {
    return (
      <section className="py-20 bg-brand-dark text-gray-200">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* PAGE HEADING */}
          <h2 className="font-display text-5xl text-center mb-12">Our Menu</h2>
  
          {/* WESTERN DISHES */}
          <MenuCategory title="Western Favorites">
            <MenuItem img="/images/menu/TrufflePasta.jpg" name="Truffle Pasta" desc="Creamy, aromatic and perfectly tossed." />
            <MenuItem img="/images/menu/pizza.jpg" name="Margherita Pizza" desc="Wood-fired, fresh basil, classic Italian." />
            <MenuItem img="/images/menu/burger.jpg" name="Classic chicken Burger" desc="Juicy patty, melted cheese, crisp veggies." />
          </MenuCategory>
  
          {/* INDIAN TASTE */}
          <MenuCategory title="Indian Taste">
            <MenuItem img="/images/menu/ButterChicken.jpg" name="Butter Chicken" desc="Rich, creamy and slow cooked." />
            <MenuItem img="/images/menu/paneertikka.jpg" name="Paneer Tikka" desc="Smoky and flavorful appetizers." />
            <MenuItem img="/images/menu/biryani.jpg" name="Hyderabadi Biryani" desc="Fragrant rice with layered spices." />
          </MenuCategory>
  
          {/* CHINESE SECTION */}
          <MenuCategory title="Chinese Specials">
            <MenuItem img="/images/menu/noodle.jpg" name="Hakka Noodles" desc="Wok tossed with veggies & soy." />
            <MenuItem img="/images/menu/manchurian.jpg" name="Manchurian" desc="Crispy  chicken balls in spicy gravy." />
            <MenuItem img="/images/menu/springrolls.jpg" name="Spring Rolls" desc="Crispy rolls with tangy filling." />
          </MenuCategory>
  
          {/* REFRESHMENTS */}
          <MenuCategory title="Refreshments">
            <MenuItem img="/images/menu/coffee.jpg" name="House Coffee" desc="Freshly brewed premium blend." />
            <MenuItem img="/images/menu/herbaltea.jpg" name="Herbal Tea" desc="Warm, soothing and aromatic." />
            <MenuItem img="/images/menu/coldbrew.jpg" name="Cold Brew" desc="Iced, bold and refreshing." />
          </MenuCategory>
  
          {/* CRAFT BREWS */}
          <MenuCategory title="Craft Brews">
            <MenuItem img="/images/menu/oakbarrelbrew.jpg" name="Oak Barrel Brew" desc="Smooth, crisp handcrafted beer." />
            <MenuItem img="/images/menu/darkleger.jpg" name="Dark Lager" desc="Deep roast with a light finish." />
            <MenuItem img="/images/menu/wheatbeer.jpg" name="Wheat Beer" desc="Light, citrusy and refreshing." />
          </MenuCategory>
  
  
          {/* GOURMET PLATING */}
          <MenuCategory title="Gourmet Plating">
            <MenuItem img="/images/menu/signaturePlate.jpg" name="Signature Plate" desc="Fine-dining experience on every plate." />
            <MenuItem img="/images/menu/chefcreation.jpg" name="Chef’s Creation" desc="Seasonal ingredients crafted into art." />
            <MenuItem img="/images/menu/platedtesting.jpg" name="Plated Tasting Set" desc="A trio of premium gourmet bites." />
          </MenuCategory>
  
        </div>
      </section>
    );
  }
  
  function MenuCategory({ title, children }) {
    return (
      <div className="mb-16">
        <h3 className="font-display text-3xl mb-6">{title}</h3>
        <div className="grid md:grid-cols-3 gap-8">{children}</div>
      </div>
    );
  }
  
  function MenuItem({ img, name, desc }) {
    return (
      <div className="bg-black/20 p-4 rounded-xl border border-white/10">
        <img src={img} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="opacity-80 text-sm">{desc}</p>
      </div>
    );
}
  
