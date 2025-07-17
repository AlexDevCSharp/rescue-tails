// src/components/HelpButtons.tsx
import { Link } from "react-router-dom";

const helpOptions = [
  {
    label: "Donate",
    description: "Support animals with food, shelter, and care.",
    to: "/support",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    label: "Volunteer",
    description: "Join our mission and help on the ground.",
    to: "/support",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    label: "Adopt",
    description: "Give an animal a second chance and a loving home.",
    to: "/posts",
    color: "bg-green-500 hover:bg-green-600",
  },
];

const HelpButtons = () => {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">How to help</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {helpOptions.map((option) => (
            <div
              key={option.label}
              className="rounded-xl shadow-md bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{option.label}</h3>
                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
              </div>
              <Link
                to={option.to}
                className={`text-center text-white py-2 px-4 rounded-lg font-medium transition ${option.color}`}
              >
                {option.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpButtons;
