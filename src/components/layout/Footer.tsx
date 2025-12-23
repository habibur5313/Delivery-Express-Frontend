// import Logo from "@/assets/icon/Logo";
// import { Facebook, Github, Instagram,  Linkedin,  Twitter } from "lucide-react";
// import { Link, useNavigate } from "react-router";

// export default function Footer() {
//   const navigate = useNavigate()
//   return (
//     <footer>
//       <div className="mx-auto container space-y-8 px-4 py-16">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div>
//             <div onClick={() => navigate('/')} className="text-foreground flex gap-2 items-center">
//               <Logo /> <h1 className="pacifico-regular text-2xl font-semibold">Delivery Express</h1>
//             </div>

//             <p className="mt-4 max-w-xs text-muted-foreground/80">
//               Delivery Express — Fast, reliable, and secure parcel services across Bangladesh. Every parcel matters, every delivery on time.
//             </p>

//             <ul className="mt-8 flex gap-6">
//               <li>
//                 <Link
//                   to="https://www.facebook.com/habibur5231"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-400 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Facebook</span>

//                   <Facebook></Facebook>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="https://giftcartgalaxy.xyz"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-400 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Instagram</span>

//                   <Instagram></Instagram>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="https://giftcartgalaxy.xyz"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-400 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Twitter</span>

//                   <Twitter></Twitter>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="https://github.com/habibur5313"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-400 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">GitHub</span>

//                   <Github></Github>
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="https://www.linkedin.com/in/habibur-rahman13"
//                   rel="noreferrer"
//                   target="_blank"
//                   className="text-gray-400 transition hover:opacity-75"
//                 >
//                   <span className="sr-only">Linkdin</span>

//                   <Linkedin></Linkedin>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
//             <div>
//               <p className="font-medium">Services</p>

//               <ul className="mt-6 space-y-4 text-sm">
//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     1on1 Coaching{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Company Review{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Accounts Review{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     HR Consulting{" "}
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <p className="font-medium">Company</p>

//               <ul className="mt-6 space-y-4 text-sm">
//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     About{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/about"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Meet the Team{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Accounts Review{" "}
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <p className="font-medium">Helpful Links</p>

//               <ul className="mt-6 space-y-4 text-sm">
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Contact{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/faq"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     FAQs{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Live Chat{" "}
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <p className="font-medium">Legal</p>

//               <ul className="mt-6 space-y-4 text-sm">
//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Accessibility{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Returns Policy{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     {" "}
//                     Refund Policy{" "}
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     to="/"
//                     className="text-gray-400 transition hover:opacity-75"
//                   >
//                     Hiring-3 Statistics
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <p className="text-xs text-gray-500">
//           &copy; 2025. Company Name. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }


import React from 'react'
import {
  Package,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SwiftParcel
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Reliable, fast, and secure delivery solutions for individuals and
              businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Track a Parcel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Prohibited Items
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Claims
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  123
                  <br />
                  Sreemangal, Moulvibazar, Sylhet, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+1 2423 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>support@swiftparcel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SwiftParcel Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
