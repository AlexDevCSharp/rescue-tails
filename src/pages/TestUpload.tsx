import { useState } from "react";
import ImageUpload from "../components/ImageUpload";

const TestUpload = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="p-8 max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Upload Image to Cloudinary</h1>
      <ImageUpload onUpload={(url) => setImageUrl(url)} />
      {imageUrl && (
        <p className="text-green-600 text-sm break-all">
          Uploaded: {imageUrl}
        </p>
      )}
    </div>
  );
};

export default TestUpload;
