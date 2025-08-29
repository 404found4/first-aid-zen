import React from "react";

export default function BleedingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bleeding</h1>
      <p className="mb-4 text-gray-700">How to stop bleeding quickly and safely:</p>
      <ul className="space-y-3">
        <li className="p-3 bg-red-100 rounded">1. Apply firm, direct pressure with a clean cloth.</li>
        <li className="p-3 bg-red-100 rounded">2. Keep pressing until the bleeding stops.</li>
        <li className="p-3 bg-red-100 rounded">3. If severe, elevate the injured part above the heart.</li>
        <li className="p-3 bg-red-100 rounded">4. Seek medical help if bleeding doesn’t stop.</li>
      </ul>
    </div>
  );
}
