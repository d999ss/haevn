import React from 'react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

export default function BookingConfirmationPage() {
  // In a real app, this would come from the API
  const bookingDetails = {
    id: 'HAEVN-25070101',
    date: 'July 1, 2025',
    time: '10:30 AM',
    experience: 'Beginner',
    duration: '90 minutes',
    location: 'Haevn Surf Park - Wave Pool 2',
    price: {
      base: 89.00,
      equipment: 15.00,
      taxes: 10.40,
      total: 114.40
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600">Your surf session has been successfully booked.</p>
        </div>
        
        {/* Booking Details Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Header */}
          <div className="bg-ocean-blue text-white p-6">
            <h2 className="text-xl font-semibold">Booking Details</h2>
            <p className="text-sm opacity-80">Confirmation #{bookingDetails.id}</p>
          </div>
          
          {/* QR Code */}
          <div className="p-6 border-b border-gray-200 flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
              <QRCodeSVG 
                value={`HAEVN-BOOKING:${bookingDetails.id}`} 
                size={180}
                level="H"
                includeMargin={true}
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Present this QR code upon arrival at the surf park
            </p>
          </div>
          
          {/* Details */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{bookingDetails.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{bookingDetails.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience Level</p>
                <p className="font-medium">{bookingDetails.experience}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{bookingDetails.duration}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">{bookingDetails.location}</p>
            </div>
            
            {/* Payment Summary */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="font-semibold mb-2">Payment Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span>${bookingDetails.price.base.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipment Rental</span>
                  <span>${bookingDetails.price.equipment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span>${bookingDetails.price.taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${bookingDetails.price.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking" className="btn-secondary text-center">
            Book Another Session
          </Link>
          <Link href="/dashboard" className="btn-primary text-center">
            Go to Dashboard
          </Link>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 bg-sand bg-opacity-50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">What to Bring</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Swimwear</li>
            <li>Towel</li>
            <li>Sunscreen</li>
            <li>Water bottle</li>
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">Arrival Instructions</h3>
          <p className="text-gray-700">
            Please arrive 15 minutes before your session to check in and prepare. 
            Your equipment will be ready for you at the rental counter.
          </p>
        </div>
      </div>
    </div>
  );
}
