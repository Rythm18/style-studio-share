
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, PlusSquare, Compass, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        scrolled 
        ? "bg-white/90 backdrop-blur-md border-b py-3 shadow-sm" 
        : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Wardrobify
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-wardrobe-100 rounded-full py-2 pl-10 pr-4 w-64 text-sm 
                focus:outline-none focus:ring-2 focus:ring-wardrobe-300 transition-all"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-wardrobe-500" />
          </div>
          
          <nav className="flex items-center space-x-5">
            <Link to="/" className="nav-link">
              <span className="sr-only">Home</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/explore" className="nav-link">
              <span className="sr-only">Explore</span>
              <Compass className="h-5 w-5 text-wardrobe-800 hover:text-black transition-colors" />
            </Link>
            <Link to="/create" className="nav-link">
              <span className="sr-only">Create</span>
              <PlusSquare className="h-5 w-5 text-wardrobe-800 hover:text-black transition-colors" />
            </Link>
            <Link to="/notifications" className="nav-link relative">
              <span className="sr-only">Notifications</span>
              <Bell className="h-5 w-5 text-wardrobe-800 hover:text-black transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </Link>
            <Link to="/profile" className="nav-link">
              <span className="sr-only">Profile</span>
              <User className="h-5 w-5 text-wardrobe-800 hover:text-black transition-colors" />
            </Link>
          </nav>
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <Search className="h-5 w-5 text-wardrobe-800" />
          <User className="h-5 w-5 text-wardrobe-800" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
