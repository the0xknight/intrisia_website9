import React, { useState, useEffect } from "react";

const Quiz = () => {
  const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(null);
  

  

  /* ---------------- FETCH QUESTIONS ---------------- */
  useEffect(() => {
    fetch(`${base}/api/quiz`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Invalid quiz data format");
        }
        setQuestions(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load quiz questions");
      })
      .finally(() => setLoading(false));
  }, [base]);

  /* ---------------- HANDLE ANSWERS ---------------- */
  const handleSelect = (qIndex, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  /* ---------------- SUGGESTION LOGIC ---------------- */
  const getSuggestion = () => {
    const allAnswers = Object.values(answers).join(" ");

    if (allAnswers.includes("technical") || allAnswers.includes("Math"))
      return "Engineering / Technology";
    if (allAnswers.includes("Helping") || allAnswers.includes("Biology"))
      return "Healthcare / Psychology";
    if (allAnswers.includes("Design") || allAnswers.includes("Art"))
      return "Design / Media / Arts";
    if (allAnswers.includes("Business") || allAnswers.includes("Managing"))
      return "Business / Management";

    return "Mixed Interests – Explore multiple domains";
  };
  const submit = () => {
    console.log("Submitting quiz:", answers);
  const suggestion = getSuggestion();

  fetch(`${base}/api/quiz/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answers,
      suggestion
    }),
  })
    .then((res) => res.json())
    .then(() => {
      setShowResult(true);
      loadHistory();
    })
    .catch((err) => console.error(err));
};

  /* ---------------- SUBMIT ---------------- 
  const submit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions");
      return;
    }
    setShowResult(true);
  };
*/
  /* ---------------- UI STATES ---------------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading quiz questions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        {error}
      </div>
    );
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        No quiz questions found
      </div>
    );
  }

  /* ---------------- MAIN RENDER ---------------- */
  return (
    
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Career Interest Quiz
      </h1>

      {!showResult ? (
        <div className="space-y-8 max-w-3xl mx-auto">
          {questions.map((q, index) => (
            <div
              key={q._id || index}
              className="p-6 bg-white shadow-md rounded-2xl"
            >
              <h2 className="text-lg font-semibold mb-4">
                {q.question || "Untitled question"}
              </h2>

              <div className="grid gap-3">
                {Array.isArray(q.options) ? (
                  q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(index, opt.text)}
                      className={`p-3 rounded-xl border transition ${
                        answers[index] === opt.text
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-blue-50"
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))
                ) : (
                  <p className="text-red-500 text-sm">
                    Options missing for this question
                  </p>
                )}
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
        <div className="max-w-xl mx-auto text-center bg-white p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Your Ideal Career Path Might Be:
          </h2>
          <p className="text-xl text-blue-700 font-semibold mb-6">
            {getSuggestion()}
          </p>
          <button
            onClick={() => setShowResult(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
    
  );
};

export default Quiz;
