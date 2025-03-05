
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Grid3X3, Bookmark, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/ProfileHeader';
import WardrobeItem from '@/components/WardrobeItem';
import CollectionCard from '@/components/CollectionCard';

// Mock data
const mockUser = {
  id: '101',
  name: 'Alex Morgan',
  username: 'alex_style',
  bio: 'Fashion enthusiast and minimalist. Sharing my personal style journey and curated collections.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&h=120&crop=faces&fit=crop',
  coverUrl: 'https://images.unsplash.com/photo-1506513083865-e0c7d7128fe3?q=80&auto=format&fit=crop',
  followers: 1204,
  following: 387,
  collections: 8,
  isCurrentUser: false,
  isFollowing: false
};

const collections = [
  {
    id: '1',
    title: 'Summer Essentials',
    description: 'My go-to pieces for the warm season. Light fabrics and versatile colors.',
    imageUrls: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      'https://images.unsplash.com/photo-1572562591291-1b5b0241274d',
      'https://images.unsplash.com/photo-1576993537667-c6c9874b0a32',
    ],
    owner: {
      id: '101',
      name: 'Alex Morgan',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&h=120&crop=faces&fit=crop'
    },
    likes: 342,
    comments: 28
  },
  {
    id: '2',
    title: 'Office Chic',
    description: 'Professional attire that doesn\'t compromise on style. From meetings to after-work events.',
    imageUrls: [
      'https://images.unsplash.com/photo-1593795899768-947c4929449d',
      'https://images.unsplash.com/photo-1532453288556-3f5c1a54e575',
      'https://images.unsplash.com/photo-1607628347903-1cdd2e692833',
    ],
    owner: {
      id: '101',
      name: 'Alex Morgan',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&h=120&crop=faces&fit=crop'
    },
    likes: 215,
    comments: 14
  },
];

const items = [
  {
    id: '101',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    title: 'Classic White Shirt',
    brand: 'Essentials',
    tags: ['minimal', 'versatile', 'classic'],
    likes: 423
  },
  {
    id: '102',
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    title: 'High Waist Jeans',
    brand: 'Denim Co',
    tags: ['denim', 'casual', 'versatile'],
    likes: 351
  },
  {
    id: '103',
    imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    title: 'Leather Jacket',
    brand: 'Urban Outfitters',
    tags: ['statement', 'outerwear', 'leather'],
    likes: 289
  },
  {
    id: '104',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    title: 'Cashmere Sweater',
    brand: 'Moda',
    tags: ['winter', 'luxury', 'knitwear'],
    likes: 245
  },
  {
    id: '105',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    title: 'Striped Blouse',
    brand: 'Zara',
    tags: ['pattern', 'workwear', 'classic'],
    likes: 198
  },
  {
    id: '106',
    imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    title: 'Black Ankle Boots',
    brand: 'Steve Madden',
    tags: ['footwear', 'essential', 'black'],
    likes: 176
  }
];

const savedItems = [
  {
    id: '201',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    title: 'Wool Coat',
    brand: 'Burberry',
    tags: ['outerwear', 'winter', 'luxury'],
    likes: 512
  },
  {
    id: '202',
    imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    title: 'Silk Blouse',
    brand: 'Equipment',
    tags: ['silk', 'luxury', 'workwear'],
    likes: 423
  }
];

const Profile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("collections");
  
  // In a real app, we'd fetch the user data based on the id parameter
  const user = mockUser;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        <ProfileHeader user={user} />
        
        <div className="container mx-auto px-4 py-8">
          <Tabs 
            defaultValue="collections" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="animate-fade-in"
          >
            <div className="flex items-center justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="collections" className="flex items-center justify-center">
                  <Grid3X3 className="h-4 w-4 mr-2" />
                  Collections
                </TabsTrigger>
                <TabsTrigger value="items" className="flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V10M21 10V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V10M21 10H3M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Items
                </TabsTrigger>
                <TabsTrigger value="saved" className="flex items-center justify-center">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Saved
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="collections" className="animate-fade-in">
              {collections.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collections.map((collection) => (
                    <CollectionCard 
                      key={collection.id}
                      id={collection.id}
                      title={collection.title}
                      description={collection.description}
                      imageUrls={collection.imageUrls}
                      owner={collection.owner}
                      likes={collection.likes}
                      comments={collection.comments}
                    />
                  ))}
                  
                  {user.isCurrentUser && (
                    <div className="flex items-center justify-center bg-wardrobe-50 border-2 border-dashed border-wardrobe-200 rounded-lg aspect-[4/5] hover:border-wardrobe-300 transition-colors">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-wardrobe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="font-medium mb-2">Create Collection</h3>
                        <p className="text-sm text-wardrobe-500 mb-4">Organize and showcase your style</p>
                        <Button size="sm">Create Now</Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-wardrobe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Grid3X3 className="h-6 w-6 text-wardrobe-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Collections Yet</h3>
                  <p className="text-wardrobe-500 mb-6 max-w-md mx-auto">
                    {user.isCurrentUser 
                      ? "Start organizing your wardrobe by creating your first collection."
                      : `${user.name} hasn't created any collections yet.`
                    }
                  </p>
                  {user.isCurrentUser && (
                    <Button>Create Collection</Button>
                  )}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="items" className="animate-fade-in">
              {items.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {items.map((item) => (
                    <WardrobeItem 
                      key={item.id}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      brand={item.brand}
                      tags={item.tags}
                      likes={item.likes}
                    />
                  ))}
                  
                  {user.isCurrentUser && (
                    <div className="flex items-center justify-center bg-wardrobe-50 border-2 border-dashed border-wardrobe-200 rounded-lg aspect-[3/4] hover:border-wardrobe-300 transition-colors">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-wardrobe-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="text-sm font-medium mb-1">Add Item</h3>
                        <p className="text-xs text-wardrobe-500">Upload a new wardrobe item</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-wardrobe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V10M21 10V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V10M21 10H3M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Items Yet</h3>
                  <p className="text-wardrobe-500 mb-6 max-w-md mx-auto">
                    {user.isCurrentUser 
                      ? "Start building your digital wardrobe by adding your first item."
                      : `${user.name} hasn't added any items yet.`
                    }
                  </p>
                  {user.isCurrentUser && (
                    <Button>Add Item</Button>
                  )}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="saved" className="animate-fade-in">
              {savedItems.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {savedItems.map((item) => (
                    <WardrobeItem 
                      key={item.id}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      brand={item.brand}
                      tags={item.tags}
                      likes={item.likes}
                      isLiked={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-wardrobe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bookmark className="h-6 w-6 text-wardrobe-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Saved Items</h3>
                  <p className="text-wardrobe-500 max-w-md mx-auto">
                    {user.isCurrentUser 
                      ? "Bookmark items you love to save them for inspiration."
                      : `${user.name} hasn't saved any items yet.`
                    }
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
