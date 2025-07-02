import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-sticky">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-ocean-blue">HAEVN</Link>
        
        {/* Mobile menu button */}
        {isMenuOpen ? (
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        ) : (
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/booking" className="text-charcoal hover:text-ocean-blue transition-colors">Book</Link>
          <Link href="/replay" className="text-charcoal hover:text-ocean-blue transition-colors">Replay</Link>
          <Link href="/crews" className="text-charcoal hover:text-ocean-blue transition-colors">Crews</Link>
          <Link href="/retail" className="text-charcoal hover:text-ocean-blue transition-colors">Shop</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="btn-secondary" aria-label="Sign In">Sign In</button>
          <Link href="/booking" className="btn-primary">Book Now</Link>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-dropdown">
            <nav className="flex flex-col p-4">
              <Link 
                href="/booking" 
                className="py-2 text-charcoal hover:text-ocean-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book
              </Link>
              <Link 
                href="/replay" 
                className="py-2 text-charcoal hover:text-ocean-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Replay
              </Link>
              <Link 
                href="/crews" 
                className="py-2 text-charcoal hover:text-ocean-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Crews
              </Link>
              <Link 
                href="/retail" 
                className="py-2 text-charcoal hover:text-ocean-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <div className="flex flex-col space-y-2 mt-4">
                <button 
                  className="btn-secondary w-full"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Sign In"
                >
                  Sign In
                </button>
                <Link 
                  href="/booking" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
