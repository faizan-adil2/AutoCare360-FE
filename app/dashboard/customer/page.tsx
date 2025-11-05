// src/app/dashboard/customer/page.tsx
'use client';

import { useState } from 'react';
import { Car, Calendar, Clock, AlertCircle, Plus, Bell, User, LogOut, Menu, X } from 'lucide-react';

export default function CustomerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const vehicles = [
    { id: 1, name: 'Toyota Camry 2020', plate: 'ABC-123', nextService: '2025-12-15', status: 'Active' },
    { id: 2, name: 'Honda Civic 2019', plate: 'XYZ-789', nextService: '2025-11-20', status: 'Service Due' }
  ];

  const upcomingAppointments = [
    { id: 1, vehicle: 'Toyota Camry 2020', service: 'Oil Change', date: '2025-11-10', time: '10:00 AM', center: 'Downtown AutoCare' },
    { id: 2, vehicle: 'Honda Civic 2019', service: 'Brake Inspection', date: '2025-11-15', time: '2:00 PM', center: 'North AutoCare' }
  ];

  const recentServices = [
    { id: 1, vehicle: 'Toyota Camry 2020', service: 'Tire Rotation', date: '2025-10-05', cost: '$45.00', status: 'Completed' },
    { id: 2, vehicle: 'Honda Civic 2019', service: 'Engine Diagnostics', date: '2025-09-20', cost: '$120.00', status: 'Completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AutoCare</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
                <Car className="h-5 w-5 mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 mr-3" />
                My Appointments
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Car className="h-5 w-5 mr-3" />
                My Vehicles
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 mr-3" />
                Service History
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <User className="h-5 w-5 mr-3" />
                Profile
              </a>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome back, John!</h2>
            <p className="text-gray-600">Here's what's happening with your vehicles today.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">2</h3>
              <p className="text-gray-600">Active Vehicles</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">2</h3>
              <p className="text-gray-600">Upcoming Services</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
              <p className="text-gray-600">Service Due</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
              <p className="text-gray-600">Total Services</p>
            </div>
          </div>

          {/* My Vehicles */}
          <div className="bg-white rounded-xl shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">My Vehicles</h3>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <Plus className="h-5 w-5 mr-1" />
                  Add Vehicle
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
                        <p className="text-sm text-gray-600">{vehicle.plate}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        vehicle.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {vehicle.status}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Next service: {vehicle.nextService}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingAppointments.map((apt) => (
                    <div key={apt.id} className="border-l-4 border-blue-600 pl-4 py-2">
                      <h4 className="font-semibold text-gray-900">{apt.service}</h4>
                      <p className="text-sm text-gray-600">{apt.vehicle}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {apt.date} at {apt.time}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{apt.center}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All Appointments
                </button>
              </div>
            </div>

            {/* Recent Services */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Services</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentServices.map((service) => (
                    <div key={service.id} className="flex items-start justify-between pb-4 border-b border-gray-100 last:border-0">
                      <div>
                        <h4 className="font-semibold text-gray-900">{service.service}</h4>
                        <p className="text-sm text-gray-600">{service.vehicle}</p>
                        <p className="text-sm text-gray-500 mt-1">{service.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{service.cost}</p>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                          {service.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Service History
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a service?</h3>
            <p className="mb-6 text-blue-100">Book your next appointment in just a few clicks</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Service Now
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}