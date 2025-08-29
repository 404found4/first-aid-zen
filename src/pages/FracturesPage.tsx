import React from "react";

export default function FracturesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fractures</h1>
      <p className="mb-4 text-gray-700">Basic steps for handling fractures:</p>
      <ul className="space-y-3">
        <li className="p-3 bg-yellow-100 rounded">1. Keep the injured area still and supported.</li>
        <li className="p-3 bg-yellow-100 rounded">2. Apply ice to reduce swelling.</li>
        <li className="p-3 bg-yellow-100 rounded">3. Don’t try to push bones back in place.</li>
        <li className="p-3 bg-yellow-100 rounded">4. Seek medical attention immediately.</li>
      </ul>
    </div>
  );
}
