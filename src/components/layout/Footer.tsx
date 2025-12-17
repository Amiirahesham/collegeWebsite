import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/departments', label: t('nav.departments') },
    { path: '/services', label: t('nav.services') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold">
                  {language === 'ar' ? 'كلية الذكاء الاصطناعي' : 'Faculty of AI'}
                </h3>
                <p className="text-sm opacity-80">
                  {language === 'ar' ? 'جامعة كفر الشيخ' : 'Kafrelsheikh University'}
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm opacity-80">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span dir="ltr">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {language === 'ar' ? 'النشرة الإخبارية' : 'Newsletter'}
            </h4>
            <p className="text-sm opacity-80 mb-4">
              {language === 'ar' 
                ? 'اشترك للحصول على آخر الأخبار والتحديثات'
                : 'Subscribe for the latest news and updates'}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors duration-300 text-sm font-medium"
              >
                {language === 'ar' ? 'اشترك' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © {new Date().getFullYear()} {language === 'ar' ? 'كلية الذكاء الاصطناعي - جامعة كفر الشيخ' : 'Faculty of AI - Kafrelsheikh University'}. {t('footer.rights')}.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                {language === 'ar' ? 'الشروط والأحكام' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
