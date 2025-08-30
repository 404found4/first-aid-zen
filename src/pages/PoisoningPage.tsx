import React from "react";

const steps = [
  {
    title: "Call poison control or emergency services immediately",
    desc: "Get professional help as soon as possible.",
  },
  {
    title: "Don’t induce vomiting unless advised",
    desc: "Only do so if instructed by a medical professional.",
  },
  {
    title: "Move person to fresh air if inhaled",
    desc: "Ensure the person is breathing clean air.",
  },
  {
    title: "Keep containers or labels for doctors",
    desc: "Bring packaging or labels to help identify the poison.",
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

export default function PoisoningPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Info Banner */}
      <div className="bg-blue-100 border border-blue-200 rounded px-6 py-4 mb-8 flex items-center gap-3">
        <span className="text-blue-600 text-2xl">💡</span>
        <span className="font-semibold text-blue-900 text-xl">
          Act quickly – time is critical for preventing serious harm from poisoning.
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-left text-purple-700">Quick Steps:</h1>
      <ul className="mb-10">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-5 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-2xl mt-1">
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
            src="https://www.youtube.com/embed/S5qK35nCyeA"
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