import React from 'react';
import { Flame, Droplet, AlertCircle } from 'lucide-react';

const instructions = [
  "Cool with running water. Run cool (not cold) water over the burn for 10-20 minutes.",
  "Cover with sterile cloth. Cover the burn with a clean, dry cloth or sterile bandage.",
  "Avoid ice or ointments. Do not use ice, butter, or other home remedies on the burn."
];

const speak = (text: string) => {
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new window.SpeechSynthesisUtterance(text);
  synth.speak(utter);
};

const stopSpeaking = () => {
  window.speechSynthesis.cancel();
};

const BurnsPage = () => {
  return (
    <div className="bg-white rounded-xl p-16 shadow-sm">
      <div className="flex items-center mb-14">
        <div className="p-6 bg-blue-50 rounded-lg mr-8">
          <Flame className="w-16 h-16 text-blue-600" />
        </div>
        <div>
          <h1 className="text-6xl font-extrabold text-gray-900">Burns & Scalds</h1>
          <p className="text-3xl text-gray-600">Immediate care for thermal injuries</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-14">
        <div className="flex items-center">
          <AlertCircle className="w-10 h-10 text-blue-600 mr-4" />
          <p className="text-3xl text-blue-800 font-semibold">Cool immediately - time is critical for preventing deeper injury</p>
        </div>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Quick Steps:</h2>
          <div className="space-y-12">
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold mr-8 mt-1 text-3xl">1</span>
              <div>
                <h3 className="font-semibold text-3xl text-gray-900">Cool with running water</h3>
                <p className="text-2xl text-gray-600">Run cool (not cold) water over the burn for 10-20 minutes</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold mr-8 mt-1 text-3xl">2</span>
              <div>
                <h3 className="font-semibold text-3xl text-gray-900">Cover with sterile cloth</h3>
                <p className="text-2xl text-gray-600">Cover the burn with a clean, dry cloth or sterile bandage</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold mr-8 mt-1 text-3xl">3</span>
              <div>
                <h3 className="font-semibold text-3xl text-gray-900">Avoid ice or ointments</h3>
                <p className="text-2xl text-gray-600">Do not use ice, butter, or other home remedies on the burn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8 pt-10">
          <button
            className="bg-green-600 text-white py-5 px-12 rounded-lg hover:bg-green-700 transition-colors text-3xl"
            onClick={() => speak(instructions.join(' '))}
          >
            🎧 Voice
          </button>
          <button
            className="bg-yellow-500 text-white py-5 px-12 rounded-lg hover:bg-yellow-600 transition-colors text-3xl"
            onClick={stopSpeaking}
          >
            ⏹️ Stop Voice
          </button>
        </div>
      </div>

      {/* YouTube video embed */}
      <div className="mt-20 flex justify-center">
        <div className="w-[48rem] h-[48rem]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XGnLkUty69g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BurnsPage;