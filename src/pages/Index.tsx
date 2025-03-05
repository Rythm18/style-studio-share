
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import CollectionCard from '@/components/CollectionCard';
import WardrobeItem from '@/components/WardrobeItem';
import { cn } from '@/lib/utils';

// Mock data for UI demonstration
const featuredCollections = [
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
      id: '102',
      name: 'Taylor Reed',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&h=120&crop=faces&fit=crop'
    },
    likes: 215,
    comments: 14
  },
  {
    id: '3',
    title: 'Vintage Finds',
    description: 'My favorite secondhand and vintage pieces. Sustainable fashion with history.',
    imageUrls: [
      'https://images.unsplash.com/photo-1607083688878-71749d13df6a',
      'https://images.unsplash.com/photo-1560177776-55a5dae7a001',
      'https://images.unsplash.com/photo-1612215327100-60fc5c4d7938',
    ],
    owner: {
      id: '103',
      name: 'Jordan Kim',
      avatarUrl: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=120&h=120&crop=faces&fit=crop'
    },
    likes: 189,
    comments: 31
  }
];

const trendingItems = [
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
  }
];

const popularUsers = [
  {
    id: '201',
    name: 'Olivia Chen',
    username: 'olivia_style',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&h=120&crop=faces&fit=crop',
    followers: 15467
  },
  {
    id: '202',
    name: 'Marcus Bell',
    username: 'marcus.wardrobe',
    avatarUrl: 'https://images.unsplash.com/photo-1563452965085-2e77e5bf2607?q=80&w=120&h=120&crop=faces&fit=crop',
    followers: 12893
  },
  {
    id: '203',
    name: 'Sophia Lee',
    username: 'sophiastyle',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&h=120&crop=faces&fit=crop',
    followers: 9845
  },
  {
    id: '204',
    name: 'Ethan Wright',
    username: 'ethan_fashion',
    avatarUrl: 'https://images.unsplash.com/photo-1495216875107-c6c043eb703f?q=80&w=120&h=120&crop=faces&fit=crop',
    followers: 8723
  }
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-wardrobe-50 to-white"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
              Showcase Your Style,<br />Inspire the World
            </h1>
            <p className="text-wardrobe-600 text-lg md:text-xl mb-8 animate-slide-down" style={{ animationDelay: '100ms' }}>
              Create your digital wardrobe, connect with fashion enthusiasts,
              and discover endless style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-down" style={{ animationDelay: '200ms' }}>
              <Button size="lg" className="bg-wardrobe-900 hover:bg-wardrobe-800">
                Create Your Wardrobe
              </Button>
              <Button size="lg" variant="outline">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16 md:mt-24 px-4 overflow-hidden">
          <div 
            className="grid grid-cols-5 gap-4 sm:gap-6 md:gap-8" 
            style={{ 
              transform: `translateX(${-scrollY * 0.1}px)`,
              transition: 'transform 0.1s ease-out' 
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "aspect-[3/4] rounded-lg overflow-hidden",
                  i % 2 === 0 ? "translate-y-8" : ""
                )}
              >
                <img 
                  src={trendingItems[i % trendingItems.length].imageUrl} 
                  alt="Fashion item"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Collections</h2>
            <Link to="/explore" className="flex items-center text-wardrobe-700 hover:text-wardrobe-900 transition-colors">
              <span className="mr-2">View all</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredCollections.map((collection) => (
              <CollectionCard 
                key={collection.id}
                id={collection.id}
                title={collection.title}
                description={collection.description}
                imageUrls={collection.imageUrls}
                owner={collection.owner}
                likes={collection.likes}
                comments={collection.comments}
                className="animate-zoom-in"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Items */}
      <section className="py-16 bg-wardrobe-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-wardrobe-700" />
              <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
            </div>
            <Link to="/explore" className="flex items-center text-wardrobe-700 hover:text-wardrobe-900 transition-colors">
              <span className="mr-2">View all</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingItems.map((item) => (
              <WardrobeItem 
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                brand={item.brand}
                tags={item.tags}
                likes={item.likes}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Users */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Popular Creators</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularUsers.map((user) => (
              <Link 
                key={user.id} 
                to={`/profile/${user.id}`}
                className="bg-white rounded-lg overflow-hidden hover-lift p-4 border border-wardrobe-200 animate-fade-in"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-wardrobe-500">@{user.username}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wardrobe-600">
                    {user.followers.toLocaleString()} followers
                  </span>
                  <Button variant="outline" size="sm">Follow</Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-wardrobe-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to showcase your style?</h2>
          <p className="text-wardrobe-200 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of fashion enthusiasts and create your digital wardrobe today.
          </p>
          <Button size="lg" className="bg-white text-wardrobe-900 hover:bg-wardrobe-100">
            Get Started Now
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-wardrobe-950 text-wardrobe-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="font-display text-xl font-bold text-white mb-4">Wardrobify</h3>
              <p className="max-w-xs text-sm">
                The ultimate platform to showcase your personal style, connect with fashion enthusiasts, and discover endless inspiration.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">Explore</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/explore" className="hover:text-white transition-colors">Explore</Link></li>
                  <li><Link to="/trending" className="hover:text-white transition-colors">Trending</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-wardrobe-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm mb-4 sm:mb-0">© 2023 Wardrobify. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-wardrobe-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-wardrobe-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-wardrobe-400 hover:text-white transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
