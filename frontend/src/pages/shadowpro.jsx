import React, { useEffect, useState } from "react";

const professionals = [
  {
    name: "Aarav Patel",
    role: "Software Engineer at Google",
    bio: "Loves mentoring students and teaching web development.",
  },
  {
    name: "Meera Kapoor",
    role: "UX Designer at Adobe",
    bio: "Passionate about user research and design thinking.",
  },
  {
    name: "Rohan Singh",
    role: "Data Analyst at Deloitte",
    bio: "Helps students explore data-driven careers.",
  },
];

const Shadowpro = () => {
  const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";

 // const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    fetch(`${base}/api/shadow/bookings`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const requestSession = (pro) => {
    const payload = { professional: pro.name, user: "Guest User" };
    fetch(`${base}/api/shadow/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => loadBookings())
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="grow container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Shadow a Professional
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Observe and learn from industry professionals in your field of
          interest.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-10">
          {professionals.map((pro, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-700">{pro.name}</h2>
              <p className="text-gray-700 italic">{pro.role}</p>
              <p className="mt-2 text-gray-600">{pro.bio}</p>
              <button
                onClick={() => requestSession(pro)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Request Shadow Session
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Booked Sessions</h2>
          <div className="space-y-3">
            {Array.isArray(bookings) && bookings.length === 0 && (
              <div className="text-gray-600">No bookings yet</div>
            )}

            {Array.isArray(bookings) &&
              bookings.map((b) => (
                <div key={b._id} className="p-3 bg-white rounded shadow-sm">
                  <div className="font-medium">{b.professional}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shadowpro;
