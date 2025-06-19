
import { Play, Clock, Eye, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const videos = [
    {
      id: 1,
      title: "غزة: رحلة عبر التاريخ",
      description: "فيلم وثائقي يحكي تاريخ غزة من العصر الكنعاني حتى اليوم",
      duration: "45:32",
      views: 12500,
      uploadDate: "2024-01-10",
      category: "وثائقي",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "العمارة الإسلامية في غزة",
      description: "جولة مصورة في المساجد والمباني التاريخية في غزة",
      duration: "28:15",
      views: 8900,
      uploadDate: "2024-01-05",
      category: "ثقافي",
      thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "أطفال غزة يحكون",
      description: "قصص وحكايات من أطفال غزة عن مدينتهم الحبيبة",
      duration: "15:45",
      views: 15600,
      uploadDate: "2023-12-28",
      category: "اجتماعي",
      thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "الحرف التراثية في غزة",
      description: "استعراض للحرف والصناعات التقليدية في غزة",
      duration: "32:20",
      views: 6700,
      uploadDate: "2023-12-20",
      category: "تراثي",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "شواطئ غزة الساحرة",
      description: "رحلة بصرية عبر الساحل الفلسطيني الجميل",
      duration: "22:38",
      views: 11200,
      uploadDate: "2023-12-15",
      category: "طبيعي",
      thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "مهرجان التراث الغزاوي",
      description: "تغطية مصورة لمهرجان التراث السنوي في غزة",
      duration: "1:12:45",
      views: 9800,
      uploadDate: "2023-12-10",
      category: "فعاليات",
      thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["الكل", "وثائقي", "ثقافي", "اجتماعي", "تراثي", "طبيعي", "فعاليات"];

  const filteredVideos = selectedCategory === "الكل" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}ألف`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-amiri text-foreground mb-6">
            مكتبة الفيديو
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة من الأفلام الوثائقية والتقارير المصورة حول تاريخ وثقافة غزة
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === category
                  ? 'bg-gaza-sea text-white'
                  : 'bg-white border border-gaza-sea text-gaza-sea hover:bg-gaza-sea hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Video */}
        <div className="mb-16 animate-fade-in">
          <Card className="bg-white shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-palestine-red hover:bg-palestine-red/90 text-white rounded-full w-20 h-20 p-0 hover-scale"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded">
                {videos[0].duration}
              </div>
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-amiri font-bold text-foreground mb-3">
                {videos[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {videos[0].description}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Eye className="w-4 h-4" />
                    <span>{formatViews(videos[0].views)} مشاهدة</span>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(videos[0].uploadDate).toLocaleDateString('ar-SA')}</span>
                  </div>
                </div>
                <span className="bg-gaza-sea/20 text-gaza-sea px-3 py-1 rounded-full">
                  {videos[0].category}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.slice(1).map((video, index) => (
            <Card 
              key={video.id} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-palestine-red hover:bg-palestine-red/90 text-white rounded-full w-12 h-12 p-0"
                  >
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-amiri font-bold text-foreground mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Eye className="w-3 h-3" />
                      <span>{formatViews(video.views)}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  <span className="bg-gaza-olive/20 text-gaza-olive px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Channel Info */}
        <div className="mt-16 bg-gradient-to-r from-gaza-sea/10 to-gaza-olive/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-amiri font-bold text-center text-foreground mb-6">
            قناة التراث الغزاوي
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            اشترك في قناتنا لتصلك أحدث الأفلام الوثائقية والتقارير المصورة عن غزة
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse">
            <Button className="bg-palestine-red hover:bg-palestine-red/90 text-white px-8 py-3 hover-scale">
              اشترك في القناة
            </Button>
            <Button 
              variant="outline" 
              className="border-gaza-sea text-gaza-sea hover:bg-gaza-sea hover:text-white px-8 py-3 hover-scale"
            >
              شاهد كل الفيديوهات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
