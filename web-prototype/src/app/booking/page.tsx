import React from 'react';
import Link from 'next/link';

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Book Your Surf Session</h1>
        <p className="text-lg text-gray-600">Select a date, time, and experience level to reserve your spot.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Calendar and Time Selection */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
            
            {/* Month Navigation */}
            <div className="flex justify-between items-center mb-4">
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Previous month">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-lg font-medium">July 2025</h3>
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Next month">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Calendar Grid */}
            <div className="mb-6">
              {/* Days of week */}
              <div className="grid grid-cols-7 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar dates */}
              <div className="grid grid-cols-7 gap-1">
                {/* Previous month dates (grayed out) */}
                {[28, 29, 30].map((date) => (
                  <div key={`prev-${date}`} className="aspect-square flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md cursor-not-allowed">
                    {date}
                  </div>
                ))}
                
                {/* Current month dates */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                  // Highlight today
                  const isToday = date === 1;
                  // Some dates have limited availability
                  const hasLimitedAvailability = [4, 11, 18, 25].includes(date);
                  // Some dates are fully booked
                  const isFullyBooked = [6, 13, 20, 27].includes(date);
                  
                  return (
                    <div 
                      key={date}
                      className={`
                        aspect-square flex flex-col items-center justify-center rounded-md cursor-pointer
                        ${isToday ? 'bg-ocean-blue text-white' : ''}
                        ${hasLimitedAvailability ? 'bg-sunshine bg-opacity-20' : ''}
                        ${isFullyBooked ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}
                      `}
                    >
                      <span>{date}</span>
                      {hasLimitedAvailability && (
                        <span className="text-xs text-warning font-medium">Limited</span>
                      )}
                      {isFullyBooked && (
                        <span className="text-xs text-gray-400">Full</span>
                      )}
                    </div>
                  );
                })}
                
                {/* Next month dates (grayed out) */}
                {[1, 2, 3].map((date) => (
                  <div key={`next-${date}`} className="aspect-square flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md cursor-not-allowed">
                    {date}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Time Slots */}
            <div>
              <h3 className="text-lg font-medium mb-3">Available Times for July 1</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM', '6:00 PM'].map((time, index) => {
                  const isSelected = index === 1;
                  const isSoldOut = index === 3 || index === 5;
                  
                  return (
                    <button
                      key={time}
                      disabled={isSoldOut}
                      className={`
                        py-2 px-3 rounded-md text-center
                        ${isSelected ? 'bg-ocean-blue text-white' : ''}
                        ${isSoldOut ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}
                      `}
                    >
                      {time}
                      {isSoldOut && <span className="block text-xs">Sold Out</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Experience Level Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Select Experience Level</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: 'Beginner', description: 'First time or still learning basics', price: '$89' },
                { name: 'Intermediate', description: 'Comfortable paddling and catching waves', price: '$109' },
                { name: 'Advanced', description: 'Skilled surfer looking to improve technique', price: '$129' }
              ].map((level, index) => {
                const isSelected = index === 0;
                
                return (
                  <div 
                    key={level.name}
                    className={`
                      border rounded-lg p-4 cursor-pointer
                      ${isSelected ? 'border-ocean-blue bg-ocean-blue bg-opacity-5' : 'border-gray-200 hover:border-ocean-blue'}
                    `}
                  >
                    <h3 className="font-semibold">{level.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{level.description}</p>
                    <p className="font-medium text-ocean-blue">{level.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Booking Summary */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-medium">July 1, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time</span>
                <span className="font-medium">10:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Experience</span>
                <span className="font-medium">Beginner</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">90 minutes</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-medium">$89.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipment Rental</span>
                  <span className="font-medium">$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-medium">$10.40</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$114.40</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="/booking/confirmation" 
              className="btn-primary w-full text-center py-3 mb-3"
            >
              Confirm Booking
            </Link>
            
            <p className="text-xs text-gray-500 text-center">
              By confirming, you agree to our cancellation policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
