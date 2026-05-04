import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Layout } from "./components/layout/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Pages
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { BookDetails } from "./pages/BookDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AddBook } from "./pages/admin/AddBook";
import { ManageBooks } from "./pages/admin/ManageBooks";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="items" element={<Books />} />
              <Route path="items/:id" element={<BookDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              
              {/* Protected Routes */}
              <Route path="items/add" element={
                <ProtectedRoute>
                  <AddBook />
                </ProtectedRoute>
              } />
              <Route path="items/manage" element={
                <ProtectedRoute>
                  <ManageBooks />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
