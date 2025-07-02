import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-ocean-blue">HAEVN</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/booking" className="text-charcoal hover:text-ocean-blue transition-colors">Book</Link>
            <Link href="/replay" className="text-charcoal hover:text-ocean-blue transition-colors">Replay</Link>
            <Link href="/crews" className="text-charcoal hover:text-ocean-blue transition-colors">Crews</Link>
            <Link href="/retail" className="text-charcoal hover:text-ocean-blue transition-colors">Shop</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="btn-secondary hidden md:block">Sign In</button>
            <button className="btn-primary">Book Now</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-ocean-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience Surfing Like Never Before</h1>
            <p className="text-lg mb-8">Book sessions, watch your surf replays, and connect with the community.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-accent">Book a Session</button>
              <button className="bg-white text-ocean-blue px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">Watch Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Haevn</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-seafoam rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book your surf sessions with real-time availability and dynamic pricing.</p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-sunshine rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">FlowState Replay</h3>
              <p className="text-gray-600">Watch multi-angle videos of your surf sessions with AI-powered highlights.</p>
            </div>
            
            <div className="card">
              <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ocean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crews & Community</h3>
              <p className="text-gray-600">Connect with other surfers, create crews, and plan group sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Catch Your Wave?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join Haevn today and transform your surfing experience with our innovative platform.</p>
          <button className="btn-primary text-lg px-8 py-3">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HAEVN</h3>
              <p className="text-gray-300">The ultimate surf experience platform.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link href="/booking" className="text-gray-300 hover:text-white transition-colors">Booking</Link></li>
                <li><Link href="/replay" className="text-gray-300 hover:text-white transition-colors">FlowState Replay</Link></li>
                <li><Link href="/crews" className="text-gray-300 hover:text-white transition-colors">Crews & Community</Link></li>
                <li><Link href="/retail" className="text-gray-300 hover:text-white transition-colors">Retail & F&B</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Haevn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
