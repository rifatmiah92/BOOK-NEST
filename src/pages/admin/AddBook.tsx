import React, { useState } from "react";
import { toast } from "react-hot-toast";

export function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to Firestore or an API
    toast.success(`Book "${title}" added successfully!`);
    
    // Reset form
    setTitle("");
    setAuthor("");
    setPrice("");
    setDescription("");
    setCategory("");
    setCover("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 bg-neo-yellow inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000] rotate-[-1deg]">
        Add New Book
      </h1>

      <form onSubmit={handleSubmit} className="neo-card p-8 bg-white space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold mb-2 uppercase text-sm">Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="neo-input"
            />
          </div>
          <div>
            <label className="block font-bold mb-2 uppercase text-sm">Author</label>
            <input 
              type="text" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="neo-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block font-bold mb-2 uppercase text-sm">Price ($)</label>
            <input 
              type="number" 
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="neo-input"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block font-bold mb-2 uppercase text-sm">Category</label>
             <input 
               type="text" 
               value={category}
               onChange={(e) => setCategory(e.target.value)}
               required
               placeholder="e.g. Science Fiction, Biography"
               className="neo-input"
             />
          </div>
        </div>

        <div>
            <label className="block font-bold mb-2 uppercase text-sm">Cover Image URL</label>
            <input 
              type="url" 
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              required
              className="neo-input"
            />
        </div>

        <div>
          <label className="block font-bold mb-2 uppercase text-sm">Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="neo-input resize-none"
          ></textarea>
        </div>

        <div className="pt-4 border-t-4 border-black border-dashed">
           <button type="submit" className="neo-button w-full md:w-auto mt-4 !bg-neo-primary text-lg px-8">
              Save Book
           </button>
        </div>
      </form>
    </div>
  );
}
