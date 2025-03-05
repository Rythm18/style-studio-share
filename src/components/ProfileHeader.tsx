
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User, Settings, Grid3X3, Bookmark, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileHeaderProps {
  user: {
    id: string;
    name: string;
    username: string;
    bio: string;
    avatarUrl: string;
    coverUrl?: string;
    followers: number;
    following: number;
    collections: number;
    isCurrentUser?: boolean;
    isFollowing?: boolean;
  };
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const [followerCount, setFollowerCount] = useState(user.followers);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(isFollowing ? followerCount - 1 : followerCount + 1);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="mb-8 animate-fade-in">
      {/* Cover Photo */}
      <div className="h-48 sm:h-64 md:h-80 w-full relative overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-wardrobe-200",
          isLoaded ? "opacity-0" : "opacity-100"
        )}></div>
        {user.coverUrl ? (
          <img
            src={user.coverUrl}
            alt=""
            className={cn(
              "w-full h-full object-cover",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={handleImageLoad}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-wardrobe-200 to-wardrobe-300"></div>
        )}
      </div>
      
      {/* Profile Info */}
      <div className="container mx-auto px-4 relative -mt-20">
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          <div className="sm:flex items-end mb-6">
            <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden shadow-md bg-wardrobe-100">
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                  <p className="text-wardrobe-500 mb-2">@{user.username}</p>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  {user.isCurrentUser ? (
                    <Button variant="outline" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button 
                        onClick={handleFollow}
                        variant={isFollowing ? "outline" : "default"}
                        className="transition-all duration-300"
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-wardrobe-700 mb-6">{user.bio}</p>
          
          <div className="flex items-center justify-between border-t pt-6">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="font-semibold">{user.collections}</div>
                <div className="text-sm text-wardrobe-500">Collections</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">{followerCount}</div>
                <div className="text-sm text-wardrobe-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">{user.following}</div>
                <div className="text-sm text-wardrobe-500">Following</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="p-2 rounded-full hover:bg-wardrobe-100 transition-colors">
                <Grid3X3 className="h-5 w-5 text-wardrobe-700" />
              </button>
              <button className="p-2 rounded-full hover:bg-wardrobe-100 transition-colors">
                <Bookmark className="h-5 w-5 text-wardrobe-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
