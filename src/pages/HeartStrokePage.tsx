import React from "react";

export default function HeartStrokePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Heart Attack & Stroke</h1>
      <p className="mb-4 text-gray-700">Recognize and act quickly:</p>
      <ul className="space-y-3">
        <li className="p-3 bg-pink-100 rounded">1. Call emergency services immediately.</li>
        <li className="p-3 bg-pink-100 rounded">2. Keep the person calm and seated.</li>
        <li className="p-3 bg-pink-100 rounded">3. If unconscious, start CPR.</li>
        <li className="p-3 bg-pink-100 rounded">4. For stroke: remember FAST (Face, Arms, Speech, Time).</li>
      </ul>
    </div>
  );
}
