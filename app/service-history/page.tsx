// src/app/service-history/page.tsx
'use client';

import { useState } from 'react';
import { 
  FileText, Download, Filter, Calendar, DollarSign, 
  Car, Menu, X, Bell, User, LogOut, Search, Star, CheckCircle
} from 'lucide-react';

interface ServiceRecord {
  id: number;
  date: string;
  vehicle: string;
  plate: string;
  service: string;
  center: string;
  mechanic: string;
  status: 'Completed' | 'In Progress' | 'Cancelled';
  cost: string;
  mileage: number;
  invoice: string;
  rating?: number;
  notes?: string;
}

export default function ServiceHistoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceRecords: ServiceRecord[] = [
    {
      id: 1,
      date: '2025-10-15',
      vehicle: 'Toyota Camry 2020',
      plate: 'ABC-123',
      service: 'Oil Change + Filter',
      center: 'Downtown AutoCare',
      mechanic: 'John Smith',
      status: 'Completed',
      cost: '$45.00',
      mileage: 45000,
      invoice: 'INV-2025-001',
      rating: 5,
      notes: 'Everything looks good. Next service at 48,000 miles.'
    },
    {
      id: 2,
      date: '2025-09-20',
      vehicle: 'Honda Civic 2019',
      plate: 'XYZ-789',
      service: 'Brake Inspection & Pad Replacement',
      center: 'North AutoCare',
      mechanic: 'Mike Johnson',
      status: 'Completed',
      cost: '$280.00',
      mileage: 52000,
      invoice: 'INV-2025-002',
      rating: 4,
      notes: 'Replaced front brake pads. Rear brakes still good.'
    },
    {
      id: 3,
      date: '2025-08-10',
      vehicle: 'Toyota Camry 2020',
      plate: 'ABC-123',
      service: 'Tire Rotation',
      center: 'Downtown AutoCare',
      mechanic: 'Sarah Williams',
      status: 'Completed',
      cost: '$35.00',
      mileage: 42000,
      invoice: 'INV-2025-003',
      rating: 5,
      notes: 'Tire pressure adjusted. All tires in good condition.'
    },
    {
      id: 4,
      date: '2025-07-25',
      vehicle: 'Honda Civic 2019',
      plate: 'XYZ-789',
      service: 'Engine Diagnostics',
      center: 'East Side Service',
      mechanic: 'David Brown',
      status: 'Completed',
      cost: '$120.00',
      mileage: 48000,
      invoice: 'INV-2025-004',
      rating: 5,
      notes: 'Check engine light was due to loose gas cap. No issues found.'
    },
    {
      id: 5,
      date: '2025-06-15',
      vehicle: 'Toyota Camry 2020',
      plate: 'ABC-123',
      service: 'Full Service',
      center: 'Downtown AutoCare',
      mechanic: 'John Smith',
      status: 'Completed',
      cost: '$250.00',
      mileage: 39000,
      invoice: 'INV-2025-005',
      rating: 5,
      notes: 'Complete inspection. Replaced air filter and cabin filter.'
    }
  ];

  const filteredRecords = serviceRecords.filter(record => {
    const matchesSearch = record.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalSpent = serviceRecords
    .filter(r => r.status === 'Completed')
    .reduce((sum, r) => sum + parseFloat(r.cost.replace('$', '')), 0);

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
              <a href="#" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg">
                <FileText className="h-5 w-5 mr-3" />
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
            <h1 className="text-2xl font-bold text-gray-900">Service History</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
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
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{serviceRecords.length}</h3>
              <p className="text-gray-600">Total Services</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">${totalSpent.toFixed(2)}</h3>
              <p className="text-gray-600">Total Spent</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {serviceRecords.filter(r => r.status === 'Completed').length}
              </h3>
              <p className="text-gray-600">Completed</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {(serviceRecords.filter(r => r.rating).reduce((sum, r) => sum + (r.rating || 0), 0) / 
                  serviceRecords.filter(r => r.rating).length).toFixed(1)}
              </h3>
              <p className="text-gray-600">Avg Rating</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by service or vehicle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-5 w-5 mr-2" />
                Export
              </button>
            </div>
          </div>

          {/* Service Records */}
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <div 
                key={record.id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all cursor-pointer ${
                  selectedService === record.id ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedService(selectedService === record.id ? null : record.id)}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{record.service}</h3>
                          <p className="text-gray-600 mt-1">{record.vehicle} • {record.plate}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ml-4 ${
                          record.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          record.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {record.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="font-medium text-gray-900">{record.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Center</p>
                          <p className="font-medium text-gray-900">{record.center}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Mileage</p>
                          <p className="font-medium text-gray-900">{record.mileage.toLocaleString()} mi</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Cost</p>
                          <p className="font-medium text-gray-900">{record.cost}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end space-y-2">
                      {record.rating && (
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < record.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      )}
                      <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                        <Download className="h-4 w-4 mr-1" />
                        Invoice
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedService === record.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Service Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Mechanic:</span>
                              <span className="font-medium text-gray-900">{record.mechanic}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Invoice #:</span>
                              <span className="font-medium text-gray-900">{record.invoice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Payment Status:</span>
                              <span className="font-medium text-green-600">Paid</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Notes</h4>
                          <p className="text-sm text-gray-600">{record.notes}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                          Book Similar Service
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium">
                          View Full Invoice
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
    </div>
  );
}