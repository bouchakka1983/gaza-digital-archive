
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Eye } from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const articles = [
    {
      id: 1,
      title: "غزة عبر التاريخ: من المدينة الكنعانية إلى العصر الحديث",
      author: "د. أحمد الفلسطيني",
      date: "2024-01-15",
      excerpt: "دراسة شاملة عن تاريخ غزة منذ النشأة الأولى حتى العصر الحديث، تتناول الحضارات المختلفة التي مرت بها المدينة...",
      readTime: "15 دقيقة",
      views: 1250,
      category: "تاريخ"
    },
    {
      id: 2,
      title: "العمارة الإسلامية في غزة: دراسة في المساجد التاريخية",
      author: "د. فاطمة الغزاوي",
      date: "2024-01-10",
      excerpt: "تحليل معماري للمساجد التاريخية في غزة، بما في ذلك الجامع العمري الكبير ومسجد السيد هاشم...",
      readTime: "12 دقيقة",
      views: 890,
      category: "عمارة"
    },
    {
      id: 3,
      title: "التراث الشعبي في غزة: الحرف والصناعات التقليدية",
      author: "أ. محمد أبو سالم",
      date: "2024-01-05",
      excerpt: "استعراض للحرف التراثية في غزة مثل صناعة الخزف والنسيج والحياكة وتأثيرها على الهوية الثقافية...",
      readTime: "10 دقائق",
      views: 672,
      category: "تراث"
    },
    {
      id: 4,
      title: "غزة في الأدب العربي: صورة المدينة في الشعر والنثر",
      author: "د. ليلى الشاعر",
      date: "2023-12-28",
      excerpt: "دراسة أدبية تتناول صورة غزة في الأدب العربي الحديث والمعاصر، وكيف تجلت في أعمال الشعراء والأدباء...",
      readTime: "18 دقيقة",
      views: 1456,
      category: "أدب"
    },
    {
      id: 5,
      title: "الاقتصاد في غزة التاريخية: التجارة والزراعة",
      author: "د. عمر التاجر",
      date: "2023-12-20",
      excerpt: "بحث في النشاط الاقتصادي في غزة عبر التاريخ، من الطرق التجارية القديمة إلى الزراعة والصيد...",
      readTime: "14 دقيقة",
      views: 743,
      category: "اقتصاد"
    },
    {
      id: 6,
      title: "المرأة الغزاوية: دورها في المجتمع والتاريخ",
      author: "د. عائشة الغزية",
      date: "2023-12-15",
      excerpt: "دراسة اجتماعية عن دور المرأة في المجتمع الغزاوي عبر التاريخ، ومساهمتها في الحفاظ على التراث...",
      readTime: "16 دقيقة",
      views: 921,
      category: "مجتمع"
    }
  ];

  const categories = ["الكل", "تاريخ", "عمارة", "تراث", "أدب", "اقتصاد", "مجتمع"];

  const filteredArticles = selectedCategory === "الكل" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-amiri text-foreground mb-6">
            مقالات وبحوث حول غزة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة من المقالات والبحوث المتخصصة حول تاريخ وثقافة وتراث مدينة غزة
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
                  ? 'bg-palestine-black text-white'
                  : 'bg-white border border-palestine-black text-palestine-black hover:bg-palestine-black hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gaza-gold/20 text-gaza-gold px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm space-x-4 space-x-reverse">
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-amiri text-foreground leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-palestine-red hover:bg-palestine-red/90 text-white">
                  اقرأ المقال كاملاً
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <div className="mt-16 bg-gaza-sand/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-amiri font-bold text-center text-foreground mb-6">
            مشاركة في البحث
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            ندعو الباحثين والمهتمين للمساهمة في إثراء المكتبة الرقمية بمقالاتهم وبحوثهم حول غزة
          </p>
          <div className="text-center">
            <Button className="bg-palestine-green hover:bg-palestine-green/90 text-white px-8 py-3 hover-scale">
              شارك بحثك معنا
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
