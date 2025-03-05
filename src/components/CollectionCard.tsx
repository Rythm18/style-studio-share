
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CollectionCardProps {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  owner: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  likes: number;
  comments: number;
  className?: string;
}

export const CollectionCard = ({
  id,
  title,
  description,
  imageUrls,
  owner,
  likes,
  comments,
  className,
}: CollectionCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(likes);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLocalLikes(isLiked ? localLikes - 1 : localLikes + 1);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <Link 
      to={`/collection/${id}`}
      className={cn(
        "block rounded-lg overflow-hidden hover-lift bg-white",
        className
      )}
    >
      <div className="aspect-[4/5] relative overflow-hidden group">
        <div className={cn(
          "absolute inset-0 flex items-center justify-center bg-wardrobe-200",
          isLoaded ? "opacity-0" : "opacity-100"
        )}>
          <div className="w-8 h-8 border-2 border-wardrobe-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <img
          src={imageUrls[0]}
          alt={title}
          className={cn(
            "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out-expo",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {imageUrls.length > 1 && (
          <div className="absolute bottom-3 right-3 flex space-x-1">
            {imageUrls.slice(0, 3).map((_, index) => (
              <div 
                key={index} 
                className={cn(
                  "w-1.5 h-1.5 rounded-full bg-white/70",
                  index === 0 ? "opacity-100" : "opacity-50"
                )}
              ></div>
            ))}
            {imageUrls.length > 3 && (
              <div className="text-xs text-white/90">+{imageUrls.length - 3}</div>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img 
            src={owner.avatarUrl} 
            alt={owner.name}
            className="w-6 h-6 rounded-full object-cover mr-2"
          />
          <span className="text-sm text-wardrobe-700">{owner.name}</span>
        </div>
        
        <h3 className="font-display font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-wardrobe-600 line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleLike} 
              className="flex items-center text-sm text-wardrobe-700 group/btn"
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              <Heart className={cn(
                "w-4 h-4 mr-1.5 transition-colors", 
                isLiked ? "fill-red-500 text-red-500" : "group-hover/btn:text-red-500"
              )} />
              {localLikes}
            </button>
            <button 
              className="flex items-center text-sm text-wardrobe-700 group/btn"
              aria-label="Comment"
            >
              <MessageCircle className="w-4 h-4 mr-1.5 group-hover/btn:text-blue-500 transition-colors" />
              {comments}
            </button>
          </div>
          
          <button
            className="text-wardrobe-600 hover:text-wardrobe-900 transition-colors"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
