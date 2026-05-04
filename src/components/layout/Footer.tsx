import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-4 border-black mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Column 1 */}
        <div className="flex-1 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">BOOK NEST</h2>
          <p className="font-mono text-sm mb-6">Your premier destination for rare,<br/>new, and classic literature.</p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 border-2 border-black hover:bg-neo-primary hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 border-2 border-black hover:bg-neo-cyan hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-2 border-2 border-black hover:bg-neo-pink hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
          <h3 className="text-xl font-bold uppercase mb-4 bg-neo-yellow inline-block px-2">Explore</h3>
          <ul className="space-y-2 font-bold">
            <li><Link to="/items" className="hover:underline">All Books</Link></li>
            <li><Link to="#" className="hover:underline">Bestsellers</Link></li>
            <li><Link to="#" className="hover:underline">New Releases</Link></li>
            <li><Link to="#" className="hover:underline">Rare Editions</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex-1 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
          <h3 className="text-xl font-bold uppercase mb-4 bg-neo-cyan inline-block px-2">Support</h3>
          <ul className="space-y-2 font-bold">
            <li><Link to="#" className="hover:underline">FAQ</Link></li>
            <li><Link to="#" className="hover:underline">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:underline">Contact Us</Link></li>
            <li><Link to="#" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex-1 p-8">
          <h3 className="text-xl font-bold uppercase mb-4 bg-neo-pink inline-block px-2">Visit Us</h3>
          <address className="font-mono not-italic text-sm space-y-2">
            <p className="font-bold text-base">HEADQUARTERS</p>
            <p>123 Novel Street</p>
            <p>Fiction City, FC 90210</p>
            <p className="mt-4">contact@booknest.com</p>
            <p>+1 (555) 123-4567</p>
          </address>
        </div>

      </div>
      
      <div className="border-t-4 border-black p-4 text-center font-mono text-sm bg-neo-green font-bold">
        &copy; 2025 BOOK NEST. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
