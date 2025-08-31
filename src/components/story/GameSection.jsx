import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const emotions = [
  { emoji: "😡", word: "Angry" },
  { emoji: "😢", word: "Sad" },
  { emoji: "😃", word: "Happy" },
  { emoji: "😐", word: "Neutral" },
];

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function GameSection() {
  const [matches, setMatches] = useState({});
  const [score, setScore] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [shuffledWords, setShuffledWords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Shuffle words when component mounts
    setShuffledWords(shuffleArray(emotions.map((e) => e.word)));
  }, []);

  const handleDrop = (e, emoji) => {
    const word = e.dataTransfer.getData("text");
    if (word === emotions.find((item) => item.emoji === emoji).word) {
      setMatches((prev) => ({ ...prev, [emoji]: word }));
      setScore((prev) => prev + 1);
    } else {
      alert("❌ Oops! Try again.");
    }
  };

  useEffect(() => {
    if (score === emotions.length) {
      setConfetti(true);
      const timer = setTimeout(() => setConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [score]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-100 via-blue-100 to-purple-100 p-6 overflow-hidden">
      <div className="max-w-5xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 drop-shadow-md">
          🎮 Match the Emojis!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Drag the correct word to its matching emoji.
        </p>
        <p className="font-bold text-xl text-purple-600 mb-6">Score: {score}</p>

        <div className="flex flex-col md:flex-row w-full h-full justify-around items-center gap-12">
          {/* Emojis */}
          <div className="flex flex-col gap-6">
            {emotions.map((item) => (
              <div
                key={item.emoji}
                className={`w-32 h-32 flex items-center justify-center rounded-3xl shadow-lg text-6xl bg-white border-2 border-dashed cursor-pointer transition-all duration-300 ${
                  matches[item.emoji]
                    ? "border-green-500 bg-green-200 scale-105 animate-pulse"
                    : "hover:scale-105 hover:shadow-xl"
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, item.emoji)}
              >
                {item.emoji}
              </div>
            ))}
          </div>

          {/* Words (shuffled) */}
          <div className="flex flex-col gap-6">
            {shuffledWords.map((word) => (
              <div
                key={word}
                className="w-32 h-14 flex items-center justify-center rounded-xl shadow-md text-lg font-bold cursor-grab bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:scale-105 transform transition duration-300 active:scale-95"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text", word)}
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Confetti */}
        {confetti && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <p className="text-6xl animate-bounce">🎉🎊🎉</p>
          </div>
        )}

        {/* Buttons for navigation */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <button
            onClick={() => navigate("/learn")}
            className="px-6 py-3 w-44 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition"
          >
            🧠 Back to Learn
          </button>

          {score === emotions.length && (
            <button
              onClick={() => navigate("/quiz")}
              className="px-6 py-3 w-44 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition"
            >
              📝 Take Quiz
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
