import React, { useEffect, useState } from "react";

const Roadmap = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";

 // const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  useEffect(() => {
    fetch(`${base}/api/roadmaps`)
      .then((res) => res.json())
      .then((data) => setRoadmaps(data))
      .catch((err) => console.error(err));
  }, [base]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Career Roadmaps
        </h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Array.isArray(roadmaps) &&
            roadmaps.map((career, index) => (
              <div
                key={career._id || index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-4">
                  {career.career}
                </h2>

                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {Array.isArray(career.steps) &&
                    career.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                </ol>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;


/*
{Array.isArray(roadmaps) &&
  roadmaps.map((career, index) => (
    <div key={career._id || index}>
      <h2>{career.career}</h2>

      <ol>
        {Array.isArray(career.steps) &&
          career.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
      </ol>
    </div>
  ))}*/

