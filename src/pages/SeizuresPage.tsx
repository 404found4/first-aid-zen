import React from "react";

export default function SeizuresPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Seizures</h1>
      <p className="mb-4 text-gray-700">How to respond during a seizure:</p>
      <ul className="space-y-3">
        <li className="p-3 bg-indigo-100 rounded">1. Move objects away to keep them safe.</li>
        <li className="p-3 bg-indigo-100 rounded">2. Place on side to keep airway clear.</li>
        <li className="p-3 bg-indigo-100 rounded">3. Don’t put anything in their mouth.</li>
        <li className="p-3 bg-indigo-100 rounded">4. Stay until seizure ends and help arrives.</li>
      </ul>
    </div>
  );
}
