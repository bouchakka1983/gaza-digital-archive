
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  bgColor?: string;
}

const SectionCard = ({ title, description, icon: Icon, path, bgColor = "bg-white" }: SectionCardProps) => {
  return (
    <Link to={path} className="block hover-scale">
      <Card className={`${bgColor} border-gaza-sand/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-palestine-red to-palestine-green rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl font-amiri text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SectionCard;
