
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';

const Music = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songs = [
    {
      id: 1,
      title: "Ya Gaza",
      artist: "Mohammed Assaf",
      description: "A song celebrating Gaza's beauty and resilience",
      duration: "4:32",
      category: "Contemporary",
      audioFile: "/audio/ya-gaza.mp3" // ضع ملفك الصوتي في مجلد public/audio/
    },
    {
      id: 2,
      title: "From Gaza",
      artist: "Al-Ashiqeen Band",
      description: "A traditional melody telling the city's history",
      duration: "3:45",
      category: "Traditional",
      audioFile: "/audio/from-gaza.mp3"
    },
    {
      id: 3,
      title: "Shore Story",
      artist: "Leila Mourad",
      description: "A song about Gaza's beautiful coastline",
      duration: "5:12",
      category: "Classic",
      audioFile: "/audio/shore-story.mp3"
    },
    {
      id: 4,
      title: "Gaza Olives",
      artist: "Heritage Band",
      description: "A folk song about olive trees",
      duration: "4:18",
      category: "Folk",
      audioFile: "/audio/gaza-olives.mp3"
    },
    {
      id: 5,
      title: "Ya Masjid Omar",
      artist: "Abdel Halim Hafez",
      description: "A religious song about the Omari Mosque",
      duration: "6:22",
      category: "Religious",
      audioFile: "/audio/ya-masjid-omar.mp3"
    },
    {
      id: 6,
      title: "Children of Gaza",
      artist: "Fairuz",
      description: "A children's song about hope",
      duration: "3:55",
      category: "Children",
      audioFile: "/audio/children-of-gaza.mp3"
    }
  ];

  const categories = ["All", "Contemporary", "Traditional", "Classic", "Folk", "Religious", "Children"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSongs = selectedCategory === "All" 
    ? songs 
    : songs.filter(song => song.category === selectedCategory);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = (songId: number) => {
    const song = songs.find(s => s.id === songId);
    if (!song || !audioRef.current) return;

    if (currentPlaying === songId && isPlaying) {
      // Pause current song
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Play new song or resume
      if (currentPlaying !== songId) {
        audioRef.current.src = song.audioFile;
        setCurrentPlaying(songId);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      audioRef.current.volume = newMuted ? 0 : volume;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const playNext = () => {
    if (currentPlaying) {
      const currentIndex = songs.findIndex(s => s.id === currentPlaying);
      const nextIndex = (currentIndex + 1) % songs.length;
      handlePlayPause(songs[nextIndex].id);
    }
  };

  const playPrevious = () => {
    if (currentPlaying) {
      const currentIndex = songs.findIndex(s => s.id === currentPlaying);
      const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
      handlePlayPause(songs[prevIndex].id);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      playNext();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentPlaying]);

  const currentSong = songs.find(s => s.id === currentPlaying);

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

        {/* Audio Player */}
        <audio ref={audioRef} className="hidden" />

        {/* Current Playing Song */}
        {currentSong && (
          <div className="mb-12 bg-gradient-to-r from-gaza-sea/10 to-gaza-olive/10 rounded-lg p-8 animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{currentSong.title}</h3>
              <p className="text-palestine-red font-medium">{currentSong.artist}</p>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Button
                size="sm"
                variant="outline"
                onClick={playPrevious}
                className="rounded-full w-10 h-10 p-0"
              >
                <SkipBack className="w-4 h-4" />
              </Button>

              <Button
                size="lg"
                onClick={() => handlePlayPause(currentSong.id)}
                className="rounded-full w-16 h-16 p-0 bg-palestine-green hover:bg-palestine-green/90"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </Button>

              <Button
                size="sm"
                variant="outline"
                onClick={playNext}
                className="rounded-full w-10 h-10 p-0"
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleMute}
                className="w-8 h-8 p-0"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </Button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSongs.map((song, index) => (
            <Card 
              key={song.id} 
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale ${
                currentPlaying === song.id ? 'ring-2 ring-palestine-green' : ''
              }`}
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
                      variant={currentPlaying === song.id && isPlaying ? "default" : "outline"}
                      onClick={() => handlePlayPause(song.id)}
                      className="rounded-full w-10 h-10 p-0"
                    >
                      {currentPlaying === song.id && isPlaying ? (
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
                  {currentPlaying === song.id && isPlaying && (
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
            <Button 
              onClick={() => handlePlayPause(songs[0].id)}
              className="bg-palestine-green hover:bg-palestine-green/90 text-white px-8 py-3 hover-scale"
            >
              Listen to Full Playlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
