import { Link } from "react-router-dom";
import booksData from "../data/books.json";

export function Home() {
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Hero Section (Spans 2 cols, 2 rows if possible, keep simple for mobile) */}
        <div className="neo-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-neo-yellow p-8 flex flex-col justify-center items-start min-h-[400px]">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
            BOOK NEST <br/><span className="text-white drop-shadow-[4px_4px_0_#000]">2025</span>
          </h1>
          <p className="font-bold text-lg mb-8 max-w-sm">
            Curated collections for those who read to live and live to read.
          </p>
          <Link to="/items" className="neo-button text-xl">
            Explore Collection
          </Link>
        </div>

        {/* Featured Books (Spans 2 cols) */}
        <div className="neo-card col-span-1 md:col-span-2 p-6 flex flex-col">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-2 inline-block">Featured</h2>
          <div className="grid grid-cols-2 gap-4 h-full">
            {featuredBooks.slice(0, 2).map(book => (
              <Link to={`/items/${book.id}`} key={book.id} className="border-2 border-black flex flex-col hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] transition-all bg-white overflow-hidden group">
                <div className="h-32 bg-gray-200 border-b-2 border-black overflow-hidden relative">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-2 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm line-clamp-1">{book.title}</h3>
                    <p className="font-mono text-xs text-gray-600 truncate">{book.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* About Preview */}
        <div className="neo-card col-span-1 p-6 bg-neo-cyan flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">Our Story</h2>
            <p className="font-bold text-sm mb-4">
              We started as a small corner shop in 1995. Today, we bring the smell of old paper and the thrill of new adventures globally.
            </p>
          </div>
          <button className="bg-white border-2 border-black font-bold py-2 hover:bg-black hover:text-white transition-colors uppercase text-sm">
            Read More
          </button>
        </div>

        {/* Statistics */}
        <div className="neo-card col-span-1 bg-neo-pink p-6 flex flex-col justify-center items-center text-center">
          <div className="mb-4 w-full border-b-4 border-black pb-4">
            <h3 className="text-4xl font-black">5000+</h3>
            <p className="font-mono font-bold uppercase text-xs">Curated Books</p>
          </div>
          <div className="w-full">
            <h3 className="text-4xl font-black">10k+</h3>
            <p className="font-mono font-bold uppercase text-xs">Happy Readers</p>
          </div>
        </div>

        {/* Services/Features Section (3 items) */}
        <div className="col-span-1 md:col-span-3 lg:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="neo-card p-6 border-t-8 border-t-neo-red relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-neo-red rounded-full border-4 border-black"></div>
            <h3 className="text-xl font-black uppercase mb-2 relative z-10">Global Shipping</h3>
            <p className="font-mono text-sm relative z-10">Fast & reliable delivery across 150+ countries. Your books, anywhere.</p>
          </div>
          <div className="neo-card p-6 border-t-8 border-t-neo-green relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-16 h-16 bg-neo-green rounded-full border-4 border-black"></div>
            <h3 className="text-xl font-black uppercase mb-2 relative z-10">Rare Editions</h3>
            <p className="font-mono text-sm relative z-10">Signed copies, first editions, and hard-to-find collector's items.</p>
          </div>
          <div className="neo-card p-6 border-t-8 border-t-neo-purple relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-16 h-16 bg-neo-purple rounded-full border-4 border-black"></div>
            <h3 className="text-xl font-black uppercase mb-2 relative z-10">Secure Payments</h3>
            <p className="font-mono text-sm relative z-10">100% encrypted transactions for a worry-free shopping experience.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="neo-card col-span-1 md:col-span-2 bg-black text-white p-8 relative">
          <div className="text-6xl font-black font-serif absolute top-4 left-4 text-neo-yellow mb-0 leading-none">"</div>
          <div className="relative z-10 mt-6 pl-4 border-l-4 border-neo-yellow">
            <p className="font-bold text-lg lg:text-xl mb-4 italic">
              "The best collection of science fiction I've ever found. Their packaging is phenomenal, ensuring my rare editions arrive in pristine condition."
            </p>
            <p className="font-mono text-sm uppercase text-neo-cyan">— Alex Mercer</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="neo-card col-span-1 md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-center bg-gray-100">
             <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Join the Club</h2>
             <p className="font-mono text-sm mb-6">Get weekly updates on new arrivals and exclusive deals.</p>
             <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full border-4 border-black border-r-0 p-3 font-mono focus:outline-none focus:bg-neo-yellow transition-colors"
                />
                <button type="submit" className="bg-black text-white px-6 font-bold uppercase whitespace-nowrap hover:bg-neo-red transition-colors border-4 border-black border-l-0">
                  Subscribe
                </button>
             </form>
        </div>

      </div>
    </div>
  );
}
