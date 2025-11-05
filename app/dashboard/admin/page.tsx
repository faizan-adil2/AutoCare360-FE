// src/app/dashboard/admin/page.tsx
'use client';

import { useState } from 'react';
import { 
  Users, Car, DollarSign, TrendingUp, Calendar, 
  Settings, LogOut, Menu, X, Bell, Search,
  BarChart3, PieChart, Building, Wrench 
} from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: 'Total Revenue', value: '$124,500', change: '+12.5%', icon: DollarSign, color: 'bg-green-100 text-green-600' },
    { label: 'Active Users', value: '1,234', change: '+8.2%', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Service Centers', value: '15', change: '+2', icon: Building, color: 'bg-purple-100 text-purple-600' },
    { label: 'Services Today', value: '47', change: '+5.3%', icon: Wrench, color: 'bg-orange-100 text-orange-600' }
  ];

  const recentBookings = [
    { id: 1, customer: 'John Doe', vehicle: 'Toyota Camry', service: 'Oil Change', center: 'Downtown', status: 'Completed', amount: '$45' },
    { id: 2, customer: 'Jane Smith', vehicle: 'Honda Civic', service: 'Brake Service', center: 'North', status: 'In Progress', amount: '$120' },
    { id: 3, customer: 'Mike Johnson', vehicle: 'Ford F-150', service: 'Tire Rotation', center: 'East', status: 'Scheduled', amount: '$35' },
    { id: 4, customer: 'Sarah Williams', vehicle: 'BMW X5', service: 'Full Service', center: 'Downtown', status: 'Scheduled', amount: '$250' }
  ];

  const serviceCenters = [
    { name: 'Downtown AutoCare', bookings: 145, revenue: '$18,500', rating: 4.8, status: 'Active' },
    { name: 'North AutoCare', bookings: 132, revenue: '$16,200', rating: 4.6, status: 'Active' },
    { name: 'East Side Service', bookings: 98, revenue: '$12,300', rating: 4.7, status: 'Active' }
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
                <BarChart3 className="h-5 w-5 mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 mr-3" />
                User Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Building className="h-5 w-5 mr-3" />
                Service Centers
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 mr-3" />
                Bookings
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <DollarSign className="h-5 w-5 mr-3" />
                Revenue
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <PieChart className="h-5 w-5 mr-3" />
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Settings className="h-5 w-5 mr-3" />
                Settings
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
            
            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users, bookings, centers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  AD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
            <p className="text-gray-600">Welcome back! Here's what's happening with AutoCare today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 45, 75, 55, 85, 70, 95].map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-600 rounded-t-lg hover:bg-blue-700 transition-colors cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-gray-600 mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Distribution */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Service Distribution</h3>
              <div className="space-y-4">
                {[
                  { name: 'Oil Change', percentage: 35, color: 'bg-blue-600' },
                  { name: 'Brake Service', percentage: 25, color: 'bg-green-600' },
                  { name: 'Tire Service', percentage: 20, color: 'bg-yellow-600' },
                  { name: 'Engine Diagnostics', percentage: 15, color: 'bg-purple-600' },
                  { name: 'Other', percentage: 5, color: 'bg-gray-600' }
                ].map((service, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{service.name}</span>
                      <span className="text-sm font-semibold text-gray-900">{service.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${service.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${service.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-xl shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Center</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.vehicle}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.center}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">{booking.amount}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Service Centers Performance */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Service Centers Performance</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {serviceCenters.map((center, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{center.name}</h4>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                          {center.status}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-yellow-600">★ {center.rating}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bookings:</span>
                        <span className="font-semibold text-gray-900">{center.bookings}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Revenue:</span>
                        <span className="font-semibold text-gray-900">{center.revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}