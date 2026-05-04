import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";

export function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black">Nothing to Checkout</h1>
        <Link to="/" className="text-neo-primary font-bold hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call for payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("Payment Successful! Your books are on the way.", {
        icon: '📚',
        duration: 5000 
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 bg-neo-pink inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000] rotate-[-2deg]">
        Secure Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Payment Form */}
        <form onSubmit={handlePayment} className="neo-card bg-white p-8 space-y-6">
          <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
            <h2 className="text-2xl font-black uppercase">Payment Details</h2>
            <div className="flex space-x-2">
              <div className="w-10 h-6 bg-neo-primary border-2 border-black rounded-sm" />
              <div className="w-10 h-6 bg-neo-red border-2 border-black rounded-sm" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block font-bold mb-2 uppercase text-sm">Cardholder Name</label>
              <input type="text" required placeholder="JANE DOE" className="neo-input uppercase" />
            </div>
            
            <div>
              <label className="block font-bold mb-2 uppercase text-sm">Card Number</label>
              <input type="text" required placeholder="0000 0000 0000 0000" maxLength={19} className="neo-input font-mono text-lg" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-2 uppercase text-sm">Expiry Date</label>
                <input type="text" required placeholder="MM/YY" maxLength={5} className="neo-input font-mono text-center text-lg" />
              </div>
              <div>
                <label className="block font-bold mb-2 uppercase text-sm">CVC</label>
                <input type="password" required placeholder="123" maxLength={4} className="neo-input font-mono text-center text-lg" />
              </div>
            </div>
          </div>
          
          <div className="pt-6 mt-6 border-t-4 border-black border-dashed">
            <button 
              type="submit" 
              disabled={isProcessing}
              className={`neo-button w-full !py-4 text-2xl flex justify-center items-center ${isProcessing ? 'opacity-50 cursor-not-allowed bg-gray-400' : '!bg-neo-primary'}`}
            >
              {isProcessing ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
            </button>
            <p className="text-center font-mono text-xs mt-4 font-bold text-gray-500">
              100% SECURE & ENCRYPTED TRANSACTION
            </p>
          </div>
        </form>

        {/* Order Summary Sidebar */}
        <div className="neo-card bg-neo-cyan/20 p-8 flex flex-col max-h-[80vh]">
          <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-4 mb-6">Your Items</h2>
          
          <div className="overflow-y-auto pr-2 space-y-4 flex-grow mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b-2 border-black border-dashed pb-4">
                <img src={item.cover} alt={item.title} className="w-16 h-24 object-cover border-2 border-black bg-white" />
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold uppercase text-sm leading-tight mb-1">{item.title}</h3>
                  <p className="font-mono text-xs font-bold text-gray-600 mb-2">Qty: {item.quantity}</p>
                  <p className="font-black text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0_#000]">
            <div className="flex justify-between items-center mb-2 font-mono font-bold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4 font-mono font-bold">
              <span>Shipping</span>
              <span className="text-neo-green">FREE</span>
            </div>
            <div className="border-t-4 border-black pt-4 flex justify-between items-center">
              <span className="font-black uppercase text-xl">Total To Pay</span>
              <span className="font-black text-3xl">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
