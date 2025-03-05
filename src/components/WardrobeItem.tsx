
import { useState } from 'react';
import { Heart, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WardrobeItemProps {
  id: string;
  imageUrl: string;
  title: string;
  brand?: string;
  tags?: string[];
  likes: number;
  isLiked?: boolean;
  showDetails?: boolean;
  className?: string;
}

export const WardrobeItem = ({
  id,
  imageUrl,
  title,
  brand,
  tags = [],
  likes,
  isLiked: initialIsLiked = false,
  showDetails = true,
  className,
}: WardrobeItemProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [localLikes, setLocalLikes] = useState(likes);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <div 
      className={cn(
        "group relative rounded-lg overflow-hidden bg-white",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <div className={cn(
          "absolute inset-0 flex items-center justify-center bg-wardrobe-200",
          isLoaded ? "opacity-0" : "opacity-100"
        )}>
          <div className="w-6 h-6 border-2 border-wardrobe-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <img
          src={imageUrl}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out-expo",
            isHovered ? "scale-105" : "scale-100",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleImageLoad}
        />
        
        <div className={cn(
          "absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="p-4 w-full">
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3 justify-center">
                {tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white">
                    +{tags.length - 3}
                  </span>
                )}
              </div>
            )}
            
            {brand && (
              <div className="text-center mt-2">
                <span className="text-white text-xs px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                  {brand}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <button
          onClick={handleLike}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all duration-300",
            isLiked ? "bg-white/90" : "bg-black/30",
            isHovered || isLiked ? "opacity-100" : "opacity-0"
          )}
        >
          <Heart className={cn(
            "h-4 w-4 transition-colors",
            isLiked ? "fill-red-500 text-red-500" : "text-white"
          )} />
        </button>
      </div>
      
      {showDetails && (
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
          {brand && <p className="text-xs text-wardrobe-500">{brand}</p>}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center text-xs text-wardrobe-600">
              <Heart className={cn(
                "h-3 w-3 mr-1",
                isLiked ? "fill-red-500 text-red-500" : ""
              )} />
              {localLikes}
            </div>
            {tags.length > 0 && (
              <div className="flex items-center text-xs text-wardrobe-600">
                <Tag className="h-3 w-3 mr-1" />
                {tags.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WardrobeItem;
