// src/app/book-service/page.tsx
'use client';

import { useState } from 'react';
import { Car, Calendar, Clock, MapPin, FileText, ArrowRight, ArrowLeft, Check } from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

export default function BookServicePage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    vehicle: '',
    serviceType: '',
    date: '',
    time: '',
    serviceCenter: '',
    notes: ''
  });

  const serviceTypes = [
    { id: 'oil-change', name: 'Oil Change', price: '$45', duration: '30 min', icon: '🛢️' },
    { id: 'brake-service', name: 'Brake Service', price: '$120', duration: '1 hour', icon: '🔧' },
    { id: 'tire-rotation', name: 'Tire Rotation', price: '$35', duration: '45 min', icon: '🔄' },
    { id: 'diagnostics', name: 'Engine Diagnostics', price: '$100', duration: '1 hour', icon: '🔍' },
    { id: 'tune-up', name: 'Full Tune-up', price: '$250', duration: '2 hours', icon: '⚙️' },
    { id: 'inspection', name: 'Safety Inspection', price: '$75', duration: '45 min', icon: '✓' }
  ];

  const vehicles = [
    { id: '1', name: 'Toyota Camry 2020', plate: 'ABC-123' },
    { id: '2', name: 'Honda Civic 2019', plate: 'XYZ-789' }
  ];

  const serviceCenters = [
    { id: '1', name: 'Downtown AutoCare', address: '123 Main St, City', distance: '2.3 miles', rating: 4.8 },
    { id: '2', name: 'North AutoCare', address: '456 Oak Ave, City', distance: '3.1 miles', rating: 4.6 },
    { id: '3', name: 'East Side Service', address: '789 Elm Rd, City', distance: '4.5 miles', rating: 4.7 }
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSubmit = () => {
    console.log('Booking:', formData);
    // Handle booking submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Service</h1>
          <p className="text-gray-600">Schedule your vehicle maintenance in 4 easy steps</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step ? <Check className="h-5 w-5" /> : step}
                  </div>
                  <span className="text-xs mt-2 font-medium text-gray-600 hidden sm:block">
                    {step === 1 && 'Vehicle'}
                    {step === 2 && 'Service'}
                    {step === 3 && 'Date & Time'}
                    {step === 4 && 'Confirm'}
                  </span>
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
          {/* Step 1: Select Vehicle */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Vehicle</h2>
              <div className="space-y-4">
                {vehicles.map((vehicle) => (
                  <label
                    key={vehicle.id}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.vehicle === vehicle.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="vehicle"
                      value={vehicle.id}
                      checked={formData.vehicle === vehicle.id}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <Car className="h-8 w-8 text-gray-600 mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">{vehicle.name}</p>
                        <p className="text-sm text-gray-600">{vehicle.plate}</p>
                      </div>
                    </div>
                  </label>
                ))}
                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  + Add New Vehicle
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Service */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Service Type</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceTypes.map((service) => (
                  <label
                    key={service.id}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.serviceType === service.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={service.id}
                      checked={formData.serviceType === service.id}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="sr-only"
                    />
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{service.name}</p>
                          <p className="text-sm text-gray-600 mt-1">{service.duration}</p>
                        </div>
                      </div>
                      <p className="font-bold text-blue-600">{service.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Date, Time & Location */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Date, Time & Location</h2>
              
              {/* Service Center */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Service Center
                </label>
                <div className="space-y-3">
                  {serviceCenters.map((center) => (
                    <label
                      key={center.id}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.serviceCenter === center.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceCenter"
                        value={center.id}
                        checked={formData.serviceCenter === center.id}
                        onChange={(e) => setFormData({ ...formData, serviceCenter: e.target.value })}
                        className="sr-only"
                      />
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{center.name}</p>
                          <p className="text-sm text-gray-600 mt-1 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {center.address}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">{center.distance}</p>
                          <p className="text-sm font-medium text-yellow-600">★ {center.rating}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="mb-6">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                        formData.time === time
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Booking</h2>
              
              <div className="space-y-6">
                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="font-medium text-gray-900">
                        {vehicles.find(v => v.id === formData.vehicle)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium text-gray-900">
                        {serviceTypes.find(s => s.id === formData.serviceType)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date & Time:</span>
                      <span className="font-medium text-gray-900">
                        {formData.date} at {formData.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium text-gray-900">
                        {serviceCenters.find(c => c.id === formData.serviceCenter)?.name}
                      </span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="font-bold text-blue-600 text-lg">
                        {serviceTypes.find(s => s.id === formData.serviceType)?.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any specific concerns or requests..."
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the cancellation policy and understand that a 24-hour notice is required for cancellations
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Previous
            </button>
          )}
          <div className="ml-auto">
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.vehicle) ||
                  (currentStep === 2 && !formData.serviceType) ||
                  (currentStep === 3 && (!formData.date || !formData.time || !formData.serviceCenter))
                }
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
              >
                <Check className="h-5 w-5 mr-2" />
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}