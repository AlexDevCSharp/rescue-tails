import { useState } from "react";
import { uploadImage } from "../utils/uploadToCloudinary";

type Props = {
  onUpload: (url: string) => void;
};

const ImageUpload = ({ onUpload }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setLoading(true);

    try {
      const url = await uploadImage(file);
      onUpload(url);
    } catch (err) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-48 h-48 object-cover rounded-lg border"
        />
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {loading && <p className="text-sm text-gray-500">Uploading...</p>}
    </div>
  );
};

export default ImageUpload;
