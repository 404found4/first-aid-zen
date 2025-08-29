import React from 'react';
import { AlertTriangle, Phone, AlertCircle } from 'lucide-react';

const ChokingPage = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-orange-50 rounded-lg mr-4">
          <AlertTriangle className="w-8 h-8 text-orange-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Choking</h1>
          <p className="text-gray-600">Clear airway blockage in adults and children</p>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
          <p className="text-orange-800 font-semibold">Act quickly - choking can be life-threatening</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Steps:</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">1</span>
              <div>
                <h3 className="font-semibold text-gray-900">Encourage coughing</h3>
                <p className="text-gray-600">If the person can cough, encourage them to continue coughing</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">2</span>
              <div>
                <h3 className="font-semibold text-gray-900">Give back blows</h3>
                <p className="text-gray-600">Lean person forward and give 5 sharp back blows between shoulder blades</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">3</span>
              <div>
                <h3 className="font-semibold text-gray-900">Perform abdominal thrusts</h3>
                <p className="text-gray-600">If back blows don't work, perform 5 abdominal thrusts (Heimlich maneuver)</p>
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

export default ChokingPage;