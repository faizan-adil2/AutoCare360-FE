// types/index.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin' | 'service_center' | 'mechanic';
  avatar?: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  licensePlate: string;
  mileage: number;
  lastServiceDate?: string;
}

export interface Service {
  id: string;
  type: string;
  name: string;
  description: string;
  estimatedDuration: number;
  price: number;
}

export interface Appointment {
  id: string;
  vehicleId: string;
  serviceId: string;
  serviceCenterId: string;
  scheduledDate: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  specialInstructions?: string;
}