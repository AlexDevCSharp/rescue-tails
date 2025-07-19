import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Volunteer } from "../types/Volunteer";
import VolunteerCard from "../components/VolunteerCard";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Dog Care", "Cat Care", "Medical"];

  useEffect(() => {
    const fetchVolunteers = async () => {
      const snapshot = await getDocs(collection(db, "volunteers"));
      const fetchedVolunteers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Volunteer[];

      setVolunteers(fetchedVolunteers);
    };

    fetchVolunteers();
  }, []);

  const filteredVolunteers =
    selectedTag === "All"
      ? volunteers
      : volunteers.filter((v) => v.tags.includes(selectedTag));

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Our Volunteers</h1>

      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-1 rounded-full border ${
              selectedTag === tag
                ? "bg-orange-500 text-white"
                : "text-gray-600 border-gray-300"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredVolunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
