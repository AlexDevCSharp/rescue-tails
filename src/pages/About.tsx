// src/pages/About.tsx
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Intro */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">The Heart Behind Rescue Tails Ukraine</h1>
          <p className="text-gray-600 text-lg">
            What started as a few helping hands has become a movement of compassion.
          </p>
        </section>

        {/* Image & Quote */}
        <section className="relative rounded-xl overflow-hidden shadow-md">
          <img
            src="https://placekitten.com/1000/400"
            alt="Volunteer with dog"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <p className="text-white text-xl font-medium px-6 text-center max-w-2xl">
              “Every animal deserves a second chance. One life saved is everything.”
            </p>
          </div>
        </section>

        {/* Story Blocks */}
        <section className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
            <p className="text-sm text-gray-600">
              Rescue Tails Ukraine is a volunteer-led non-profit focused on saving and supporting stray and abandoned animals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <p className="text-sm text-gray-600">
              We rescue animals, provide medical help, promote adoption, and raise awareness about animal welfare across Ukraine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Why It Matters</h3>
            <p className="text-sm text-gray-600">
              Every life matters. Our work gives hope to animals and inspires people to be part of the solution.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-50 rounded-xl py-10 px-6 shadow-inner">
          <h2 className="text-2xl font-bold mb-4">Join our mission 🐾</h2>
          <p className="text-gray-600 mb-6">Whether you donate, volunteer, or spread the word — you help save lives.</p>
          <Link to="/support">
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              How to Help
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
