
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About the Library</h3>
            <p className="text-background/80 leading-relaxed">
              A comprehensive digital library dedicated to preserving and documenting the history and culture of Gaza for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/history" className="text-background/80 hover:text-background transition-colors">Gaza History</Link></li>
              <li><Link to="/gallery" className="text-background/80 hover:text-background transition-colors">Photo Gallery</Link></li>
              <li><Link to="/music" className="text-background/80 hover:text-background transition-colors">Music</Link></li>
              <li><Link to="/articles" className="text-background/80 hover:text-background transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-background/80 leading-relaxed">
              For any inquiries or contributions to the content, we welcome your contact.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Gaza Digital Library. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
