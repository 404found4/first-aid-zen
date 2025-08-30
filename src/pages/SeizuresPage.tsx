import React from "react";

const steps = [
  {
    title: "Move objects away to keep them safe",
    desc: "Clear the area around the person to prevent injury.",
  },
  {
    title: "Place on side to keep airway clear",
    desc: "Gently roll them onto their side if possible.",
  },
  {
    title: "Don’t put anything in their mouth",
    desc: "Never force objects, food, or drink into their mouth.",
  },
  {
    title: "Stay until seizure ends and help arrives",
    desc: "Remain with them and offer reassurance as they recover.",
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

export default function SeizuresPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Info Banner */}
      <div className="bg-blue-100 border border-blue-200 rounded px-6 py-4 mb-8 flex items-center gap-3">
        <span className="text-blue-600 text-2xl">💡</span>
        <span className="font-semibold text-blue-900 text-xl">
          Stay calm and keep the person safe – most seizures last only a few minutes.
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-left text-indigo-700">Quick Steps:</h1>
      <ul className="mb-10">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-5 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-2xl mt-1">
              {idx + 1}
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl">{step.title}</div>
              <div className="text-gray-700 text-lg">{step.desc}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-6 mb-12">
        <button
          className="bg-green-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-green-700 transition"
          onClick={() =>
            speak(
              steps
                .map((s, i) => `Step ${i + 1}: ${s.title}. ${s.desc}`)
                .join(" ")
            )
          }
        >
          🎧 Voice
        </button>
        <button
          className="bg-yellow-500 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition"
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
            src="https://www.youtube.com/embed/1azFuq_yZpE"
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