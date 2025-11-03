import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-gray-200 py-14">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-3xl mb-4">
          Experience excellent dining at BITEBOX
        </h3>

        <div className="mt-6">
          <a href="/reserve" className="btn-oval">
            Make a reservation today
          </a>
        </div>

        <p className="mt-8 text-sm opacity-80">
          123 Anywhere St., Any City, ST 12345<br />
          hello@Bitebox.com · (123) 456-7890 · @Bitebox
        </p>
      </div>
    </footer>
  );
}