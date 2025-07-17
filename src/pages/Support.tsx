// src/pages/Support.tsx
import { useState } from "react";

const Support = () => {
  const [amount, setAmount] = useState(25);

  return (
    <div className="px-6 py-12 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold">Ways to Support</h1>

        {/* Donate Section */}
        <section>
          <h2 className="text-xl font-semibold mb-1">Donate</h2>
          <p className="text-sm text-gray-600 mb-4">
            Your financial support directly impacts the lives of animals in need.
            We accept donations from Canada and the USA through secure online platforms.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="range"
              min="1"
              max="50"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm">{amount}</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg">
              Donate Now
            </button>
            <a
              href="https://gofundme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100"
            >
              GoFundMe Link
            </a>
          </div>
        </section>

        {/* Volunteer Section */}
        <section>
          <h2 className="text-xl font-semibold mb-1">Volunteer</h2>
          <p className="text-sm text-gray-600 mb-4">
            Join our team of dedicated volunteers and make a difference in animal welfare.
            Opportunities include shelter assistance, event support, and administrative tasks.
          </p>
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
            Volunteer
          </button>
        </section>

        {/* Foster Section */}
        <section>
          <h2 className="text-xl font-semibold mb-1">Foster</h2>
          <p className="text-sm text-gray-600 mb-4">
            Provide temporary care for animals awaiting adoption. Fostering offers a safe and loving environment,
            helping animals transition to permanent homes.
          </p>
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
            Foster
          </button>
        </section>

        {/* Share Section */}
        <section>
          <h2 className="text-xl font-semibold mb-1">Spread the Word</h2>
          <p className="text-sm text-gray-600 mb-4">
            Help us raise awareness by sharing our stories and campaigns on social media.
            Your voice can reach potential adopters and supporters.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
              Share on Twitter
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
              Share on Facebook
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm">
              Share on Instagram
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
