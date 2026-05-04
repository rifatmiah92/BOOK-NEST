import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";

export function Navbar() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-black tracking-tighter uppercase">
              BOOK NEST
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center font-bold">
            <Link to="/" className="text-black hover:text-neo-primary transition-colors">Home</Link>
            <Link to="/items" className="text-black hover:text-neo-primary transition-colors">Books</Link>
            <Link to="/" className="text-black hover:text-neo-primary transition-colors">About</Link>
            
            <Link to="/cart" className="relative p-2 text-black hover:text-neo-primary transition-colors flex items-center group">
               <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
               {itemCount > 0 && (
                 <span className="absolute top-0 right-0 bg-neo-red text-white text-[10px] font-black font-mono w-5 h-5 flex items-center justify-center rounded-full border-2 border-black transform translate-x-1/4 -translate-y-1/4">
                   {itemCount}
                 </span>
               )}
            </Link>

            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 font-bold border-2 border-black p-1 pr-3 hover:bg-neo-yellow transition-colors"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="User avatar" className="w-8 h-8 rounded-full border-r-2 border-black object-cover bg-white" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-r-2 border-black bg-neo-cyan flex items-center justify-center font-black">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span>{user.email?.split('@')[0]}</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border-4 border-black shadow-[4px_4px_0_#000] py-2 flex flex-col z-50">
                    <span className="px-4 py-2 text-xs border-b-4 border-black font-mono truncate">{user.email}</span>
                    <Link onClick={() => setDropdownOpen(false)} to="/items/add" className="block px-4 py-3 hover:bg-neo-primary hover:text-white font-bold transition-colors">Add Book</Link>
                    <Link onClick={() => setDropdownOpen(false)} to="/items/manage" className="block px-4 py-3 hover:bg-neo-primary hover:text-white font-bold transition-colors">Manage Books</Link>
                    <button onClick={() => { logout(); setDropdownOpen(false); }} className="w-full text-left px-4 py-3 text-neo-red hover:bg-neo-red hover:text-white transition-colors">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="neo-button">Sign In</Link>
            )}
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-black hover:text-neo-primary transition-colors flex items-center">
               <ShoppingCart size={24} />
               {itemCount > 0 && (
                 <span className="absolute top-0 right-0 bg-neo-red text-white text-[10px] font-black font-mono w-5 h-5 flex items-center justify-center rounded-full border-2 border-black transform translate-x-1/4 -translate-y-1/4">
                   {itemCount}
                 </span>
               )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2 border-2 border-black bg-white">
              {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-white flex flex-col font-black uppercase text-xl absolute w-full z-50">
          <Link to="/" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b-4 border-black hover:bg-neo-yellow transition-colors">Home</Link>
          <Link to="/items" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b-4 border-black hover:bg-neo-yellow transition-colors">Books</Link>
          {user ? (
            <div className="flex flex-col bg-gray-100">
              <div className="px-6 py-4 flex items-center gap-3 border-b-2 border-black">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User avatar" className="w-10 h-10 rounded-full border-2 border-black object-cover bg-white" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-neo-cyan flex items-center justify-center font-black text-xl">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="font-mono text-sm lowercase normal-case truncate">{user.email}</span>
              </div>
              <Link to="/items/add" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b-2 border-dashed border-black hover:bg-neo-primary hover:text-white">Add Book</Link>
              <Link to="/items/manage" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b-4 border-black hover:bg-neo-primary hover:text-white">Manage Books</Link>
              <button onClick={() => { logout(); setIsOpen(false); }} className="text-left px-6 py-4 text-neo-red hover:bg-neo-red hover:text-white">Logout</button>
            </div>
          ) : (
            <div className="p-6 bg-neo-cyan">
              <Link to="/login" onClick={() => setIsOpen(false)} className="neo-button w-full text-center block text-xl py-4">Sign In</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
