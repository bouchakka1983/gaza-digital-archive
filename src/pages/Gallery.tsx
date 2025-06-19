
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الصور' },
    { id: 'historical', name: 'صور تاريخية' },
    { id: 'architecture', name: 'العمارة' },
    { id: 'culture', name: 'الثقافة والتراث' },
    { id: 'nature', name: 'الطبيعة' }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "الجامع العمري الكبير",
      description: "أحد أقدم المساجد في غزة",
      category: "historical"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "شاطئ غزة",
      description: "الساحل الفلسطيني الجميل",
      category: "nature"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "البلدة القديمة",
      description: "أزقة غزة التاريخية",
      category: "architecture"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "الحرف التراثية",
      description: "الصناعات التقليدية في غزة",
      category: "culture"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "ميناء غزة",
      description: "الميناء التاريخي",
      category: "historical"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "الأسواق الشعبية",
      description: "أسواق غزة التراثية",
      category: "culture"
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
          <h1 className="text-5xl font-bold font-amiri text-foreground mb-6">
            معرض صور غزة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة مختارة من الصور التي تحكي قصة غزة عبر الزمن
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
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-amiri font-bold mb-1">{image.title}</h3>
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
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-amiri font-bold text-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
