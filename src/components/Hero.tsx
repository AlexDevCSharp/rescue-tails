// src/components/Hero.tsx
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md">
        <div className="relative">
          <img
            src="https://placehold.co/1000x400?text=Dog+Photo" // Заменить позже на реальное изображение из Figma
            alt="Help animals"
            className="w-full h-[300px] object-cover md:h-[400px]"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Help animals in need
            </h1>
            <p className="max-w-2xl mb-6 text-sm md:text-base">
              Rescue Tails Ukraine is a non-profit organization dedicated to helping homeless animals in Ukraine.
              We provide food, shelter, and medical care to those in need, and we work to find loving homes for every animal.
            </p>
            <Link to="/support">
              <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
