import React from "react";
import { Link } from "react-router-dom";
import { Heart, AlertTriangle, Flame, Droplet, Bone, Activity, Skull, Zap } from "lucide-react";

const emergencyData = [
  {
    icon: <Heart className="text-red-600" />,
    title: "CPR",
    subtitle: "Cardiopulmonary resuscitation for unresponsive victims",
    steps: ["Check responsiveness", "Call for help", "Begin chest compressions"],
    link: "/cpr",
    danger: true,
  },
  {
    icon: <AlertTriangle className="text-orange-600" />,
    title: "Choking",
    subtitle: "Clear airway blockage in adults and children",
    steps: ["Encourage coughing", "Give back blows", "Perform abdominal thrusts"],
    link: "/choking",
    danger: true,
  },
  {
    icon: <Flame className="text-yellow-500" />,
    title: "Burns & Scalds",
    subtitle: "Immediate care for thermal injuries",
    steps: ["Cool with running water", "Cover with sterile cloth", "Avoid ice or ointments"],
    link: "/burns",
    danger: false,
  },
  {
    icon: <Droplet className="text-blue-700" />,
    title: "Heavy Bleeding",
    subtitle: "Control severe bleeding and prevent shock",
    steps: ["Apply firm pressure", "Elevate the wound", "Use clean cloth/bandage"],
    link: "/bleeding",
    danger: true,
  },
  {
    icon: <Bone className="text-purple-600" />,
    title: "Fractures",
    subtitle: "Manage broken bones and prevent further injury",
    steps: ["Immobilize the limb", "Apply splint if possible", "Avoid movement"],
    link: "/fractures",
    danger: false,
  },
  {
    icon: <Activity className="text-pink-600" />,
    title: "Heart Attack & Stroke",
    subtitle: "Recognize and respond to cardiovascular emergencies",
    steps: ["Recognize symptoms", "Call emergency immediately", "Give aspirin if available"],
    link: "/heart-stroke",
    danger: true,
  },
  {
    icon: <Skull className="text-gray-800" />,
    title: "Poisoning",
    subtitle: "Emergency response for poisoning incidents",
    steps: ["Remove from source", "Call poison control", "Follow expert guidance"],
    link: "/poisoning",
    danger: false,
  },
  {
    icon: <Zap className="text-yellow-600" />,
    title: "Seizures",
    subtitle: "Keep person safe during seizure episodes",
    steps: ["Stay calm and time it", "Clear area of hazards", "Turn to side"],
    link: "/seizures",
    danger: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-200 flex flex-col items-center px-6">
      
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-white/90 rounded-2xl shadow-xl p-10 mt-10 w-full max-w-6xl">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-red-600 mb-4 drop-shadow-lg">
             Emergency First Aid Guide
          </h1>
          <p className="text-gray-800 italic mb-2">
            Clear steps. Trusted guidance. Help when it matters most.
          </p>
          <p className="text-gray-700 mb-6">
            In emergencies like CPR, choking, bleeding, or burns, every second counts. 
            This guide gives you quick, verified steps so you can act confidently.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 shadow-md">🚨 Crisis Mode</button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 shadow-md">🎧 Listen</button>
          </div>
        </div>
        <div className="w-64 h-40 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-xl shadow-lg mt-6 lg:mt-0"></div>
      </section>

      {/* Emergency Cards */}
      <section className="mt-12 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">⚡ Emergency Procedures</h2>
        <p className="text-gray-800 text-center mb-10">
          Quick access to life-saving procedures. Each guide includes step-by-step instructions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {emergencyData.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-lg p-6 flex flex-col w-80 transition transform hover:scale-105 
                ${item.danger ? "bg-red-100 border border-red-400" : "bg-blue-100 border border-blue-400"}`}
            >
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{item.icon}</span>
                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">{item.subtitle}</p>
              <h4 className="font-semibold text-gray-800 mb-1">Quick Steps:</h4>
              <ul className="list-decimal list-inside text-gray-700 text-sm mb-4">
                {item.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Link to={item.link} className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 shadow-md">
                  View Full Guide
                </Link>
                <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 shadow-md">🎧 Listen</button>
                {item.danger && (
                  <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 shadow-md">📞 Call Emergency: 911</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Emergency Section */}
      <section className="mt-16 text-center max-w-3xl">
        <p className="text-gray-800 mb-4">
          Remember: These guides supplement professional medical training. 
          Always call emergency services for serious injuries or life-threatening situations.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 shadow-md">📞 Call 911</button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 shadow-md">🚨 Crisis Mode</button>
        </div>
      </section>
    </div>
  );
}