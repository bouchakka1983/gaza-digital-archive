
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-amiri font-bold mb-4">عن المكتبة</h3>
            <p className="text-background/80 leading-relaxed">
              مكتبة رقمية شاملة تهدف إلى حفظ وتوثيق تاريخ وثقافة غزة للأجيال القادمة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-amiri font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/history" className="text-background/80 hover:text-background transition-colors">تاريخ غزة</Link></li>
              <li><Link to="/gallery" className="text-background/80 hover:text-background transition-colors">معرض الصور</Link></li>
              <li><Link to="/music" className="text-background/80 hover:text-background transition-colors">الأغاني</Link></li>
              <li><Link to="/articles" className="text-background/80 hover:text-background transition-colors">المقالات</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-amiri font-bold mb-4">تواصل معنا</h3>
            <p className="text-background/80 leading-relaxed">
              لأي استفسارات أو مساهمات في المحتوى، نرحب بتواصلكم معنا.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 المكتبة الرقمية لغزة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
