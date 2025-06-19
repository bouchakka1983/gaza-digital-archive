
import { Play, Pause, Volume2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Music = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  const songs = [
    {
      id: 1,
      title: "Ya Gaza",
      artist: "Mohammed Assaf",
      description: "A song celebrating Gaza's beauty and resilience",
      duration: "4:32",
      category: "Contemporary"
    },
    {
      id: 2,
      title: "From Gaza",
      artist: "Al-Ashiqeen Band",
      description: "A traditional melody telling the city's history",
      duration: "3:45",
      category: "Traditional"
    },
    {
      id: 3,
      title: "Shore Story",
      artist: "Leila Mourad",
      description: "A song about Gaza's beautiful coastline",
      duration: "5:12",
      category: "Classic"
    },
    {
      id: 4,
      title: "Gaza Olives",
      artist: "Heritage Band",
      description: "A folk song about olive trees",
      duration: "4:18",
      category: "Folk"
    },
    {
      id: 5,
      title: "Ya Masjid Omar",
      artist: "Abdel Halim Hafez",
      description: "A religious song about the Omari Mosque",
      duration: "6:22",
      category: "Religious"
    },
    {
      id: 6,
      title: "Children of Gaza",
      artist: "Fairuz",
      description: "A children's song about hope",
      duration: "3:55",
      category: "Children"
    }
  ];

  const categories = ["All", "Contemporary", "Traditional", "Classic", "Folk", "Religious", "Children"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSongs = selectedCategory === "All" 
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
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Gaza Songs and Melodies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of songs and melodies that tell Gaza's story and its rich musical heritage
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
          <div className="flex items-center justify-center space-x-4">
            <Volume2 className="text-gaza-sea w-6 h-6" />
            <h3 className="text-xl text-center">Traditional Music Player</h3>
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
                    <CardTitle className="text-xl text-foreground mb-1">
                      {song.title}
                    </CardTitle>
                    <p className="text-palestine-red font-medium">{song.artist}</p>
                  </div>
                  <div className="flex items-center space-x-2">
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
          <h3 className="text-3xl font-bold text-center text-foreground mb-6">
            Featured Playlist
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed">
            A curated selection of the most beautiful songs that tell Gaza's story through history
          </p>
          <div className="text-center">
            <Button className="bg-palestine-green hover:bg-palestine-green/90 text-white px-8 py-3 hover-scale">
              Listen to Full Playlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
