import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Briefcase, MessageSquareText, GraduationCap, Calendar, CreditCard, HelpCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const mainServices = [
    {
      icon: FileText,
      title: t('services.documents.title'),
      description: t('services.documents.description'),
      features: language === 'ar'
        ? ['شهادة القيد', 'كشف الدرجات', 'خطاب توصية', 'شهادة التخرج']
        : ['Enrollment Certificate', 'Transcript', 'Recommendation Letter', 'Graduation Certificate'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: t('services.academic.title'),
      description: t('services.academic.description'),
      features: language === 'ar'
        ? ['تسجيل المقررات', 'الإرشاد الأكاديمي', 'مصادر التعلم', 'الدعم الفني']
        : ['Course Registration', 'Academic Advising', 'Learning Resources', 'Technical Support'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Briefcase,
      title: t('services.career.title'),
      description: t('services.career.description'),
      features: language === 'ar'
        ? ['التدريب الصيفي', 'فرص العمل', 'ورش العمل', 'التواصل مع الشركات']
        : ['Summer Internships', 'Job Opportunities', 'Workshops', 'Industry Networking'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: MessageSquareText,
      title: t('services.chatbot.title'),
      description: t('services.chatbot.description'),
      features: language === 'ar'
        ? ['دعم 24/7', 'إجابات فورية', 'دعم متعدد اللغات', 'مساعدة ذكية']
        : ['24/7 Support', 'Instant Answers', 'Multilingual Support', 'Smart Assistance'],
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const additionalServices = [
    {
      icon: GraduationCap,
      title: language === 'ar' ? 'المنح الدراسية' : 'Scholarships',
      description: language === 'ar' ? 'فرص المنح والدعم المالي' : 'Financial aid and scholarship opportunities',
    },
    {
      icon: Calendar,
      title: language === 'ar' ? 'الفعاليات' : 'Events',
      description: language === 'ar' ? 'المؤتمرات وورش العمل' : 'Conferences and workshops',
    },
    {
      icon: CreditCard,
      title: language === 'ar' ? 'المدفوعات' : 'Payments',
      description: language === 'ar' ? 'الرسوم الدراسية والمدفوعات' : 'Tuition and fee payments',
    },
    {
      icon: HelpCircle,
      title: language === 'ar' ? 'الدعم' : 'Support',
      description: language === 'ar' ? 'المساعدة والدعم الفني' : 'Help desk and technical support',
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' ? 'خدمات الطلاب - كلية الذكاء الاصطناعي' : 'Student Services - Faculty of AI'}
        </title>
        <meta 
          name="description" 
          content={language === 'ar'
            ? 'خدمات الطلاب بكلية الذكاء الاصطناعي - طلب المستندات، الدعم الأكاديمي، خدمات التوظيف'
            : 'Student services at Faculty of AI - Document requests, academic support, career services'}
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('services.title')}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                {t('services.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 lg:p-8 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to="/auth">
                    <Button variant="outline" className="w-full">
                      {language === 'ar' ? 'الوصول إلى الخدمة' : 'Access Service'}
                      <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {language === 'ar' ? 'خدمات إضافية' : 'Additional Services'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
