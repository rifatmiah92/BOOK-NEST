import { useState } from "react";
import booksData from "../../data/books.json";
import { toast } from "react-hot-toast";
import { Edit, Trash2 } from "lucide-react";

export function ManageBooks() {
  const [books, setBooks] = useState(booksData);

  const handleDelete = (id: string) => {
    setBooks(books.filter(b => b.id !== id));
    toast.success("Book deleted successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter bg-neo-cyan inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_#000]">
          Manage Books
        </h1>
        <p className="font-mono font-bold text-lg">{books.length} Books</p>
      </div>

      <div className="neo-card bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white font-mono text-sm uppercase">
                <th className="p-4 border-b-4 border-black border-r-4 border-r-white w-16">ID</th>
                <th className="p-4 border-b-4 border-black border-r-4 border-r-white">Title</th>
                <th className="p-4 border-b-4 border-black border-r-4 border-r-white hidden md:table-cell">Author</th>
                <th className="p-4 border-b-4 border-black border-r-4 border-r-white">Price</th>
                <th className="p-4 border-b-4 border-black text-center w-24">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id} className={`font-bold ${index !== books.length - 1 ? 'border-b-4 border-black border-dashed' : ''} hover:bg-neo-yellow/20 transition-colors`}>
                  <td className="p-4 border-r-4 border-black border-dashed font-mono">{book.id}</td>
                  <td className="p-4 border-r-4 border-black border-dashed">{book.title}</td>
                  <td className="p-4 border-r-4 border-black border-dashed hidden md:table-cell">{book.author}</td>
                  <td className="p-4 border-r-4 border-black border-dashed">${book.price.toFixed(2)}</td>
                  <td className="p-4">
                    <div className="flex justify-center space-x-2">
                       <button 
                         className="p-2 border-2 border-black hover:bg-neo-primary hover:text-white transition-colors"
                         title="Edit"
                       >
                         <Edit size={16} />
                       </button>
                       <button 
                         onClick={() => handleDelete(book.id)}
                         className="p-2 border-2 border-black hover:bg-neo-red hover:text-white transition-colors"
                         title="Delete"
                       >
                         <Trash2 size={16} />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {books.length === 0 && (
          <div className="text-center py-12">
            <p className="font-bold text-xl uppercase">No books left directly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
