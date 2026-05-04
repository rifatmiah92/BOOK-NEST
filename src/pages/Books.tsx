import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import booksData from "../data/books.json";

export function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(booksData.map(b => b.category));
    return Array.from(cats);
  }, []);

  const filteredBooks = useMemo(() => {
    return booksData.filter(book => {
      const matchSearch = book.title.toLowerCase().includes(search.toLowerCase()) || 
                          book.author.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category ? book.category === category : true;
      let matchPrice = true;
      if (priceRange === "under15") matchPrice = book.price < 15;
      if (priceRange === "15to20") matchPrice = book.price >= 15 && book.price <= 20;
      if (priceRange === "over20") matchPrice = book.price > 20;

      return matchSearch && matchCategory && matchPrice;
    });
  }, [search, category, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border-b-4 border-black pb-8">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter bg-neo-yellow inline-block px-2">Library</h1>
          <p className="font-mono mt-2 font-bold">{filteredBooks.length} titles found</p>
        </div>
        
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
           {/* Search Bar - thick black border */}
          <input 
            type="text" 
            placeholder="Search title or author..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="neo-input md:w-64 focus:bg-neo-cyan/20 transition-colors"
          />
          
          <div className="flex gap-4 w-full md:w-auto">
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="neo-input !py-3 w-full md:w-auto appearance-none bg-white cursor-pointer"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
              className="neo-input !py-3 w-full md:w-auto appearance-none bg-white cursor-pointer"
            >
               <option value="">Any Price</option>
               <option value="under15">Under $15</option>
               <option value="15to20">$15 - $20</option>
               <option value="over20">Over $20</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="neo-card flex flex-col overflow-hidden group hover:-translate-y-2 relative">
            <div className="absolute top-2 right-2 bg-neo-green font-bold px-2 py-1 border-2 border-black text-sm z-10">
              ${book.price.toFixed(2)}
            </div>
            <div className="h-48 border-b-4 border-black overflow-hidden relative bg-gray-200">
              <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
               <span className="font-mono text-xs uppercase font-bold text-gray-500 mb-1">{book.category}</span>
               <h3 className="font-black text-lg leading-tight mb-1">{book.title}</h3>
               <p className="font-mono text-sm mb-4 line-clamp-1">{book.author}</p>
               
               <div className="mt-auto">
                 <Link to={`/items/${book.id}`} className="w-full block bg-white text-black border-2 border-black font-bold py-2 text-center hover:bg-black hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                    View Details
                 </Link>
               </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-20 border-4 border-black border-dashed bg-gray-50">
          <h2 className="text-2xl font-black uppercase mb-2">No Books Found</h2>
          <p className="font-mono">Adjust your filters or search query.</p>
        </div>
      )}

    </div>
  );
}
