import React from 'react';
import { Heart } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center mb-8">
      <div className="flex items-center gap-6 bg-white rounded-full px-6 py-3 shadow-sm border">
        <div className="flex items-center gap-2 text-blue-600">
          <Heart className="w-5 h-5" />
          <span className="font-semibold">First Aid Guide</span>
        </div>
        <div className="flex gap-4 text-sm">
          <button className="bg-blue-600 text-white px-3 py-1 rounded-full">Home</button>
          <button className="text-gray-600 hover:text-blue-600">CPR</button>
          <button className="text-gray-600 hover:text-blue-600">Choking</button>
          <button className="text-gray-600 hover:text-blue-600">Burns</button>
          <button className="text-gray-600 hover:text-blue-600">Bleeding</button>
          <button className="text-gray-600 hover:text-blue-600">Fractures</button>
          <button className="text-gray-600 hover:text-blue-600">Heart & Stroke</button>
          <button className="text-gray-600 hover:text-blue-600">Poisoning</button>
          <button className="text-gray-600 hover:text-blue-600">Seizures</button>
          <button className="text-gray-600 hover:text-blue-600">Crisis Mode</button>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;