import { useState } from "react";
import { useNavigate } from "react-router-dom";

const flashcards = [
  { emoji: "😊", emotion: "Happy", example: "I got a new toy 🎁" },
  { emoji: "😢", emotion: "Sad", example: "I lost my balloon 🎈" },
  { emoji: "😡", emotion: "Angry", example: "Someone took my toy 😠" },
  { emoji: "😐", emotion: "Neutral", example: "I am reading a book 📖" },
];

const gradients = [
  "from-pink-300 via-red-200 to-yellow-200",
  "from-blue-300 via-purple-300 to-pink-200",
  "from-green-300 via-lime-200 to-yellow-300",
  "from-purple-300 via-pink-200 to-orange-200",
];

export default function LearnSection() {
  const [flipped, setFlipped] = useState(Array(flashcards.length).fill(false));
  const navigate = useNavigate();

  const toggleFlip = (index) => {
    setFlipped(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 p-6">
      <div className="max-w-5xl w-full bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4 drop-shadow-lg">
          🧠 Learn Sentiments
        </h2>
        <p className="text-gray-700 mb-8 text-lg md:text-xl">
          Click on each card to discover the emotion!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {flashcards.map((card, index) => (
            <div
              key={index}
              onClick={() => toggleFlip(index)}
              className={`w-36 h-52 rounded-xl shadow-lg cursor-pointer transform transition hover:scale-105 perspective`}
            >
              <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${flipped[index] ? "rotate-y-180" : ""}`}>
                {/* Front */}
                <div className={`absolute inset-0 flex items-center justify-center backface-hidden text-5xl rounded-xl bg-gradient-to-br ${gradients[index]} shadow-inner`}>
                  {card.emoji}
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden rotate-y-180 rounded-xl bg-white/80 shadow-lg p-2">
                  <h3 className="text-lg font-semibold text-purple-700">{card.emotion}</h3>
                  <p className="text-gray-600 text-sm mt-2">{card.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/game")}
            className="w-64 px-6 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-bold rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 hover:shadow-pink-500/50 hover:animate-bounce"
          >
            🎮 Next: Play Game
          </button>
        </div>
      </div>
    </main>
  );
}
