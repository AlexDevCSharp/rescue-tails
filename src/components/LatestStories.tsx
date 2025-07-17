// src/components/LatestStories.tsx
import { Link } from "react-router-dom";
import StoryCard from "./StoryCard";

const stories = [
  {
    image: "https://placekitten.com/300/200",
    title: "Meet Max, a playful puppy",
    description: "Max is a playful puppy who was found abandoned on the streets of Kyiv. He’s now in a shelter and needs a loving home.",
  },
  {
    image: "https://placekitten.com/301/200",
    title: "Luna needs a home",
    description: "Luna is a beautiful cat who was rescued from a war zone. She is now safe and sound, but she needs a forever home.",
  },
  {
    image: "https://placekitten.com/302/200",
    title: "Help find a home for Buddy",
    description: "Buddy is a friendly dog who was rescued from a shelter. He is now looking for a family to call his own.",
  },
  {
    image: "https://placekitten.com/303/200",
    title: "Support the shelter",
    description: "Your donation can help us provide food, shelter, and medical care to animals in need.",
  },
];

const LatestStories = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Latest stories</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>

        {/* 🔗 View All Posts Button */}
        <div className="mt-8 text-center">
          <Link to="/posts">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestStories;
