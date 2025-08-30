import React from "react";

const instructions = [
  {
    title: "Apply firm, direct pressure",
    desc: "Use a clean cloth or bandage and press directly on the wound.",
  },
  {
    title: "Keep pressing until the bleeding stops",
    desc: "Do not remove the cloth; add more layers if needed.",
  },
  {
    title: "Elevate if severe",
    desc: "Raise the injured part above heart level if possible.",
  },
  {
    title: "Seek medical help if bleeding doesn’t stop",
    desc: "Call emergency services or go to the hospital if bleeding continues.",
  },
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

export default function BleedingPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Info Banner */}
      <div className="bg-blue-100 border border-blue-200 rounded px-4 py-3 mb-8 flex items-center gap-2">
        <span className="text-blue-600 text-xl">💡</span>
        <span className="font-medium text-blue-900">
          Apply pressure immediately – stopping blood loss quickly is critical.
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-4 text-left">Quick Steps:</h1>
      <ul className="mb-8">
        {instructions.map((step, idx) => (
          <li key={idx} className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mt-1">
              {idx + 1}
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">{step.title}</div>
              <div className="text-gray-600 text-base">{step.desc}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mb-10">
        <button
          className="bg-green-600 text-white py-2 px-6 rounded font-semibold hover:bg-green-700 transition"
          onClick={() =>
            speak(
              instructions
                .map((s, i) => `Step ${i + 1}: ${s.title}. ${s.desc}`)
                .join(" ")
            )
          }
        >
          🎧 Voice
        </button>
        <button
          className="bg-yellow-500 text-white py-2 px-6 rounded font-semibold hover:bg-yellow-600 transition"
          onClick={stopSpeaking}
        >
          ⏹️ Stop Voice
        </button>
      </div>

      {/* YouTube video embed */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AhANvBB9hz0"
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
}