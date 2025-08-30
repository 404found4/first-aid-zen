import React from "react";

const instructions = [
  {
    title: "Keep the injured area still and supported",
    desc: "",
  },
  {
    title: "Apply ice to reduce swelling",
    desc: "",
  },
  {
    title: "Don’t try to push bones back in place",
    desc: "",
  },
  {
    title: "Seek medical attention immediately",
    desc: "",
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

export default function FracturesPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      {/* Info Banner */}
      <div className="bg-yellow-100 border border-yellow-300 rounded px-6 py-4 mb-8 flex items-center gap-3">
        <span className="text-yellow-600 text-2xl">⚠️</span>
        <span className="font-semibold text-yellow-900 text-xl">
          Immobilize the area and seek help – improper movement can worsen fractures.
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-left text-yellow-700">Quick Steps:</h1>
      <ul className="mb-10">
        {instructions.map((step, idx) => (
          <li key={idx} className="flex items-start gap-5 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-2xl mt-1">
              {idx + 1}
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl">{step.title}</div>
              {step.desc && (
                <div className="text-gray-700 text-lg">{step.desc}</div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex gap-6 mb-12">
        <button
          className="bg-green-600 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-green-700 transition"
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
          className="bg-yellow-500 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition"
          onClick={stopSpeaking}
        >
          ⏹️ Stop Voice
        </button>
      </div>

      {/* YouTube video embed */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ys0Z7zk1FM8"
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