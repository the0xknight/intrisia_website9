import React, { useEffect, useState } from "react";

const Roadmap = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  // Load roadmaps
  const loadRoadmaps = () => {
    fetch(`${base}/api/roadmaps`)
      .then((res) => res.json())
      .then((data) => setRoadmaps(data))
      .catch((err) => console.error("Error loading roadmaps:", err));
  };

  useEffect(() => {
    loadRoadmaps();
  }, []);

  // Mark step as completed
  const markComplete = async (careerKey, stepIndex) => {
    try {
      await fetch(`${base}/api/roadmaps/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          career_key: careerKey,
          step_index: stepIndex
        })
      });

      // reload roadmaps after update
      loadRoadmaps();
    } catch (err) {
      console.error("Error marking step complete:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Career Roadmaps
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {roadmaps.map((career) => {
          const totalSteps = career.steps.length;
          const completedCount = career.completed_steps.length;
          const progressPercent = Math.round(
            (completedCount / totalSteps) * 100
          );

          return (
            <div
              key={career._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              {/* Career Title */}
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                {career.career}
              </h2>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Progress: {progressPercent}%
                </p>
              </div>

              {/* Steps */}
              <ul className="space-y-3">
                {career.steps.map((step, index) => {
                  const isCompleted =
                    career.completed_steps.includes(index);

                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        {isCompleted ? (
                          <span className="text-green-600 text-lg">✔</span>
                        ) : (
                          <span className="text-gray-400 text-lg">○</span>
                        )}
                        <span
                          className={`${
                            isCompleted
                              ? "line-through text-gray-500"
                              : "text-gray-800"
                          }`}
                        >
                          {step}
                        </span>
                      </div>

                      {!isCompleted && (
                        <button
                          onClick={() =>
                            markComplete(career.career_key, index)
                          }
                          className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Mark Done
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
