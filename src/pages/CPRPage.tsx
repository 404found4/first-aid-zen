import React from 'react';
import { Heart, Phone, AlertCircle } from 'lucide-react';

const CPRPage = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-red-50 rounded-lg mr-4">
          <Heart className="w-8 h-8 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">CPR</h1>
          <p className="text-gray-600">Cardiopulmonary resuscitation for unresponsive victims</p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
          <p className="text-red-800 font-semibold">Emergency Situation - Call 911 Immediately</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Steps:</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</span>
              <div>
                <h3 className="font-semibold text-gray-900">Check responsiveness</h3>
                <p className="text-gray-600">Tap shoulders firmly and shout "Are you okay?"</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</span>
              <div>
                <h3 className="font-semibold text-gray-900">Call for help</h3>
                <p className="text-gray-600">Call 911 and ask someone to find an AED if available</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</span>
              <div>
                <h3 className="font-semibold text-gray-900">Begin chest compressions</h3>
                <p className="text-gray-600">Push hard and fast in the center of the chest, 100-120 compressions per minute</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            🎧 Listen
          </button>
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
            📞 Call Emergency: 102
          </button>
        </div>
      </div>
    </div>
  );
};

export default CPRPage;
