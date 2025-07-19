import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ImageUpload from "../components/ImageUpload";

const CreateVolunteer = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState("");

  const availableTags = ["Dog Care", "Cat Care", "Medical"];

  const handleCreate = async () => {
    try {
      await addDoc(collection(db, "volunteers"), {
        name,
        contact,
        description,
        specialty,
        tags,
        imageUrl,
        createdAt: serverTimestamp(),
      });
      window.location.href = "/volunteers";
    } catch (err) {
      console.error("Failed to create volunteer", err);
      alert("Error creating volunteer");
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Create New Volunteer</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="text"
        placeholder="Contact info (email, phone, FB)"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border rounded-lg"
        rows={4}
      />

      <input
        type="text"
        placeholder="Specialty (e.g. vet, driver)"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <div>
        <label className="block font-semibold mb-1">Tags</label>
        <select
          multiple
          value={tags}
          onChange={(e) =>
            setTags(Array.from(e.target.selectedOptions, (option) => option.value))
          }
          className="w-full p-3 border rounded-lg h-32"
        >
          {availableTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <ImageUpload onUpload={(url) => setImageUrl(url)} />

      <div className="flex justify-end">
        <button
          onClick={handleCreate}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateVolunteer;
