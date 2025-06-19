
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const History = () => {
  const historicalPeriods = [
    {
      period: 'العصر الكنعاني',
      date: '3000 ق.م',
      description: 'نشأت غزة كمدينة كنعانية هامة على الطريق التجاري بين مصر وبلاد الشام',
      details: 'كانت غزة محطة مهمة على طريق البخور والتوابل، وازدهرت التجارة فيها بفضل موقعها الاستراتيجي.'
    },
    {
      period: 'العصر الإسلامي',
      date: '635 م',
      description: 'فتح المسلمون غزة وأصبحت مركزاً إسلامياً مهماً',
      details: 'شهدت غزة ازدهاراً كبيراً في العصر الإسلامي، وبُنيت فيها المساجد والمدارس والأسواق.'
    },
    {
      period: 'العصر العثماني',
      date: '1516 م',
      description: 'أصبحت غزة جزءاً من الإمبراطورية العثمانية',
      details: 'كانت غزة مركزاً إدارياً مهماً في العصر العثماني، وازدهرت فيها الحرف والتجارة.'
    },
    {
      period: 'العصر الحديث',
      date: '1948 م',
      description: 'النكبة وتأسيس قطاع غزة',
      details: 'بعد حرب 1948، أصبحت غزة ملجأً لمئات الآلاف من اللاجئين الفلسطينيين.'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-amiri text-foreground mb-6">
            تاريخ غزة عبر العصور
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            رحلة عبر التاريخ العريق لمدينة غزة، من النشأة الكنعانية حتى العصر الحديث
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
              <h2 className="text-4xl font-amiri font-bold text-white text-center">
                أرض الحضارات المتعاقبة
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
                    <CardTitle className="text-2xl font-amiri text-foreground mb-2 md:mb-0">
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
          <h3 className="text-3xl font-amiri font-bold text-center text-foreground mb-8">
            حقائق تاريخية مثيرة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-palestine-red mb-2">5000</div>
              <p className="text-muted-foreground">سنة من التاريخ</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-palestine-green mb-2">42</div>
              <p className="text-muted-foreground">حضارة مرت بها</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gaza-gold mb-2">365</div>
              <p className="text-muted-foreground">كيلومتر مربع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
