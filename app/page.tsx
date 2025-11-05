import Link from 'next/link';
import { Car, Wrench, Clock, Shield, Star, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AutoCare</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Complete Auto Care Solution
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Schedule services, track maintenance, and keep your vehicle running smoothly with our comprehensive auto care platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-center font-semibold">
                  Book a Service
                </Link>
                <Link href="#features" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 text-center font-semibold border-2 border-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img src="/api/placeholder/500/400" alt="AutoCare Dashboard" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive auto care for every need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wrench, title: 'Regular Maintenance', desc: 'Oil changes, tire rotations, and routine inspections' },
              { icon: Shield, title: 'Diagnostics', desc: 'Advanced computer diagnostics and troubleshooting' },
              { icon: Car, title: 'Repairs', desc: 'Engine, transmission, and electrical repairs' },
              { icon: Clock, title: 'Quick Service', desc: 'Fast turnaround for urgent repairs' }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AutoCare?</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your vehicle maintenance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Easy Booking', desc: 'Schedule services online in minutes with our simple booking system' },
              { title: 'Real-time Tracking', desc: 'Track your service progress and get updates in real-time' },
              { title: 'Service History', desc: 'Access complete maintenance records for all your vehicles' },
              { title: 'Expert Technicians', desc: 'Certified mechanics with years of experience' },
              { title: 'Transparent Pricing', desc: 'No hidden fees, clear estimates before work begins' },
              { title: 'Warranty Coverage', desc: 'All repairs backed by our quality guarantee' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$0', features: ['Online Booking', 'Service Reminders', 'Basic Support', 'Vehicle History'] },
              { name: 'Premium', price: '$29', features: ['Everything in Basic', 'Priority Booking', '10% Discount on Services', 'Premium Support', 'Extended Warranty'], popular: true },
              { name: 'Business', price: '$99', features: ['Everything in Premium', 'Fleet Management', 'Dedicated Account Manager', 'Custom Reporting', 'API Access'] }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-2xl p-8 ${plan.popular ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-4' : 'bg-gray-50'}`}>
                {plan.popular && <span className="bg-white text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mt-4 mb-8">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center">
                      <ArrowRight className={`h-5 w-5 mr-2 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold ${plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Better Auto Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust AutoCare
          </p>
          <Link href="/register" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">AutoCare</span>
              </div>
              <p className="text-gray-400">Your trusted partner in vehicle maintenance and care.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Maintenance</a></li>
                <li><a href="#" className="hover:text-white">Repairs</a></li>
                <li><a href="#" className="hover:text-white">Diagnostics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AutoCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// app/page.tsx
// import Link from 'next/link';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <div className="shrink-0 flex items-center">
//                 <h1 className="text-2xl font-bold text-blue-600">AutoCare360</h1>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Link 
//                 href="/auth/login" 
//                 className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Login
//               </Link>
//               <Link 
//                 href="/auth/register" 
//                 className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               Complete Vehicle Care Solution
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-blue-100">
//               Professional maintenance, repair, and emergency services for your vehicles
//             </p>
//             <div className="space-x-4">
//               <Link
//                 href="/auth/register"
//                 className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-200"
//               >
//                 Start Today
//               </Link>
//               <Link
//                 href="#features"
//                 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-200"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Choose AutoCare360?
//             </h2>
//             <p className="text-xl text-gray-600">
//               Comprehensive vehicle care with cutting-edge technology
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="text-center p-6">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <feature.icon className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Transparent Pricing
//             </h2>
//             <p className="text-xl text-gray-600">
//               No hidden fees, just honest service
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {pricingPlans.map((plan, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
//                 <p className="text-4xl font-bold text-blue-600 mb-4">
//                   {plan.price}
//                 </p>
//                 <ul className="space-y-3 mb-6">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center">
//                       <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Link
//                   href="/auth/register"
//                   className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4">AutoCare360</h2>
//             <p className="text-gray-400 mb-8">
//               Complete vehicle care solution for modern needs
//             </p>
//             <div className="flex justify-center space-x-6">
//               <Link href="/privacy" className="text-gray-400 hover:text-white">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-400 hover:text-white">
//                 Terms of Service
//               </Link>
//               <Link href="/contact" className="text-gray-400 hover:text-white">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // Mock data - Replace with actual icons and data
// const features = [
//   {
//     title: 'Easy Booking',
//     description: 'Schedule services in just a few clicks',
//     icon: CalendarIcon,
//   },
//   {
//     title: 'Real-time Tracking',
//     description: 'Track your vehicle service progress live',
//     icon: TrackingIcon,
//   },
//   {
//     title: 'Expert Mechanics',
//     description: 'Certified professionals for all services',
//     icon: MechanicIcon,
//   },
// ];

// const pricingPlans = [
//   {
//     name: 'Basic Maintenance',
//     price: '$49',
//     features: ['Oil Change', 'Tire Rotation', 'Basic Inspection', '30-day Warranty'],
//   },
//   {
//     name: 'Premium Care',
//     price: '$99',
//     features: ['All Basic Features', 'Advanced Diagnostics', 'Brake Service', '60-day Warranty'],
//   },
//   {
//     name: 'Complete Package',
//     price: '$199',
//     features: ['All Premium Features', 'Full Vehicle Inspection', 'Premium Parts', '90-day Warranty'],
//   },
// ];

// // Placeholder icons - replace with actual icon components
// function CalendarIcon(props: any) { return <div {...props}>📅</div>; }
// function TrackingIcon(props: any) { return <div {...props}>📍</div>; }
// function MechanicIcon(props: any) { return <div {...props}>🔧</div>; }
// function CheckIcon(props: any) { return <div {...props}>✓</div>; }