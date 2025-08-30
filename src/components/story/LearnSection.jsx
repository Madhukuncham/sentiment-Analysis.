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
import GameSection from "./GameSection";
import { useNavigate } from "react-router-dom";

const flashcards = [
  { emoji: "😊", emotion: "Happy", example: "I got a new toy 🎁" },
  { emoji: "😢", emotion: "Sad", example: "I lost my balloon 🎈" },
  { emoji: "😡", emotion: "Angry", example: "Someone took my toy 😠" },
  { emoji: "😐", emotion: "Calm", example: "I am reading a book 📖" },
];

export default function LearnSection() {
  const [flipped, setFlipped] = useState(Array(flashcards.length).fill(false));
  const navigate = useNavigate(); // add navigate

  const toggleFlip = (index) => {
    setFlipped(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 p-6">
      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4 drop-shadow-md">
          🧠 Learn Sentiments
        </h2>
        <p className="text-gray-700 mb-8">Click on each card to discover the emotion!</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {flashcards.map((card, index) => (
            <div
              key={index}
              onClick={() => toggleFlip(index)}
              className="w-36 h-52 bg-white rounded-xl shadow-md flex items-center justify-center cursor-pointer transform transition hover:scale-105 perspective"
            >
              <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute inset-0 flex items-center justify-center backface-hidden text-4xl">
                  {card.emoji}
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden rotate-y-180 p-2">
                  <h3 className="text-lg font-semibold">{card.emotion}</h3>
                  <p className="text-gray-600 text-sm mt-1">{card.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/game")}
            className="w-64 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition"
          >
            🎮 Next: Play Game
          </button>
        </div>
      </div>
    </main>
  );
}
