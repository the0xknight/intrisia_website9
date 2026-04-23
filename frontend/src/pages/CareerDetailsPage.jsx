import React from "react";
import { useParams } from "react-router-dom";
import careers from "../data/careers";

const CareerDetailsPage = () => {
  const { id } = useParams();

  const career = careers.find((c) => c.id === id);

  if (!career) return <p className="text-center">Career not found</p>;

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        {career.title}
      </h1>

      <p className="text-center mb-6">{career.overview}</p>

      <Section title="Who is it for?" items={career.who_is_it_for} />

      <Section title="Opportunities" items={career.opportunities} />

      <Section title="Challenges" items={career.challenges} />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600">Skills</h2>
        <p><b>Technical:</b> {career.skills.technical.join(", ")}</p>
        <p><b>Soft:</b> {career.skills.soft.join(", ")}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600">Salary</h2>
        <p>Entry: {career.salary.entry}</p>
        <p>Average: {career.salary.average}</p>
        <p>Top: {career.salary.top}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-600">Future Scope</h2>
        <p>{career.future_scope}</p>
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
    <ul className="list-disc ml-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default CareerDetailsPage;