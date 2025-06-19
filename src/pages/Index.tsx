
import Hero from '@/components/Hero';
import SectionCard from '@/components/SectionCard';
import { Book, Image, Music, FileText, BookOpen, Video } from 'lucide-react';

const Index = () => {
  const sections = [
    {
      title: 'تاريخ غزة',
      description: 'تعرف على التاريخ العريق لمدينة غزة عبر العصور المختلفة',
      icon: Book,
      path: '/history',
      bgColor: 'bg-gaza-sand/10'
    },
    {
      title: 'معرض الصور',
      description: 'مجموعة مختارة من الصور التاريخية والمعاصرة لغزة',
      icon: Image,
      path: '/gallery',
      bgColor: 'bg-gaza-sea/10'
    },
    {
      title: 'الأغاني',
      description: 'أغاني وألحان تحكي قصة غزة وتراثها الموسيقي',
      icon: Music,
      path: '/music',
      bgColor: 'bg-gaza-olive/10'
    },
    {
      title: 'المقالات',
      description: 'مقالات وبحوث متخصصة حول تاريخ وثقافة غزة',
      icon: FileText,
      path: '/articles',
      bgColor: 'bg-palestine-red/10'
    },
    {
      title: 'القصائد',
      description: 'مجموعة من القصائد والشعر الذي يتغنى بجمال غزة',
      icon: BookOpen,
      path: '/poems',
      bgColor: 'bg-palestine-green/10'
    },
    {
      title: 'الفيديو',
      description: 'مقاطع فيديو توثيقية وثقافية عن غزة',
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
            <h2 className="text-4xl font-bold font-amiri text-foreground mb-6">
              رحلة في تراث غزة
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              مكتبة رقمية شاملة تجمع بين طياتها كنوز التراث الفلسطيني وتاريخ مدينة غزة العريق، 
              من خلال مجموعة متنوعة من المواد الرقمية التي توثق الهوية الثقافية الفلسطينية.
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
            <p className="text-2xl md:text-3xl font-amiri italic mb-4 leading-relaxed">
              "غزة... حكاية أرض وتاريخ، وقصة شعب لا ينحني"
            </p>
            <footer className="text-white/80 text-lg">
              من التراث الفلسطيني
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Index;
