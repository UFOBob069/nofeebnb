'use client';

import React from 'react';
import SignupForm from './components/SignupForm';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">NoFeesBnB</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#why" className="text-gray-600 hover:text-blue-600">Why Us</a>
              <a href="#how" className="text-gray-600 hover:text-blue-600">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Early Access
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 text-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero.png")',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlend: 'overlay'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-white py-16">
          <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-4">
            Now in Early Access
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Fee-Free Way to Rent Vacation Homes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Direct bookings. No service fees. No commission fees. Just you and your perfect stay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#signup"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Join the Waitlist
            </a>
            <a 
              href="#how"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-8 text-white">
            <span className="inline-flex items-center">
              <span className="mr-2">✓</span> No booking fees
            </span>
            <span className="inline-flex items-center mx-4">
              <span className="mr-2">✓</span> Direct communication
            </span>
            <span className="inline-flex items-center">
              <span className="mr-2">✓</span> Verified properties
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Direct Booking",
                description: "Connect and book directly with property owners - no middleman"
              },
              {
                icon: "💬",
                title: "Direct Communication",
                description: "Chat directly with hosts before and during your stay"
              },
              {
                icon: "💰",
                title: "No Hidden Fees",
                description: "What you see is what you pay - zero booking fees"
              },
              {
                icon: "📅",
                title: "Flexible Bookings",
                description: "Work directly with hosts on dates and arrangements"
              },
              {
                icon: "⭐",
                title: "Verified Reviews",
                description: "Authentic reviews from real guests who have stayed at the property"
              },
              {
                icon: "🌟",
                title: "Quality Listings",
                description: "Curated selection of high-quality vacation rentals"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{feature.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="py-16 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Get Early Access
            </h2>
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Early Access Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join now to lock in exclusive founding member benefits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎉",
                title: "3 Months Free",
                description: "First 100 hosts get 3 months subscription-free"
              },
              {
                icon: "⭐",
                title: "Featured Listings",
                description: "Early access properties get premium placement"
              },
              {
                icon: "💎",
                title: "Founding Member Badge",
                description: "Permanent status as an original NoFeesBnB member"
              },
              {
                icon: "🎯",
                title: "Priority Support",
                description: "Direct line to our founding team"
              },
              {
                icon: "📊",
                title: "Market Insights",
                description: "Early access to booking trends and analytics"
              },
              {
                icon: "🔔",
                title: "First Access",
                description: "Be first to try new features and tools"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#signup"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Claim Your Early Access Benefits
            </a>
          </div>
        </div>
      </section>

      {/* Savings Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            See How Much You Save
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Traditional Platforms</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>$200/night rate</p>
                    <p>+ 15% service fee</p>
                    <p>+ 3% host fee</p>
                    <div className="text-xl font-bold text-gray-900 mt-4">
                      $236/night total
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="border-t-2 border-gray-200 w-full"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-2xl">vs</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">NoFeesBnB</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>$200/night rate</p>
                    <p>+ $0 service fee</p>
                    <p>+ $0 host fee</p>
                    <div className="text-xl font-bold text-blue-600 mt-4">
                      $200/night total
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <div className="text-2xl font-bold text-green-600 mb-4">
                  Save up to 18% on every booking
                </div>
                <a 
                  href="#signup"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Start Saving Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Early Access Members Love NoFeesBnB
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "As a host, I love being able to connect directly with guests. The subscription model is so much better than paying per booking.",
                author: "Sarah K.",
                role: "Vacation Home Owner",
                location: "Miami, FL"
              },
              {
                quote: "Finally! A platform that does not charge ridiculous service fees. I saved over $300 on my last vacation booking.",
                author: "Michael R.",
                role: "Frequent Traveler",
                location: "Boston, MA"
              },
              {
                quote: "Direct communication with hosts makes planning so much easier. Plus, the savings without fees are incredible.",
                author: "Lisa M.",
                role: "Family Traveler",
                location: "Austin, TX"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-2xl text-blue-600 mb-4">&ldquo;</div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="#signup"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How does direct booking work?",
                a: "Once you find a property you like, you will communicate directly with the host to arrange your stay. No middleman, no extra fees - just straightforward booking between you and the host."
              },
              {
                q: "Is it safe to book directly with hosts?",
                a: "All our hosts are verified, and we provide a messaging platform for secure communication. We recommend following our booking guidelines and keeping all communication on-platform."
              },
              {
                q: "What is the host subscription fee?",
                a: "Hosts pay a low monthly subscription fee of $9.99 per property. No additional fees or commissions on bookings - you keep 100% of what you earn."
              },
              {
                q: "Are there any hidden fees?",
                a: "Absolutely not! We believe in complete transparency. Travelers pay zero booking fees, and hosts only pay their subscription fee. The price you see is the price you pay."
              },
              {
                q: "How do I get early access?",
                a: "Sign up using our waitlist form above. Early access members get exclusive benefits including featured listings and founding member status."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="#signup"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NoFeesBnB</h3>
              <p className="text-gray-400">
                The fee-free vacation rental platform connecting hosts and travelers directly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#why" className="text-gray-400 hover:text-white">Why Us</a></li>
                <li><a href="#how" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#signup" className="text-gray-400 hover:text-white">Get Early Access</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Hosts</h3>
              <ul className="space-y-2">
                <li><a href="#signup" className="text-gray-400 hover:text-white">Start Hosting</a></li>
                <li><a href="#how" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Subscription Details</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Early Access Benefits</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Travelers</h3>
              <ul className="space-y-2">
                <li><a href="#signup" className="text-gray-400 hover:text-white">Join Waitlist</a></li>
                <li><a href="#how" className="text-gray-400 hover:text-white">How to Book</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Areas</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} NoFeesBnB - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
