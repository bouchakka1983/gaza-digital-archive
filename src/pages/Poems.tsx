
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Share2, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Poems = () => {
  const [favoritePoems, setFavoritePoems] = useState<number[]>([]);

  const poems = [
    {
      id: 1,
      title: "غزة الحبيبة",
      poet: "محمود درويش",
      category: "معاصر",
      lines: [
        "يا غزة الحبيبة، يا أرض الشموخ",
        "في قلبك التاريخ يحكي عن البطولة",
        "وفي عينيك البحر يرقص مع النور",
        "وأطفالك يحلمون بغد مشرق"
      ],
      year: "1995",
      likes: 342
    },
    {
      id: 2,
      title: "ساحل العشق",
      poet: "فدوى طوقان",
      category: "رومانسي",
      lines: [
        "على ساحل غزة العريق",
        "تتراقص الأمواج مع النسيم",
        "وتحكي حكايات الحب القديم",
        "في كل حبة رمل ذكرى"
      ],
      year: "1987",
      likes: 256
    },
    {
      id: 3,
      title: "أزقة البلدة القديمة",
      poet: "عز الدين المناصرة",
      category: "تراثي",
      lines: [
        "في أزقة غزة القديمة",
        "تسير الذكريات مع الرياح",
        "كل حجر يروي قصة",
        "وكل باب يحتضن تاريخ"
      ],
      year: "1992",
      likes: 189
    },
    {
      id: 4,
      title: "نداء الفجر",
      poet: "أحمد شوقي",
      category: "ديني",
      lines: [
        "من مئذنة عمر ينادي المؤذن",
        "والفجر يطل على المدينة",
        "في غزة تشرق الشمس",
        "وتضيء قلوب المؤمنين"
      ],
      year: "1932",
      likes: 298
    },
    {
      id: 5,
      title: "أطفال الحجارة",
      poet: "سميح القاسم",
      category: "مقاومة",
      lines: [
        "في شوارع غزة يلعب الأطفال",
        "بالحجارة والأحلام",
        "كل طفل بطل صغير",
        "يحمل في عينيه نور المستقبل"
      ],
      year: "1988",
      likes: 445
    },
    {
      id: 6,
      title: "عروس البحر",
      poet: "نزار قباني",
      category: "وصفي",
      lines: [
        "غزة عروس البحر الأبيض",
        "ترتدي ثوب الشموخ",
        "وتزين رأسها بالياسمين",
        "وتغني للحرية أجمل الألحان"
      ],
      year: "1975",
      likes: 367
    }
  ];

  const categories = ["الكل", "معاصر", "رومانسي", "تراثي", "ديني", "مقاومة", "وصفي"];
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredPoems = selectedCategory === "الكل" 
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
          <h1 className="text-5xl font-bold font-amiri text-foreground mb-6">
            قصائد وأشعار غزة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة مختارة من القصائد والأشعار التي تتغنى بجمال غزة وتحكي قصتها الخالدة
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
                <CardTitle className="text-2xl font-amiri text-foreground mb-2">
                  {poem.title}
                </CardTitle>
                <p className="text-palestine-red font-medium">{poem.poet}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gaza-sand/10 p-6 rounded-lg">
                  {poem.lines.map((line, lineIndex) => (
                    <p 
                      key={lineIndex} 
                      className="text-foreground leading-relaxed font-amiri text-lg mb-2 text-center"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <button
                      onClick={() => toggleFavorite(poem.id)}
                      className={`flex items-center space-x-2 space-x-reverse transition-colors duration-200 ${
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
                    
                    <button className="flex items-center space-x-2 space-x-reverse text-muted-foreground hover:text-palestine-green transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                      <span>شارك</span>
                    </button>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gaza-gold text-gaza-gold hover:bg-gaza-gold hover:text-white"
                  >
                    <BookOpen className="w-4 h-4 ml-2" />
                    اقرأ كاملة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Poetry Competition */}
        <div className="mt-16 bg-gradient-to-r from-palestine-red/10 to-palestine-green/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-amiri font-bold text-center text-foreground mb-6">
            مسابقة شعرية
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            شارك في مسابقتنا الشعرية السنوية واكتب قصيدة عن غزة الحبيبة
          </p>
          <div className="text-center">
            <Button className="bg-gaza-gold hover:bg-gaza-gold/90 text-white px-8 py-3 hover-scale">
              شارك في المسابقة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poems;
