import { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import type { Post } from "../types/Post";

type FirestorePost = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  createdAt: Timestamp;
  // Пока volunteerName нет в базе — сделаем его заглушкой
};

const AllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await getDocs(collection(db, "posts"));
      const fetchedPosts: Post[] = snapshot.docs.map((doc) => {
        const data = doc.data() as FirestorePost;

        return {
          id: doc.id,
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          tags: data.tags,
          createdAt: data.createdAt.toDate(),
          volunteerName: "", // 👈 временная заглушка
        };
      });

      // Sort by date descending
      fetchedPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">All Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow rounded-xl overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">
                {post.createdAt.toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 line-clamp-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
