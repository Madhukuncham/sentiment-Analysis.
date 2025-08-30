// // src/components/story/LearnSection.jsx
// import { useState } from "react";

// const flashcards = [
//   {
//     emoji: "😃",
//     emotion: "Happy",
//     example: "I got a new toy 🎁",
//     color: "bg-yellow-200",
//   },
//   {
//     emoji: "😢",
//     emotion: "Sad",
//     example: "I lost my ice cream 🍦💔",
//     color: "bg-blue-200",
//   },
//   {
//     emoji: "😡",
//     emotion: "Angry",
//     example: "My game didn’t save 😤",
//     color: "bg-red-200",
//   },
//   {
//     emoji: "😐",
//     emotion: "Neutral",
//     example: "I am doing homework ✍️",
//     color: "bg-gray-200",
//   },
// ];

// export default function LearnSection() {
//   const [flipped, setFlipped] = useState(null);

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
//       <h2 className="text-3xl font-bold text-purple-700 mb-6">
//         🎭 Learn Sentiments
//       </h2>
//       <p className="text-lg text-gray-700 mb-8">
//         Click on each card to discover the emotion!
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {flashcards.map((card, index) => (
//           <div
//             key={index}
//             className="w-48 h-64 perspective cursor-pointer"
//             onClick={() => setFlipped(index === flipped ? null : index)}
//           >
//             <div
//               className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
//                 flipped === index ? "rotate-y-180" : ""
//               }`}
//             >
//               {/* Front */}
//               <div className="absolute w-full h-full rounded-2xl shadow-lg flex items-center justify-center text-6xl font-bold bg-white backface-hidden">
//                 {card.emoji}
//               </div>

//               {/* Back */}
//               <div
//                 className={`absolute w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center ${card.color} text-center p-4 text-lg rotate-y-180 backface-hidden`}
//               >
//                 <h3 className="font-bold text-xl">{card.emotion}</h3>
//                 <p className="mt-2">{card.example}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// src/components/story/LearnSection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const flashcards = [
  { emoji: "😊", emotion: "Happy", example: "I got a new toy 🎁" },
  { emoji: "😢", emotion: "Sad", example: "I lost my balloon 🎈" },
  { emoji: "😡", emotion: "Angry", example: "Someone took my toy 😠" },
  { emoji: "😐", emotion: "Calm", example: "I am reading a book 📖" },
];

export default function LearnSection() {
  const [flipped, setFlipped] = useState(Array(flashcards.length).fill(false));
  const navigate = useNavigate();

  const toggleFlip = (index) => {
    const updated = [...flipped];
    updated[index] = !updated[index];
    setFlipped(updated);
  };

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-pink-50 via-purple-50 to-blue-50 p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 drop-shadow-md">
            🧠 Learn Sentiments
          </h2>
          <p className="text-gray-700 mb-10 text-lg md:text-xl">
            Click on each card to discover the emotion and see examples!
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {flashcards.map((card, index) => (
              <div
                key={index}
                onClick={() => toggleFlip(index)}
                className="w-36 h-52 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                {flipped[index] ? (
                  <div className="p-3">
                    <h3 className="text-lg font-semibold">{card.emotion}</h3>
                    <p className="text-gray-600 text-sm mt-2">{card.example}</p>
                  </div>
                ) : (
                  <span className="text-5xl">{card.emoji}</span>
                )}
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="mt-12">
            <button
              onClick={() => navigate("/game")}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition"
            >
              Next: Play Game 🎮
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
