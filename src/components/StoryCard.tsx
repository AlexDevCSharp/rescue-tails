// src/components/StoryCard.tsx
type Props = {
  image: string;
  title: string;
  description: string;
};

const StoryCard = ({ image, title, description }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
