import React from 'react';
import { Flame, Droplet, AlertCircle } from 'lucide-react';

const BurnsPage = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-50 rounded-lg mr-4">
          <Flame className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Burns & Scalds</h1>
          <p className="text-gray-600">Immediate care for thermal injuries</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
          <p className="text-blue-800 font-semibold">Cool immediately - time is critical for preventing deeper injury</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Steps:</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</span>
              <div>
                <h3 className="font-semibold text-gray-900">Cool with running water</h3>
                <p className="text-gray-600">Run cool (not cold) water over the burn for 10-20 minutes</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</span>
              <div>
                <h3 className="font-semibold text-gray-900">Cover with sterile cloth</h3>
                <p className="text-gray-600">Cover the burn with a clean, dry cloth or sterile bandage</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</span>
              <div>
                <h3 className="font-semibold text-gray-900">Avoid ice or ointments</h3>
                <p className="text-gray-600">Do not use ice, butter, or other home remedies on the burn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            🎧 Listen
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurnsPage;