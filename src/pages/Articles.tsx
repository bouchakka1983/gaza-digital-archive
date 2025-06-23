
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Eye } from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      title: "Gaza Through History: From Canaanite City to Modern Era",
      author: "Dr. Ahmad Al-Falastini",
      date: "2024-01-15",
      excerpt: "A comprehensive study of Gaza's history from its early beginnings to the modern era, covering the different civilizations that passed through the city...",
      readTime: "15 minutes",
      views: 1250,
      category: "History"
    },
    {
      id: 2,
      title: "Islamic Architecture in Gaza: A Study of Historic Mosques",
      author: "Dr. Fatima Al-Ghazawi",
      date: "2024-01-10",
      excerpt: "Architectural analysis of historic mosques in Gaza, including the Great Omari Mosque and Sayyid Hashim Mosque...",
      readTime: "12 minutes",
      views: 890,
      category: "Architecture"
    },
    {
      id: 3,
      title: "Folk Heritage in Gaza: Traditional Crafts and Industries",
      author: "Mohammad Abu Salem",
      date: "2024-01-05",
      excerpt: "Overview of traditional crafts in Gaza such as pottery, weaving, and knitting and their impact on cultural identity...",
      readTime: "10 minutes",
      views: 672,
      category: "Heritage"
    },
    {
      id: 4,
      title: "Gaza in Arabic Literature: The City's Image in Poetry and Prose",
      author: "Dr. Layla Al-Shaer",
      date: "2023-12-28",
      excerpt: "A literary study examining Gaza's image in modern and contemporary Arabic literature, and how it manifested in the works of poets and writers...",
      readTime: "18 minutes",
      views: 1456,
      category: "Literature"
    },
    {
      id: 5,
      title: "Economy in Historic Gaza: Trade and Agriculture",
      author: "Dr. Omar Al-Tajer",
      date: "2023-12-20",
      excerpt: "Research on economic activity in Gaza throughout history, from ancient trade routes to agriculture and fishing...",
      readTime: "14 minutes",
      views: 743,
      category: "Economy"
    },
    {
      id: 6,
      title: "Gazan Women: Their Role in Society and History",
      author: "Dr. Aisha Al-Ghaziya",
      date: "2023-12-15",
      excerpt: "A social study about women's role in Gazan society throughout history, and their contribution to preserving heritage...",
      readTime: "16 minutes",
      views: 921,
      category: "Society"
    }
  ];

  const categories = ["All", "History", "Architecture", "Heritage", "Literature", "Economy", "Society"];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Articles and Research About Gaza
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of specialized articles and research about Gaza's history, culture and heritage
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
                  <div className="flex items-center text-muted-foreground text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground leading-tight line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('en-US')}</span>
                    </div>
                  </div>
                </div>
                <Link to={`/articles/${article.id}`}>
                  <Button className="w-full bg-palestine-red hover:bg-palestine-red/90 text-white">
                    Read Full Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <div className="mt-16 bg-gaza-sand/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-6">
            Contribute to Research
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            We invite researchers and enthusiasts to contribute to enriching the digital library with their articles and research about Gaza
          </p>
          <div className="text-center">
            <Button className="bg-palestine-green hover:bg-palestine-green/90 text-white px-8 py-3 hover-scale">
              Share Your Research
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
