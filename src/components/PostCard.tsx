// src/components/PostCard.tsx
type Props = {
  image: string;
};

const PostCard = ({ image }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm">
      <img
        src={image}
        alt="Post"
        className="w-full h-60 object-cover"
      />
    </div>
  );
};

export default PostCard;
