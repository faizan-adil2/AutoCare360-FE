// src/app/dashboard/admin/service-centers/page.tsx
'use client';

import { useState } from 'react';
import { 
  Building, MapPin, Users, DollarSign, Star, TrendingUp,
  Menu, X, Bell, LogOut, Plus, Edit, Trash2, Phone, Mail,
  Clock, CheckCircle, AlertCircle, BarChart3, Search, Filter
} from 'lucide-react';

interface ServiceCenter {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  manager: string;
  status: 'Active' | 'Inactive' | 'Maintenance';
  bays: number;
  staff: number;
  rating: number;
  totalBookings: number;
  monthlyRevenue: string;
  completionRate: number;
  avgServiceTime: string;
  openingHours: string;
  specialties: string[];
}

export default function ServiceCentersManagementPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const serviceCenters: ServiceCenter[] = [
    {
      id: 1,
      name: 'Downtown AutoCare',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      phone: '+1 (555) 123-4567',
      email: 'downtown@autocare.com',
      manager: 'John Smith',
      status: 'Active',
      bays: 6,
      staff: 8,
      rating: 4.8,
      totalBookings: 1245,
      monthlyRevenue: '$45,200',
      completionRate: 95,
      avgServiceTime: '1.5 hrs',
      openingHours: '8:00 AM - 6:00 PM',
      specialties: ['Oil Change', 'Brake Service', 'Engine Diagnostics']
    },
    {
      id: 2,
      name: 'North AutoCare',
      address: '456 Oak Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      phone: '+1 (555) 234-5678',
      email: 'north@autocare.com',
      manager: 'Sarah Williams',
      status: 'Active',
      bays: 5,
      staff: 6,
      rating: 4.6,
      totalBookings: 987,
      monthlyRevenue: '$38,900',
      completionRate: 92,
      avgServiceTime: '1.8 hrs',
      openingHours: '7:30 AM - 5:30 PM',
      specialties: ['Tire Service', 'Brake Service', 'Oil Change']
    },
    {
      id: 3,
      name: 'East Side Service',
      address: '789 Elm Road',
      city: 'New York',
      state: 'NY',
      zipCode: '10003',
      phone: '+1 (555) 345-6789',
      email: 'east@autocare.com',
      manager: 'Mike Johnson',
      status: 'Active',
      bays: 4,
      staff: 5,
      rating: 4.7,
      totalBookings: 756,
      monthlyRevenue: '$32,400',
      completionRate: 90,
      avgServiceTime: '2.0 hrs',
      openingHours: '8:00 AM - 6:00 PM',
      specialties: ['Engine Diagnostics', 'Transmission', 'Electrical']
    },
    {
      id: 4,
      name: 'West End Garage',
      address: '321 Pine Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10004',
      phone: '+1 (555) 456-7890',
      email: 'west@autocare.com',
      manager: 'David Brown',
      status: 'Maintenance',
      bays: 3,
      staff: 4,
      rating: 4.5,
      totalBookings: 543,
      monthlyRevenue: '$28,100',
      completionRate: 88,
      avgServiceTime: '1.6 hrs',
      openingHours: '9:00 AM - 5:00 PM',
      specialties: ['Oil Change', 'Inspection', 'Basic Repairs']
    }
  ];

  const filteredCenters = serviceCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || center.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalStats = {
    centers: serviceCenters.length,
    active: serviceCenters.filter(c => c.status === 'Active').length,
    totalBays: serviceCenters.reduce((sum, c) => sum + c.bays, 0),
    totalStaff: serviceCenters.reduce((sum, c) => sum + c.staff, 0),
    avgRating: (serviceCenters.reduce((sum, c) => sum + c.rating, 0) / serviceCenters.length).toFixed(1)
  };

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
            <Building className="h-8 w-8 text-blue-600" />
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
              <a href="#" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
                <Building className="h-5 w-5 mr-3" />
                Service Centers
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
            <h1 className="text-2xl font-bold text-gray-900">Service Centers</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
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
          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <Building className="h-6 w-6 text-blue-600 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">{totalStats.centers}</h3>
              <p className="text-sm text-gray-600">Total Centers</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">{totalStats.active}</h3>
              <p className="text-sm text-gray-600">Active</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <Building className="h-6 w-6 text-purple-600 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">{totalStats.totalBays}</h3>
              <p className="text-sm text-gray-600">Total Bays</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <Users className="h-6 w-6 text-orange-600 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">{totalStats.totalStaff}</h3>
              <p className="text-sm text-gray-600">Total Staff</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <Star className="h-6 w-6 text-yellow-600 mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">{totalStats.avgRating}</h3>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Center
                </button>
              </div>
            </div>
          </div>

          {/* Service Centers Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredCenters.map((center) => (
              <div 
                key={center.id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all cursor-pointer ${
                  selectedCenter === center.id ? 'ring-2 ring-blue-600' : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedCenter(selectedCenter === center.id ? null : center.id)}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <Building className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{center.name}</h3>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                          <p className="text-sm text-gray-600">{center.city}, {center.state}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      center.status === 'Active' ? 'bg-green-100 text-green-700' :
                      center.status === 'Inactive' ? 'bg-gray-100 text-gray-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {center.status}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="flex items-center text-yellow-600 mb-1">
                        <Star className="h-4 w-4 fill-current mr-1" />
                        <span className="font-semibold">{center.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{center.bays}</p>
                      <p className="text-xs text-gray-600">Bays</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{center.staff}</p>
                      <p className="text-xs text-gray-600">Staff</p>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Revenue</p>
                      <p className="font-semibold text-gray-900">{center.monthlyRevenue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Bookings</p>
                      <p className="font-semibold text-gray-900">{center.totalBookings}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Completion Rate</p>
                      <p className="font-semibold text-green-600">{center.completionRate}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Avg Service Time</p>
                      <p className="font-semibold text-gray-900">{center.avgServiceTime}</p>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedCenter === center.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Phone className="h-4 w-4 mr-2" />
                              {center.phone}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Mail className="h-4 w-4 mr-2" />
                              {center.email}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {center.address}, {center.city}, {center.state} {center.zipCode}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Users className="h-4 w-4 mr-2" />
                              Manager: {center.manager}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {center.openingHours}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {center.specialties.map((specialty, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                          <Edit className="h-4 w-4 inline mr-2" />
                          Edit Center
                        </button>
                        <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
                          <BarChart3 className="h-4 w-4 inline mr-2" />
                          View Analytics
                        </button>
                        <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Add Center Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Add New Service Center</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Center Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Downtown AutoCare"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manager Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="center@autocare.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="10001"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bays</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="6"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Opening Hours</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="8:00 AM - 6:00 PM"
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Add Service Center
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}