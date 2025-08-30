import React from "react";

const steps = [
  {
    title: "Call emergency services immediately",
    desc: "Dial your local emergency number as soon as possible.",
  },
  {
    title: "Keep the person calm and seated",
    desc: "Help them sit down and stay as relaxed as possible.",
  },
  {
    title: "If unconscious, start CPR",
    desc: "Begin chest compressions if the person is not breathing.",
  },
  {
    title: "For stroke: remember FAST (Face, Arms, Speech, Time)",
    desc: "Check for facial drooping, arm weakness, speech difficulty, and note the time symptoms started.",
  },
];

export default function HeartStrokePage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Info Banner */}
      <div className="bg-blue-100 border border-blue-200 rounded px-6 py-4 mb-8 flex items-center gap-3">
        <span className="text-blue-600 text-2xl">💡</span>
        <span className="font-semibold text-blue-900 text-xl">
          Act fast – immediate action can save a life in heart attack or stroke.
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-6 text-left text-pink-700">Quick Steps:</h1>
      <ul className="mb-10">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-5 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-2xl mt-1">
              {idx + 1}
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl">{step.title}</div>
              <div className="text-gray-700 text-lg">{step.desc}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* YouTube video embed */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qvf_74DM880"
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