
import { Play, Pause, Volume2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Music = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  const songs = [
    {
      id: 1,
      title: "يا غزة",
      artist: "محمد عساف",
      description: "أغنية تتغنى بجمال غزة وصمودها",
      duration: "4:32",
      category: "معاصر"
    },
    {
      id: 2,
      title: "من غزة",
      artist: "فرقة العاشقين",
      description: "لحن تراثي يحكي عن تاريخ المدينة",
      duration: "3:45",
      category: "تراثي"
    },
    {
      id: 3,
      title: "حكاية شاطئ",
      artist: "ليلى مراد",
      description: "أغنية عن ساحل غزة الجميل",
      duration: "5:12",
      category: "كلاسيكي"
    },
    {
      id: 4,
      title: "زيتون غزة",
      artist: "فرقة التراث",
      description: "أغنية شعبية عن أشجار الزيتون",
      duration: "4:18",
      category: "شعبي"
    },
    {
      id: 5,
      title: "يا مسجد عمر",
      artist: "عبد الحليم حافظ",
      description: "أغنية دينية عن الجامع العمري",
      duration: "6:22",
      category: "ديني"
    },
    {
      id: 6,
      title: "أطفال غزة",
      artist: "فيروز",
      description: "أغنية للأطفال تحكي عن الأمل",
      duration: "3:55",
      category: "أطفال"
    }
  ];

  const categories = ["الكل", "معاصر", "تراثي", "كلاسيكي", "شعبي", "ديني", "أطفال"];
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredSongs = selectedCategory === "الكل" 
    ? songs 
    : songs.filter(song => song.category === selectedCategory);

  const handlePlayPause = (songId: number) => {
    setCurrentPlaying(currentPlaying === songId ? null : songId);
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-amiri text-foreground mb-6">
            أغاني وألحان غزة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة من الأغاني والألحان التي تحكي قصة غزة وتراثها الموسيقي الغني
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
                  ? 'bg-palestine-green text-white'
                  : 'bg-white border border-palestine-green text-palestine-green hover:bg-palestine-green hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Music Player Interface */}
        <div className="mb-12 bg-gradient-to-r from-gaza-sea/10 to-gaza-olive/10 rounded-lg p-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <Volume2 className="text-gaza-sea w-6 h-6" />
            <h3 className="text-xl font-amiri text-center">مشغل الموسيقى التراثية</h3>
            <Volume2 className="text-gaza-sea w-6 h-6" />
          </div>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSongs.map((song, index) => (
            <Card 
              key={song.id} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-amiri text-foreground mb-1">
                      {song.title}
                    </CardTitle>
                    <p className="text-palestine-red font-medium">{song.artist}</p>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-sm text-muted-foreground">{song.duration}</span>
                    <Button
                      size="sm"
                      variant={currentPlaying === song.id ? "default" : "outline"}
                      onClick={() => handlePlayPause(song.id)}
                      className="rounded-full w-10 h-10 p-0"
                    >
                      {currentPlaying === song.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {song.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-gaza-gold/20 text-gaza-gold px-3 py-1 rounded-full text-sm">
                    {song.category}
                  </span>
                  {currentPlaying === song.id && (
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-palestine-red animate-pulse"></div>
                      <div className="w-1 h-4 bg-palestine-red animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-4 bg-palestine-red animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Playlist */}
        <div className="mt-16 bg-palestine-green/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-amiri font-bold text-center text-foreground mb-6">
            قائمة تشغيل مميزة
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed">
            مجموعة مختارة من أجمل الأغاني التي تحكي قصة غزة عبر التاريخ
          </p>
          <div className="text-center">
            <Button className="bg-palestine-green hover:bg-palestine-green/90 text-white px-8 py-3 hover-scale">
              استمع للقائمة الكاملة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
