import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import TagSelector from "../components/TagSelector";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [volunteer, setVolunteer] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const availableTags = [
    "Urgent",
    "Medical",
    "Food needed",
    "Adopted",
    "New Rescue",
    "Rainbow Bridge",
  ];

  const handlePublish = () => {
    console.log({
      title,
      description,
      tags,
      volunteer,
      imageUrl,
      createdAt: new Date().toISOString(),
    });

    // позже: добавить сохранение в Firestore
  };

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Create New Post</h1>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Tags */}
        <div>
        <label className="block font-semibold mb-1">Tags</label>
        <TagSelector selected={tags} onChange={setTags} options={availableTags} />
        </div>

        {/* Volunteer */}
        <div>
          <label className="block font-semibold">Volunteer</label>
          <input
            type="text"
            placeholder="Enter volunteer name"
            value={volunteer}
            onChange={(e) => setVolunteer(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2">Upload Photos</label>
          <ImageUpload onUpload={(url) => setImageUrl(url)} />
        </div>
      </div>

      {/* Actions */}
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
