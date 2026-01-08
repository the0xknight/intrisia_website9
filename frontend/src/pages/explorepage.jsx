import React, { useState, useEffect } from "react";

const ExplorePage = () => {
  const [search, setSearch] = useState("");
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";

//  const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  useEffect(() => {
    fetch(`${base}/api/careers`)
      .then((res) => res.json())
      .then((data) => {
        setCareers(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [base]);

 
  const filteredCareers = Array.isArray(careers)
  ? careers.filter((c) =>
      c.title?.toLowerCase().includes(search.toLowerCase())
    )
  : [];


  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Explore Career Opportunities
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search a career..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center">Loading careers...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCareers.map((career, index) => (
            <div
              key={career._id || index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {career.image && (
                <img
                  src={career.image}
                  alt={career.title}
                  className="w-20 h-20 mx-auto mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-blue-700 mb-2 text-center">
                {career.title}
              </h2>
              <p className="text-gray-600 text-center">{career.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
