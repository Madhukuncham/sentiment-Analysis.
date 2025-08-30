import { useNavigate } from "react-router-dom";

export default function StoryMode() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      
      {/* Floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-12 h-12 bg-white/30 rounded-full animate-bounce-slow`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl w-full bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center flex flex-col items-center justify-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 drop-shadow-md animate-pulse">
          📖 Story Mode
        </h2>
        <p className="text-gray-700 mb-10 text-lg md:text-xl">
          Follow the journey: <span className="font-semibold text-purple-600">Learn → Play Game → Take Quiz</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center w-full">
          <button
            onClick={() => navigate("/learn")}
            className="w-64 px-6 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-3xl shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            🧠 Learn Section
          </button>

          <button
            onClick={() => navigate("/game")}
            className="w-64 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-3xl shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            🎮 Game Section
          </button>

          <button
            onClick={() => navigate("/quiz")}
            className="w-64 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-3xl shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            📝 Quiz Section
          </button>

          <button
            onClick={() => navigate("/intro")}
            className="w-64 px-6 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-3xl shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>

      {/* Tailwind animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
        .animate-bounce-slow {
          animation: bounce-slow infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
