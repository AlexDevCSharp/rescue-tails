// firebase.ts — уже подключён db и storage
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// TagSelector уже существует
import TagSelector from "../components/TagSelector";
import ImageUpload from "../components/ImageUpload";

import { useEffect, useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteers, setVolunteers] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  const availableTags = [
    "Urgent",
    "Medical",
    "Food needed",
    "Adopted",
    "New Rescue",
    "Rainbow Bridge",
  ];

  useEffect(() => {
    const fetchVolunteers = async () => {
      const snapshot = await getDocs(collection(db, "volunteers"));
      const names = snapshot.docs.map((doc) => doc.data().name);
      setVolunteers(names);
    };
    fetchVolunteers();
  }, []);

  const handlePublish = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        title,
        description,
        tags,
        volunteerName,
        imageUrl,
        createdAt: serverTimestamp(),
      });
      window.location.href = "/posts";
    } catch (err) {
      alert("Failed to create post");
      console.error(err);
    }
  };

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Create New Post</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full p-3 border rounded-lg"
        />

        <TagSelector selected={tags} onChange={setTags} options={availableTags} />

        <div>
          <label className="block font-semibold mb-1">Volunteer</label>
          <select
            className="w-full p-3 border rounded-lg"
            value={volunteerName}
            onChange={(e) => setVolunteerName(e.target.value)}
          >
            <option value="">Select a volunteer</option>
            {volunteers.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <ImageUpload onUpload={(url) => setImageUrl(url)} />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <button className="border px-6 py-2 rounded-lg">Preview</button>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
