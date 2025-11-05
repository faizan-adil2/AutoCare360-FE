// src/app/dashboard/mechanic/page.tsx
'use client';

import { useState } from 'react';
import { 
  Wrench, Clock, CheckCircle, AlertCircle, Car, Menu, X, 
  Bell, LogOut, User, ClipboardList, Package, Calendar 
} from 'lucide-react';

export default function MechanicDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const todayJobs = [
    { 
      id: 1, 
      vehicle: 'Toyota Camry 2020', 
      plate: 'ABC-123', 
      customer: 'John Doe',
      service: 'Oil Change', 
      time: '09:00 AM', 
      status: 'In Progress',
      duration: '30 min',
      bay: 'Bay 3',
      priority: 'Normal'
    },
    { 
      id: 2, 
      vehicle: 'Honda Civic 2019', 
      plate: 'XYZ-789', 
      customer: 'Jane Smith',
      service: 'Brake Inspection', 
      time: '10:30 AM', 
      status: 'Pending',
      duration: '1 hour',
      bay: 'Bay 5',
      priority: 'High'
    },
    { 
      id: 3, 
      vehicle: 'Ford F-150 2021', 
      plate: 'DEF-456', 
      customer: 'Mike Johnson',
      service: 'Engine Diagnostics', 
      time: '02:00 PM', 
      status: 'Scheduled',
      duration: '1.5 hours',
      bay: 'Bay 3',
      priority: 'Normal'
    }
  ];

  const completedToday = [
    { id: 1, vehicle: 'BMW X5', service: 'Tire Rotation', time: '08:00 AM', customer: 'Sarah Williams' },
    { id: 2, vehicle: 'Tesla Model 3', service: 'Brake Service', time: '07:30 AM', customer: 'David Brown' }
  ];

  const requiredParts = [
    { name: 'Oil Filter', quantity: 2, status: 'In Stock' },
    { name: 'Brake Pads', quantity: 1, status: 'Low Stock' },
    { name: 'Air Filter', quantity: 3, status: 'In Stock' }
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
            <Wrench className="h-8 w-8 text-blue-600" />
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
                <ClipboardList className="h-5 w-5 mr-3" />
                My Jobs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 mr-3" />
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 mr-3" />
                Completed Jobs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Package className="h-5 w-5 mr-3" />
                Parts Inventory
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
            <h1 className="text-2xl font-bold text-gray-900">Mechanic Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                  MC
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome back, Mike!</h2>
            <p className="text-gray-600">You have 3 jobs scheduled for today.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <ClipboardList className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
              <p className="text-gray-600">Jobs Today</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">2</h3>
              <p className="text-gray-600">Completed Today</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
              <p className="text-gray-600">In Progress</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Car className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">47</h3>
              <p className="text-gray-600">Total This Month</p>
            </div>
          </div>

          {/* Today's Jobs */}
          <div className="bg-white rounded-xl shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Today's Assigned Jobs</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {todayJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className={`border-2 rounded-lg p-4 transition-all cursor-pointer ${
                      selectedJob === job.id 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedJob(job.id)}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">{job.vehicle}</h4>
                            <p className="text-sm text-gray-600">{job.plate} • {job.customer}</p>
                          </div>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ml-2 ${
                            job.priority === 'High' 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {job.priority}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Wrench className="h-4 w-4 mr-2" />
                            {job.service}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {job.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Car className="h-4 w-4 mr-2" />
                            {job.bay}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <AlertCircle className="h-4 w-4 mr-2" />
                            {job.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
                        <span className={`px-4 py-2 text-sm font-medium rounded-lg text-center ${
                          job.status === 'In Progress' 
                            ? 'bg-blue-100 text-blue-700' 
                            : job.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {job.status}
                        </span>
                        {job.status === 'In Progress' && (
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                            Complete Job
                          </button>
                        )}
                        {job.status === 'Pending' && (
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                            Start Job
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Completed Jobs Today */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Completed Today</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {completedToday.map((job) => (
                    <div key={job.id} className="flex items-start justify-between pb-4 border-b border-gray-100 last:border-0">
                      <div>
                        <h4 className="font-semibold text-gray-900">{job.service}</h4>
                        <p className="text-sm text-gray-600">{job.vehicle}</p>
                        <p className="text-sm text-gray-500 mt-1">{job.customer} • {job.time}</p>
                      </div>
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Required Parts */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Required Parts</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {requiredParts.map((part, idx) => (
                    <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                      <div>
                        <h4 className="font-semibold text-gray-900">{part.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {part.quantity}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        part.status === 'In Stock' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {part.status}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Request Parts
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}