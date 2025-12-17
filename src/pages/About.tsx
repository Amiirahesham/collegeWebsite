import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, BookOpen, Globe } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description: language === 'ar' 
        ? 'نسعى للتميز في كل ما نقوم به من تعليم وبحث علمي'
        : 'We strive for excellence in everything we do, from teaching to research',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'التعاون' : 'Collaboration',
      description: language === 'ar'
        ? 'نؤمن بقوة العمل الجماعي والتعاون بين الطلاب وأعضاء هيئة التدريس'
        : 'We believe in the power of teamwork and collaboration among students and faculty',
    },
    {
      icon: BookOpen,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description: language === 'ar'
        ? 'نشجع التفكير الإبداعي والابتكار في جميع مجالات الذكاء الاصطناعي'
        : 'We encourage creative thinking and innovation in all areas of AI',
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'التأثير العالمي' : 'Global Impact',
      description: language === 'ar'
        ? 'نهدف إلى إحداث تأثير إيجابي على المستوى المحلي والعالمي'
        : 'We aim to make a positive impact locally and globally',
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' ? 'عن الكلية - كلية الذكاء الاصطناعي' : 'About - Faculty of AI'}
        </title>
        <meta 
          name="description" 
          content={language === 'ar'
            ? 'تعرف على كلية الذكاء الاصطناعي بجامعة كفر الشيخ - رسالتنا ورؤيتنا وقيمنا'
            : 'Learn about the Faculty of Artificial Intelligence at Kafrelsheikh University - Our mission, vision, and values'}
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
                {t('about.title')}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t('about.mission')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission_text')}
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t('about.vision')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision_text')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === 'ar' ? 'قيمنا' : 'Our Values'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'القيم التي تقود مسيرتنا الأكاديمية والبحثية'
                  : 'The values that guide our academic and research journey'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
