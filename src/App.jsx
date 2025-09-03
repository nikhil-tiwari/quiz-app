import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import {
  easyQuestions,
  mediumQuestions,
  advancedQuestions,
} from "./constants/Questions";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-12 p-6">
      <h1 className="text-6xl font-semibold mt-12 mb-6 text-slate-900">
        Premier League Quiz
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/easy" element={<Quiz quizData={easyQuestions} />} />
        <Route path="/medium" element={<Quiz quizData={mediumQuestions} />} />
        <Route
          path="/advanced"
          element={<Quiz quizData={advancedQuestions} />}
        />
      </Routes>
    </div>
  );
}

export default App;
