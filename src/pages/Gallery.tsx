
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'historical', name: 'Historical Photos' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'culture', name: 'Culture & Heritage' },
    { id: 'nature', name: 'Nature' }
  ];

  const images = [
    {
      id: 1,
      src: "/images/omari-mosque.jpg",
      title: "Great Omari Mosque",
      description: "One of the oldest mosques in Gaza",
      category: "historical"
    },
    {
      id: 2,
      src: "/images/gaza-beach.jpg",
      title: "Gaza Beach",
      description: "The beautiful Palestinian coastline",
      category: "nature"
    },
    {
      id: 3,
      src: "/images/old-city.jpg",
      title: "Old City",
      description: "Gaza's historic alleyways",
      category: "architecture"
    },
    {
      id: 4,
      src: "/images/traditional-crafts.jpg",
      title: "Traditional Crafts",
      description: "Traditional industries in Gaza",
      category: "culture"
    },
    {
      id: 5,
      src: "/images/gaza-port.jpg",
      title: "Gaza Port",
      description: "The historic port",
      category: "historical"
    },
    {
      id: 6,
      src: "/images/local-markets.jpg",
      title: "Local Markets",
      description: "Gaza's traditional markets",
      category: "culture"
    },
    {
      id: 7,
      src: "/images/sunset-gaza.jpg",
      title: "Gaza Sunset",
      description: "Beautiful sunset over Gaza",
      category: "nature"
    },
    {
      id: 8,
      src: "/images/historic-building.jpg",
      title: "Historic Building",
      description: "Traditional Palestinian architecture",
      category: "architecture"
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Gaza Photo Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of photos that tell Gaza's story through time
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === category.id
                  ? 'bg-palestine-red text-white'
                  : 'bg-white border border-palestine-red text-palestine-red hover:bg-palestine-red hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to placeholder if image not found
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Instructions for adding images */}
        <div className="mt-16 text-center bg-muted/50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">إضافة صور جديدة</h3>
          <p className="text-muted-foreground">
             <code className="bg-background px-2 py-1 rounded">public/images/</code>
            <br />
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
