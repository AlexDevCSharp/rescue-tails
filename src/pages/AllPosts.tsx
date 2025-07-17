// src/pages/AllPosts.tsx
import { useState } from "react";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

const mockPosts = [
  { id: 1, image: "https://placekitten.com/300/400" },
  { id: 2, image: "https://placekitten.com/301/400" },
  { id: 3, image: "https://placekitten.com/302/400" },
  { id: 4, image: "https://placekitten.com/303/400" },
  { id: 5, image: "https://placekitten.com/304/400" },
  { id: 6, image: "https://placekitten.com/305/400" },
  { id: 7, image: "https://placekitten.com/306/400" },
];

const AllPosts = () => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    tag: "",
    volunteer: "",
  });

  const handleChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="flex px-6 py-8 gap-8 bg-white">
      {/* Filters */}
      <aside className="w-full max-w-[250px] space-y-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        {["Animal Type", "Location", "Tags", "Volunteers"].map((label, i) => (
          <div key={label}>
            <label className="block mb-1 text-sm font-medium">{label}</label>
            <select
              className="w-full border rounded-md px-3 py-2 text-sm"
              value={filters[label.toLowerCase().replace(" ", "") as keyof typeof filters]}
              onChange={(e) =>
                handleChange(label.toLowerCase().replace(" ", ""), e.target.value)
              }
            >
              <option value="">Select</option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
            </select>
          </div>
        ))}
        <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md">
          Apply Filters
        </button>
      </aside>

      {/* Posts grid */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">All Posts</h1>
            <p className="text-sm text-gray-600">Explore all posts from our community</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-1 text-sm"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md">
              Adopt
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1 rounded-md">
              Volunteer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mockPosts.map((post) => (
            <PostCard key={post.id} image={post.image} />
          ))}
        </div>

        <div className="mt-8">
          <Pagination current={1} total={5} />
        </div>
      </main>
    </div>
  );
};

export default AllPosts;
