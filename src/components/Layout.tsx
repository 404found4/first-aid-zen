import React from "react";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <Navigation />
      <main className="max-w-7xl mx-auto">
        {children}
      </main>
      <footer className="p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} First Aid Zen
      </footer>
    </div>
  );
}

export default Layout;