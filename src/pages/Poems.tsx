
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Share2, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Poems = () => {
  const [favoritePoems, setFavoritePoems] = useState<number[]>([]);

  const poems = [
    {
      id: 1,
      title: "Beloved Gaza",
      poet: "Mahmoud Darwish",
      category: "Contemporary",
      lines: [
        "O beloved Gaza, O land of dignity",
        "In your heart, history tells of heroism",
        "And in your eyes, the sea dances with light",
        "And your children dream of a bright tomorrow"
      ],
      year: "1995",
      likes: 342
    },
    {
      id: 2,
      title: "Shore of Love",
      poet: "Fadwa Tuqan",
      category: "Romantic",
      lines: [
        "On Gaza's ancient shore",
        "The waves dance with the breeze",
        "And tell tales of old love",
        "In every grain of sand, a memory"
      ],
      year: "1987",
      likes: 256
    },
    {
      id: 3,
      title: "Old City Alleys",
      poet: "Izz al-Din al-Manasra",
      category: "Traditional",
      lines: [
        "In Gaza's old alleys",
        "Memories walk with the wind",
        "Every stone tells a story",
        "And every door embraces history"
      ],
      year: "1992",
      likes: 189
    },
    {
      id: 4,
      title: "Dawn's Call",
      poet: "Ahmed Shawqi",
      category: "Religious",
      lines: [
        "From Omar's minaret the muezzin calls",
        "And dawn breaks over the city",
        "In Gaza the sun rises",
        "And illuminates the hearts of believers"
      ],
      year: "1932",
      likes: 298
    },
    {
      id: 5,
      title: "Children of Stones",
      poet: "Samih al-Qasim",
      category: "Resistance",
      lines: [
        "In Gaza's streets children play",
        "With stones and dreams",
        "Every child is a little hero",
        "Carrying the light of the future in their eyes"
      ],
      year: "1988",
      likes: 445
    },
    {
      id: 6,
      title: "Bride of the Sea",
      poet: "Nizar Qabbani",
      category: "Descriptive",
      lines: [
        "Gaza, bride of the white sea",
        "Wearing a dress of dignity",
        "And adorning her head with jasmine",
        "And singing the most beautiful melodies of freedom"
      ],
      year: "1975",
      likes: 367
    }
  ];

  const categories = ["All", "Contemporary", "Romantic", "Traditional", "Religious", "Resistance", "Descriptive"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPoems = selectedCategory === "All" 
    ? poems 
    : poems.filter(poem => poem.category === selectedCategory);

  const toggleFavorite = (poemId: number) => {
    setFavoritePoems(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Gaza Poems and Poetry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of poems and poetry celebrating Gaza's beauty and telling its eternal story
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
                  ? 'bg-gaza-gold text-white'
                  : 'bg-white border border-gaza-gold text-gaza-gold hover:bg-gaza-gold hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Poems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPoems.map((poem, index) => (
            <Card 
              key={poem.id} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gaza-olive/20 text-gaza-olive px-3 py-1 rounded-full text-sm font-medium">
                    {poem.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{poem.year}</span>
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  {poem.title}
                </CardTitle>
                <p className="text-palestine-red font-medium">{poem.poet}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gaza-sand/10 p-6 rounded-lg">
                  {poem.lines.map((line, lineIndex) => (
                    <p 
                      key={lineIndex} 
                      className="text-foreground leading-relaxed text-lg mb-2 text-center italic"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleFavorite(poem.id)}
                      className={`flex items-center space-x-2 transition-colors duration-200 ${
                        favoritePoems.includes(poem.id) 
                          ? 'text-palestine-red' 
                          : 'text-muted-foreground hover:text-palestine-red'
                      }`}
                    >
                      <Heart 
                        className={`w-5 h-5 ${favoritePoems.includes(poem.id) ? 'fill-current' : ''}`} 
                      />
                      <span>{poem.likes}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-palestine-green transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gaza-gold text-gaza-gold hover:bg-gaza-gold hover:text-white"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Full
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Poetry Competition */}
        <div className="mt-16 bg-gradient-to-r from-palestine-red/10 to-palestine-green/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-6">
            Poetry Competition
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Participate in our annual poetry competition and write a poem about beloved Gaza
          </p>
          <div className="text-center">
            <Button className="bg-gaza-gold hover:bg-gaza-gold/90 text-white px-8 py-3 hover-scale">
              Join the Competition
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poems;
