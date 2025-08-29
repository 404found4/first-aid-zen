import React from "react";

export default function PoisoningPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Poisoning</h1>
      <p className="mb-4 text-gray-700">What to do in case of poisoning:</p>
      <ul className="space-y-3">
        <li className="p-3 bg-purple-100 rounded">1. Call poison control or emergency services immediately.</li>
        <li className="p-3 bg-purple-100 rounded">2. Don’t induce vomiting unless advised.</li>
        <li className="p-3 bg-purple-100 rounded">3. Move person to fresh air if inhaled.</li>
        <li className="p-3 bg-purple-100 rounded">4. Keep containers/labels for doctors.</li>
      </ul>
    </div>
  );
}
