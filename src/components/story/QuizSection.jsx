import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const quizPool = [
  { emoji: "😃", word: "Happy" },
  { emoji: "😢", word: "Sad" },
  { emoji: "😡", word: "Angry" },
  { emoji: "😐", word: "Neutral" },
];

export default function QuizSection() {
  const navigate = useNavigate();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState("");

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const questions = quizPool.map((q) => {
      const isEmojiQuestion = Math.random() < 0.5;
      const options = shuffleArray(
        isEmojiQuestion
          ? quizPool.map((item) => item.word)
          : quizPool.map((item) => item.emoji)
      );

      return {
        question: q,
        display: isEmojiQuestion ? q.emoji : q.word,
        options,
        answer: isEmojiQuestion ? q.word : q.emoji,
        isEmojiQuestion,
      };
    });

    setQuizQuestions(shuffleArray(questions));
  }, []);

  const handleAnswer = (option) => {
    if (option === quizQuestions[current].answer) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Oops! Try next one.");
    }

    setTimeout(() => {
      setFeedback("");
      if (current + 1 < quizQuestions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (!quizQuestions.length) return null;

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      {/* Floating emojis */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {["🚀","⭐","❤️","🦄","🐶","🐱","🎈","🍭"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Quiz container */}
      <div className="relative z-10 max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 drop-shadow-md animate-pulse">
          📝 Quiz Time!
        </h2>

        {!showResult ? (
          <>
            {/* Question */}
            <div className={`mb-6 ${quizQuestions[current].isEmojiQuestion ? "text-6xl md:text-7xl" : "text-2xl md:text-3xl"}`}>
              {quizQuestions[current].display}
            </div>

            {/* Feedback */}
            {feedback && (
              <p className={`text-2xl font-bold mb-4 ${feedback.includes("✅") ? "text-green-600" : "text-red-600"} animate-pulse`}>
                {feedback}
              </p>
            )}

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center w-full">
              {quizQuestions[current].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-72 h-20 px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-xl rounded-3xl shadow-lg transform hover:scale-110 transition-all duration-300 active:scale-95"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <p className="text-2xl md:text-3xl font-bold text-green-600 animate-bounce">
              🎉 You scored {score} / {quizQuestions.length}!
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <button
                onClick={() => navigate("/learn")}
                className="px-6 py-3 w-44 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-3xl shadow-lg transform hover:scale-105 transition"
              >
                🧠 Back to Learn
              </button>

              <button
                onClick={() => navigate("/game")}
                className="px-6 py-3 w-44 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-3xl shadow-lg transform hover:scale-105 transition"
              >
                🎮 Retry Game
              </button>

              <button
                onClick={() => navigate("/intro")}
                className="px-6 py-3 w-44 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-3xl shadow-lg transform hover:scale-105 transition"
              >
                🏠 Home
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-30px) rotate(15deg); opacity: 1; }
          100% { transform: translateY(0) rotate(-15deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
