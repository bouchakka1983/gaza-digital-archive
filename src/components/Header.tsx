
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'تاريخ غزة', path: '/history' },
    { name: 'معرض الصور', path: '/gallery' },
    { name: 'الأغاني', path: '/music' },
    { name: 'المقالات', path: '/articles' },
    { name: 'القصائد', path: '/poems' },
    { name: 'الفيديو', path: '/videos' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gaza-sand sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-palestine-red to-palestine-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-amiri">غ</span>
            </div>
            <span className="font-amiri font-bold text-xl text-foreground">المكتبة الرقمية لغزة</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground hover:text-palestine-red transition-colors duration-200 story-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:text-palestine-red transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
