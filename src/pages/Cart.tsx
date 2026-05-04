import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-neo-pink border-4 border-black shadow-[8px_8px_0_#000] rounded-full flex items-center justify-center mb-8 rotate-12">
          <ShoppingCart size={48} />
        </div>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Your Cart is Empty</h1>
        <p className="font-mono text-lg mb-8 max-w-md">Looks like you haven't added any books yet to your reading list.</p>
        <Link to="/items" className="neo-button text-xl">Browse Library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black uppercase tracking-tighter bg-neo-cyan inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000] mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="neo-card p-4 flex flex-col sm:flex-row items-center gap-6">
              <img src={item.cover} alt={item.title} className="w-24 h-32 object-cover border-2 border-black" />
              
              <div className="flex-1 text-center sm:text-left">
                <Link to={`/items/${item.id}`} className="font-black text-xl uppercase leading-tight mb-1 hover:underline decoration-4 decoration-neo-primary">{item.title}</Link>
                <p className="font-mono text-sm mb-2">{item.author}</p>
                <p className="font-black text-xl text-neo-primary">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border-4 border-black bg-white">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-3 hover:bg-neo-yellow transition-colors">
                    <Minus size={18} strokeWidth={3} />
                  </button>
                  <span className="font-mono font-black text-xl w-10 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-3 hover:bg-neo-yellow transition-colors border-l-4 border-black">
                    <Plus size={18} strokeWidth={3} />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 border-4 border-black bg-white hover:bg-neo-red hover:text-white shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  title="Remove"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="neo-card p-6 bg-neo-yellow sticky top-24">
            <h2 className="text-2xl font-black uppercase border-b-4 border-black pb-4 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6 font-mono font-bold text-lg">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span className="bg-neo-green px-2 py-0 border-2 border-black text-sm uppercase">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t-4 border-black pt-6 mb-8">
              <span className="text-2xl font-black uppercase">Total</span>
              <span className="text-4xl font-black">${cartTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="neo-button w-full flex items-center justify-center gap-2 !py-4 text-xl">
              Checkout <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingCart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
