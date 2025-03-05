
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Bookmark, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialActionsProps {
  id: string;
  type: 'collection' | 'item' | 'comment';
  likes: number;
  comments?: number;
  isLiked?: boolean;
  isSaved?: boolean;
  onComment?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SocialActions = ({
  id,
  type,
  likes,
  comments = 0,
  isLiked: initialIsLiked = false,
  isSaved: initialIsSaved = false,
  onComment,
  className,
  size = 'md',
}: SocialActionsProps) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isSaved, setIsSaved] = useState(initialIsSaved);
  const [localLikes, setLocalLikes] = useState(likes);
  
  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4.5 w-4.5',
    lg: 'h-5 w-5',
  };
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLocalLikes(isLiked ? localLikes - 1 : localLikes + 1);
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center space-x-4 sm:space-x-6">
        <button 
          onClick={handleLike}
          className="group flex items-center focus:outline-none"
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <Heart 
            className={cn(
              iconSizes[size],
              "mr-1.5 transition-colors",
              isLiked 
                ? "fill-red-500 text-red-500" 
                : "text-wardrobe-700 group-hover:text-red-500"
            )} 
          />
          <span className={cn(
            textSizes[size],
            "font-medium",
            isLiked ? "text-red-500" : "text-wardrobe-700"
          )}>
            {localLikes}
          </span>
        </button>
        
        {type !== 'comment' && (
          <button 
            onClick={onComment}
            className="group flex items-center focus:outline-none"
            aria-label="Comment"
          >
            <MessageCircle 
              className={cn(
                iconSizes[size],
                "mr-1.5 text-wardrobe-700 group-hover:text-blue-500 transition-colors"
              )} 
            />
            <span className={cn(
              textSizes[size],
              "font-medium text-wardrobe-700"
            )}>
              {comments}
            </span>
          </button>
        )}
        
        <button 
          className="group flex items-center focus:outline-none"
          aria-label="Share"
        >
          <Share2 
            className={cn(
              iconSizes[size],
              "text-wardrobe-700 group-hover:text-wardrobe-900 transition-colors"
            )} 
          />
        </button>
      </div>
      
      <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
        <button 
          onClick={handleSave}
          className="group focus:outline-none"
          aria-label={isSaved ? "Unsave" : "Save"}
        >
          <Bookmark 
            className={cn(
              iconSizes[size],
              "transition-colors",
              isSaved 
                ? "fill-wardrobe-800 text-wardrobe-800" 
                : "text-wardrobe-700 group-hover:text-wardrobe-900"
            )} 
          />
        </button>
        
        {size !== 'sm' && (
          <button 
            className="group focus:outline-none"
            aria-label="Report"
          >
            <Flag 
              className={cn(
                iconSizes[size],
                "text-wardrobe-700 group-hover:text-wardrobe-900 transition-colors"
              )} 
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SocialActions;
