import { useState } from "react";
import { quizData } from "./constants/Questions";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [correctOption, setCorrectOption] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answerList, setAnswerList] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmitOption = () => {
    const currentQuestion = quizData[selectedQuestion];
    console.log(selectedOption);
    if (!selectedOption) {
      return alert("Select an option");
    }
    if (selectedOption === currentQuestion.correct) {
      setAnswerList([
        ...answerList,
        {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.correct,
          selectedOption: selectedOption,
          correct: true,
        },
      ]);
      setCorrectOption((prev) => prev + 1);
    } else {
      setAnswerList([
        ...answerList,
        {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.correct,
          selectedOption: selectedOption,
          correct: false,
        },
      ]);
    }
    setSelectedQuestion((prev) => prev + 1);
    setSelectedOption("");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {selectedQuestion < quizData.length ? (
        <div className="mt-4 bg-white/80 backdrop-blur-md w-[30rem] h-[30rem] overflow-auto rounded-lg shadow-lg flex flex-col items-center justify-between">
          <h2 className="mt-4 text-2xl font-semibold text-center">
            {quizData[selectedQuestion].question}
          </h2>
          <p className="mt-4">Question {selectedQuestion + 1}</p>
          <div className="flex flex-col items-start w-full p-16 gap-4">
            <label>
              <input
                type="radio"
                value="a"
                checked={selectedOption === "a"}
                name="options"
                onChange={handleOptionChange}
              />{" "}
              {quizData[selectedQuestion].a}
            </label>
            <label>
              <input
                type="radio"
                value="b"
                checked={selectedOption === "b"}
                name="options"
                onChange={handleOptionChange}
              />{" "}
              {quizData[selectedQuestion].b}
            </label>
            <label>
              <input
                type="radio"
                value="c"
                checked={selectedOption === "c"}
                name="options"
                onChange={handleOptionChange}
              />{" "}
              {quizData[selectedQuestion].c}
            </label>
            <label>
              <input
                type="radio"
                value="d"
                checked={selectedOption === "d"}
                name="options"
                onChange={handleOptionChange}
              />{" "}
              {quizData[selectedQuestion].d}
            </label>
          </div>
          <button
            className="w-full bg-indigo-600 text-neutral-200 p-3 rounded-b-lg"
            onClick={handleSubmitOption}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="h-[30rem] w-[40rem] overflow-auto bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Quiz Complete! Correct Answers: {correctOption}/{quizData.length}
          </h2>
          <div className="flex flex-col gap-6">
            {answerList.map((ans, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow ${
                  ans.correct ? "bg-green-200" : "bg-red-200"
                }`}
              >
                <p className="font-semibold">
                  Q{index + 1}. {ans.question}
                </p>
                <p>
                  ✅ Correct Answer:{" "}
                  <span className="font-medium">{ans.correctAnswer}</span>
                </p>
                <p>
                  📝 Your Answer:{" "}
                  <span className="font-medium">{ans.selectedOption}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
