// src/pages/PostDetails.tsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Post = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  tags: string[];
  volunteerName: string;
  volunteerFacebook: string;
};

const mockPost: Post = {
  id: "1",
  title: "Luna needs urgent help",
  description:
    "Luna was found in an abandoned yard in Kharkiv. She is injured and in need of urgent surgery. Any support is appreciated.",
  imageUrl: "https://placekitten.com/800/400",
  createdAt: "2024-07-16",
  tags: ["Medical", "Urgent"],
  volunteerName: "Olga Pavlenko",
  volunteerFacebook: "https://facebook.com/olga.volunteer",
};

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // ❗Заглушка, позже — fetch из Firestore
    setPost(mockPost);
  }, [id]);

  if (!post) return <div className="p-6">Loading...</div>;

  return (
    <div className="px-6 py-12 bg-white text-gray-800 min-h-screen max-w-4xl mx-auto">
      <Link to="/posts" className="text-blue-600 text-sm hover:underline">
        ← Back to all posts
      </Link>

      <div className="mt-6 space-y-6">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-500 text-sm">Posted on {post.createdAt}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed">{post.description}</p>

        <div className="mt-6 border-t pt-4">
          <p className="text-sm">
            Volunteer:{" "}
            <a
              href={post.volunteerFacebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {post.volunteerName}
            </a>
          </p>
        </div>

        <div>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition">
            Help this animal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
