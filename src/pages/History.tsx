
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const History = () => {
  const historicalPeriods = [
    {
      period: 'Canaanite Era',
      date: '3000 BC',
      description: 'Gaza emerged as an important Canaanite city on the trade route between Egypt and the Levant',
      details: 'Gaza was an important station on the incense and spice route, and trade flourished thanks to its strategic location.'
    },
    {
      period: 'Islamic Era',
      date: '635 AD',
      description: 'Muslims conquered Gaza and it became an important Islamic center',
      details: 'Gaza witnessed great prosperity in the Islamic era, with mosques, schools, and markets built.'
    },
    {
      period: 'Ottoman Era',
      date: '1516 AD',
      description: 'Gaza became part of the Ottoman Empire',
      details: 'Gaza was an important administrative center in the Ottoman era, and crafts and trade flourished.'
    },
    {
      period: 'Modern Era',
      date: '1948 AD',
      description: 'The Nakba and the establishment of the Gaza Strip',
      details: 'After the 1948 war, Gaza became a refuge for hundreds of thousands of Palestinian refugees.'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Gaza's History Through the Ages
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through the ancient history of Gaza city, from Canaanite origins to the modern era
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-fade-in">
          <div 
            className="h-96 bg-cover bg-center rounded-lg shadow-lg relative"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">
                Land of Successive Civilizations
              </h2>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {historicalPeriods.map((period, index) => (
            <div 
              key={period.period} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-palestine-red">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-2xl text-foreground mb-2 md:mb-0">
                      {period.period}
                    </CardTitle>
                    <span className="text-lg font-bold text-palestine-red bg-palestine-red/10 px-4 py-2 rounded-full">
                      {period.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {period.description}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {period.details}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Historical Facts */}
        <div className="mt-16 bg-gaza-sand/10 rounded-lg p-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Fascinating Historical Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-palestine-red mb-2">5000</div>
              <p className="text-muted-foreground">Years of History</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-palestine-green mb-2">42</div>
              <p className="text-muted-foreground">Civilizations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gaza-gold mb-2">365</div>
              <p className="text-muted-foreground">Square Kilometers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
