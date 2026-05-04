import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          className: 'border-4 border-black font-bold uppercase rounded-none',
          style: {
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          }
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
