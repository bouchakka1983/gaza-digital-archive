
import Hero from '@/components/Hero';
import SectionCard from '@/components/SectionCard';
import { Book, Image, Music, FileText, BookOpen, Video } from 'lucide-react';

const Index = () => {
  const sections = [
    {
      title: 'Gaza History',
      description: 'Discover the ancient history of Gaza city through different eras',
      icon: Book,
      path: '/history',
      bgColor: 'bg-gaza-sand/10'
    },
    {
      title: 'Photo Gallery',
      description: 'A curated collection of historical and contemporary photos of Gaza',
      icon: Image,
      path: '/gallery',
      bgColor: 'bg-gaza-sea/10'
    },
    {
      title: 'Music',
      description: 'Songs and melodies that tell the story of Gaza and its musical heritage',
      icon: Music,
      path: '/music',
      bgColor: 'bg-gaza-olive/10'
    },
    {
      title: 'Articles',
      description: 'Specialized articles and research about Gaza\'s history and culture',
      icon: FileText,
      path: '/articles',
      bgColor: 'bg-palestine-red/10'
    },
    {
      title: 'Poems',
      description: 'A collection of poems and poetry celebrating the beauty of Gaza',
      icon: BookOpen,
      path: '/poems',
      bgColor: 'bg-palestine-green/10'
    },
    {
      title: 'Videos',
      description: 'Documentary and cultural video content about Gaza',
      icon: Video,
      path: '/videos',
      bgColor: 'bg-gaza-gold/10'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              A Journey Through Gaza's Heritage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive digital library that brings together treasures of Palestinian heritage and the ancient history of Gaza city, 
              through a diverse collection of digital materials documenting Palestinian cultural identity.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 bg-gaza-sand/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <SectionCard {...section} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 bg-gradient-to-r from-palestine-red to-palestine-green">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-white animate-fade-in">
            <p className="text-2xl md:text-3xl italic mb-4 leading-relaxed">
              "Gaza... a tale of land and history, a story of a people who never bow"
            </p>
            <footer className="text-white/80 text-lg">
              From Palestinian Heritage
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Index;
