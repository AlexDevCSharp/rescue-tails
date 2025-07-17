// src/pages/Calendar.tsx
const events = [
  {
    title: "Adoption Day in Kyiv",
    date: "August 24, 2024",
    description: "Meet adorable pets ready for adoption and support our shelter volunteers!",
  },
  {
    title: "Charity Market - Lviv",
    date: "September 8, 2024",
    description: "Join us for handmade goods, pet toys, and support animal care.",
  },
  {
    title: "Volunteer Meetup Online",
    date: "September 20, 2024",
    description: "Learn how to get involved and help from anywhere in the world.",
  },
];

const Calendar = () => {
  return (
    <div className="px-6 py-12 bg-white text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>

        <div className="space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100"
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
