// import { useNavigate } from "react-router-dom";
// import LearnSection from "./story/LearnSection";

// export default function Intro({ onStart }) {
//      const navigate = useNavigate();

//   return (
//     <main className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 text-center">
//       <div className="w-full max-w-4xl px-6">
//         <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-8 drop-shadow-lg">
//           🤖 Welcome to Sentiment Analysis!
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
//           Hi, I’m <span className="font-semibold">Sam the Robot</span>! I can read feelings from sentences.
//           Let’s go on a fun journey to learn how computers understand emotions.
//         </p>
//         <button
//          onClick={() => navigate("/learn")}
//           className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white text-lg md:text-xl font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition"
//         >
//           🚀 Start Learning
//         </button>
//       </div>
//     </main>
//   );
// }
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-6">
      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-8 drop-shadow-lg">
          🤖 Welcome to Sentiment Analysis!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
          Hi, I’m <span className="font-semibold">Sam the Robot</span>! I can read feelings from sentences.
          Let’s go on a fun journey to learn how computers understand emotions.
        </p>
        <button
          onClick={() => navigate("/story")}
          className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white text-lg md:text-xl font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition"
        >
          🚀 Start Learning
        </button>
      </div>
    </main>
  );
}

