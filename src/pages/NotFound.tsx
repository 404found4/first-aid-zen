import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4 text-gray-600">Oops! This page doesn’t exist.</p>
      <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
    </div>
  );
}
