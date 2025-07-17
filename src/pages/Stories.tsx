// src/pages/Stories.tsx
const stories = [
  {
    image: "https://place-puppy.com/300x200",
    alt: "Dog running",
  },
  {
    image: "https://placekitten.com/301/200",
    alt: "Cat sitting",
  },
  {
    image: "https://placekitten.com/302/200",
    alt: "Dog on beach",
  },
  {
    image: "https://placekitten.com/303/200",
    alt: "Cat sleeping",
  },
];

const Stories = () => {
  return (
    <div className="bg-white px-6 py-12 min-h-screen text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Happy Tails</h1>
        <p className="text-gray-600 mb-8">
          Read heartwarming stories of animals rescued and rehabilitated by our dedicated team and volunteers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm">
              <img
                src={story.image}
                alt={story.alt}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
