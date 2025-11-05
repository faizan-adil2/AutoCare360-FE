// src/app/dashboard/admin/reports/page.tsx
'use client';

import { useState } from 'react';
import { 
  TrendingUp, Download, Calendar, DollarSign, Users, 
  Building, Wrench, Car, Menu, X, Bell, LogOut, BarChart3,
  PieChart, ArrowUp, ArrowDown, FileText
} from 'lucide-react';

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('30days');

  const overviewStats = {
    totalRevenue: { value: '$124,500', change: '+12.5%', trend: 'up' },
    totalBookings: { value: '1,234', change: '+8.2%', trend: 'up' },
    activeUsers: { value: '856', change: '+15.3%', trend: 'up' },
    avgServiceCost: { value: '$142', change: '-3.1%', trend: 'down' }
  };

  const revenueByService = [
    { service: 'Oil Change', revenue: 25000, bookings: 450, percentage: 20 },
    { service: 'Brake Service', revenue: 35000, bookings: 280, percentage: 28 },
    { service: 'Engine Diagnostics', revenue: 22000, bookings: 180, percentage: 18 },
    { service: 'Tire Service', revenue: 18000, bookings: 320, percentage: 14 },
    { service: 'Full Service', revenue: 24500, bookings: 95, percentage: 20 }
  ];

  const topServiceCenters = [
    { name: 'Downtown AutoCare', revenue: '$45,200', bookings: 432, rating: 4.8, growth: '+18%' },
    { name: 'North AutoCare', revenue: '$38,900', bookings: 387, rating: 4.6, growth: '+12%' },
    { name: 'East Side Service', revenue: '$32,400', bookings: 298, rating: 4.7, growth: '+9%' },
    { name: 'West End Garage', revenue: '$28,100', bookings: 245, rating: 4.5, growth: '+15%' }
  ];

  const customerMetrics = [
    { metric: 'New Customers', value: 245, change: '+23%', trend: 'up' },
    { metric: 'Returning Customers', value: 611, change: '+8%', trend: 'up' },
    { metric: 'Customer Retention', value: '78%', change: '+5%', trend: 'up' },
    { metric: 'Avg Customer Value', value: '$385', change: '+12%', trend: 'up' }
  ];

  const monthlyRevenue = [
    { month: 'Jan', revenue: 95000 },
    { month: 'Feb', revenue: 98000 },
    { month: 'Mar', revenue: 105000 },
    { month: 'Apr', revenue: 112000 },
    { month: 'May', revenue: 108000 },
    { month: 'Jun', revenue: 124500 }
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

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
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
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
              <a href="#" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
                <PieChart className="h-5 w-5 mr-3" />
                Reports & Analytics
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
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="year">This Year</option>
              </select>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="h-5 w-5 mr-2" />
                Export
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(overviewStats).map(([key, stat]) => (
              <div key={key} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  <div className={`flex items-center text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>

          {/* Revenue Trend Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Total:</span>
                <span className="text-lg font-bold text-gray-900">
                  ${monthlyRevenue.reduce((sum, m) => sum + m.revenue, 0).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="h-80 flex items-end justify-between space-x-3">
              {monthlyRevenue.map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="w-full relative group">
                    <div 
                      className="w-full bg-linear-to-t from-blue-600 to-blue-400 rounded-t-lg hover:from-blue-700 hover:to-blue-500 transition-all cursor-pointer"
                      style={{ height: `${(data.revenue / maxRevenue) * 300}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${(data.revenue / 1000).toFixed(0)}k
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-3 font-medium">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue by Service Type */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Revenue by Service Type</h3>
              <div className="space-y-4">
                {revenueByService.map((service, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{service.service}</span>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">{service.bookings} bookings</span>
                        <span className="text-sm font-semibold text-gray-900">
                          ${(service.revenue / 1000).toFixed(1)}k
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-linear-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${service.percentage * 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Metrics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {customerMetrics.map((metric, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className={`text-xs font-medium ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h4>
                    <p className="text-sm text-gray-600">{metric.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Service Centers */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Service Centers</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topServiceCenters.map((center, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <span className="text-xl font-bold text-blue-600">#{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{center.name}</h4>
                        <p className="text-sm text-gray-600">{center.bookings} bookings</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{center.revenue}</p>
                        <p className="text-sm text-gray-600">Revenue</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{center.rating}</p>
                        <p className="text-sm text-gray-600">Rating</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{center.growth}</p>
                        <p className="text-sm text-gray-600">Growth</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Reports */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <button className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-left">
              <FileText className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Monthly Report</h4>
              <p className="text-sm text-gray-600">Download complete monthly analysis</p>
            </button>
            <button className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-left">
              <Users className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Customer Report</h4>
              <p className="text-sm text-gray-600">Customer behavior and trends</p>
            </button>
            <button className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-left">
              <Building className="h-8 w-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Center Performance</h4>
              <p className="text-sm text-gray-600">Individual center analysis</p>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}