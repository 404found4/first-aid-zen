import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Activity,
  Skull,
  Zap,
} from "lucide-react";
import { emergencyData } from "./Home"; // If not exported, copy emergencyData and isRedCard here

const isRedCard = (title: string) =>
  ["CPR", "Heart Attack & Stroke", "Seizures", "Poisoning"].includes(title);

const redEmergencies = emergencyData.filter((item) => isRedCard(item.title));

const speak = (text: string) => {
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new window.SpeechSynthesisUtterance(text);
  synth.speak(utter);
};

const stopSpeaking = () => {
  window.speechSynthesis.cancel();
};

export default function CrisisPage() {
  const allSteps = redEmergencies
    .map((item) => `${item.title}. ${item.steps.join(". ")}`)
    .join(". ");

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#fff5f5] font-['Inter','Roboto','Open_Sans',sans-serif]">
      {/* Banner */}
      <div className="w-full py-10 px-4 flex items-center justify-center shadow-lg bg-gradient-to-r from-red-700 to-red-500">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight text-center">
          🚨 Crisis Procedures
        </h1>
      </div>

      {/* Cards Grid */}
      <main className="flex-1 w-full max-w-[1800px] mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10">
          {redEmergencies.map((item, idx) => (
            <div
              key={idx}
              className={`
                flex flex-col justify-between
                rounded-3xl shadow-xl
                min-h-[32rem] h-full px-14 py-12
                border-2 border-red-400
                bg-gradient-to-br from-red-100 to-white
                transition hover:shadow-2xl
                w-full
              `}
              style={{
                display: "flex",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <div>
                <div className="flex items-center gap-8 mb-8">
                  <div className="rounded-full p-6 shadow bg-red-100">
                    {React.cloneElement(item.icon, {
                      className: "w-16 h-16 text-red-600",
                    })}
                  </div>
                  <h3 className="font-bold text-4xl text-red-700">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#b91c1c] text-xl mb-3 font-medium">{item.subtitle}</p>
                <h4 className="font-semibold mb-3 text-red-700">Quick Steps:</h4>
                <ul className="list-disc list-inside text-[#b91c1c] text-lg mb-8 space-y-1">
                  {item.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <Link
                  to={item.link}
                  className="w-full text-white text-center py-4 rounded-xl font-semibold shadow transition text-xl bg-red-600 hover:bg-red-700"
                >
                  View Full Guide
                </Link>
                <button
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold shadow hover:bg-green-700 transition text-xl"
                  onClick={() => speak(`${item.title}. ${item.steps.join(". ")}`)}
                >
                  🎧 Listen
                </button>
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold shadow hover:from-red-700 hover:to-red-800 transition text-xl">
                  📞 Call Emergency: 102
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Voice Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-16 max-w-2xl mx-auto">
          <button
            className="flex-1 bg-red-700 text-white py-5 rounded-xl font-semibold shadow hover:bg-red-800 transition text-xl"
            onClick={() => speak(allSteps)}
          >
            🎧 Voice All
          </button>
          <button
            className="flex-1 bg-green-600 text-white py-5 rounded-xl font-semibold shadow hover:bg-green-700 transition text-xl"
            onClick={stopSpeaking}
          >
            ⏹️ Stop Voice
          </button>
        </div>
      </main>
      <footer className="mt-12 mb-4 text-center text-[#fca5a5] text-lg">
        &copy; {new Date().getFullYear()} First Aid Zen. For emergencies, always call your local emergency number.
      </footer>
    </div>
  );
}