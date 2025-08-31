import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Intro from "./components/Intro";
import StoryMode from "./components/StoryMode";
import LearnSection from "./components/story/LearnSection";
import GameSection from "./components/story/GameSection";
import QuizSection from "./components/story/QuizSection";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/intro" />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/story" element={<StoryMode />} />
        <Route path="/learn" element={<LearnSection />} />
        <Route path="/game" element={<GameSection/>} />
        <Route path="/quiz" element={<QuizSection/>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
