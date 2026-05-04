import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import booksData from "../data/books.json";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const book = booksData.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Book Not Found</h1>
        <p className="font-mono mb-6">The book you are looking for does not exist or has been removed.</p>
        <Link to="/items" className="neo-button">Back to Library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 font-bold uppercase hover:text-neo-primary mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="neo-card bg-gray-100 p-4 lg:p-6 sticky top-24">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="w-full h-auto aspect-[3/4] object-cover border-4 border-black shadow-[4px_4px_0_#000]"
          />
        </div>
        
        <div className="flex flex-col">
          <div className="mb-4">
             <span className="bg-neo-cyan border-2 border-black px-3 py-1.5 font-bold text-xs uppercase font-mono shadow-[2px_2px_0_#000]">
               {book.category}
             </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
            {book.title}
          </h1>
          <p className="text-xl font-bold font-mono text-gray-600 mb-8 border-b-4 border-black pb-4">by {book.author}</p>
          
          <div className="text-4xl font-black mb-8 bg-neo-yellow inline-block px-4 py-2 border-4 border-black shadow-[8px_8px_0_#000] rotate-[-2deg] w-max">
            ${book.price.toFixed(2)}
          </div>

          <p className="text-lg font-bold leading-relaxed mb-8 border-l-4 border-black pl-4">
            {book.description}
          </p>

          <div className="mt-8 flex rounded">
            <button 
              onClick={() => addToCart(book)}
              className="neo-button flex-1 flex items-center justify-center gap-3 !bg-neo-green !text-black !py-4 text-xl"
            >
              <ShoppingCart size={24} /> <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
