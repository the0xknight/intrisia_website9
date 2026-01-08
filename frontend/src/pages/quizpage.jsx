import React, { useState, useEffect } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What type of tasks do you enjoy the most?",
      options: [
        "Solving technical problems",
        "Helping others",
        "Designing or creating",
        "Managing people or projects",
      ],
    },
    {
      question: "Which school subject did you enjoy most?",
      options: [
        "Maths or Science",
        "Biology or Psychology",
        "Art or Literature",
        "Business Studies or Economics",
      ],
    },
    {
      question: "How do you usually solve problems?",
      options: [
        "Analyze logically",
        "Understand emotions",
        "Think creatively",
        "Organize efficiently",
      ],
    },
  ];
  const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  //const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSelect = (qIndex, option) => {
    const updated = [...answers];
    updated[qIndex] = option;
    setAnswers(updated);
  };

  const getSuggestion = () => {
    const choice = answers.join(" ");
    if (choice.includes("technical") || choice.includes("Maths"))
      return "Engineering / Technology";
    if (choice.includes("Helping") || choice.includes("Biology"))
      return "Healthcare / Psychology";
    if (choice.includes("Designing") || choice.includes("Art"))
      return "Design / Media / Arts";
    if (choice.includes("Managing") || choice.includes("Business"))
      return "Business / Management";
    return "Mixed Interests – Explore various domains!";
  };

  const submit = () => {
    const suggestion = getSuggestion();
    fetch(`${base}/api/quiz/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, suggestion }),
    })
      .then((res) => res.json())
      .then(() => {
        setShowResult(true);
        loadHistory();
      })
      .catch((err) => console.error(err));
  };

  const loadHistory = () => {
    fetch(`${base}/api/quiz/history`)
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Career Interest Quiz
        </h1>

        {!showResult ? (
          <div className="space-y-8">
            {questions.map((q, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-2xl">
                <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
                <div className="grid gap-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(index, opt)}
                      className={`p-3 rounded-xl border ${
                        answers[index] === opt
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-blue-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={submit}
                className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition"
              >
                Show My Career Path
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center bg-white p-10 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Your Ideal Career Path Might Be:
            </h2>
            <p className="text-xl text-blue-700 font-semibold">
              {getSuggestion()}
            </p>
            <button
              onClick={() => setShowResult(false)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Retake Quiz
            </button>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Past Results</h2>
          <div className="space-y-3">
            {Array.isArray(history) &&
              history.map((h) => (
                <div key={h._id} className="p-3 bg-white rounded shadow-sm">
                  <div className="text-sm text-gray-600">
                    {h.created_at
                      ? new Date(h.created_at).toLocaleString()
                      : "Unknown date"}
                  </div>
                  <div className="font-medium">
                    Suggestion: {h.suggestion}
                  </div>
                  <div className="text-sm text-gray-700">
                    Answers: {Array.isArray(h.answers) ? h.answers.join(" | ") : ""}
                  </div>
                </div>
              ))}

            {(!Array.isArray(history) || history.length === 0) && (
              <div className="text-gray-600">No past results</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
