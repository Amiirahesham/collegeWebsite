import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Cog, Users, BookOpen, Award, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Departments: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const departments = [
    {
      icon: Brain,
      name: t('departments.ai.name'),
      description: t('departments.ai.description'),
      color: 'from-blue-500 to-cyan-500',
      courses: language === 'ar' 
        ? ['تعلم الآلة', 'الشبكات العصبية العميقة', 'معالجة اللغات الطبيعية', 'رؤية الحاسوب']
        : ['Machine Learning', 'Deep Neural Networks', 'Natural Language Processing', 'Computer Vision'],
      students: 650,
      faculty: 22,
    },
    {
      icon: Database,
      name: t('departments.ds.name'),
      description: t('departments.ds.description'),
      color: 'from-cyan-500 to-teal-500',
      courses: language === 'ar'
        ? ['تحليل البيانات الضخمة', 'التنقيب عن البيانات', 'الإحصاء التطبيقي', 'تصور البيانات']
        : ['Big Data Analytics', 'Data Mining', 'Applied Statistics', 'Data Visualization'],
      students: 580,
      faculty: 18,
    },
    {
      icon: Code,
      name: t('departments.cs.name'),
      description: t('departments.cs.description'),
      color: 'from-indigo-500 to-blue-500',
      courses: language === 'ar'
        ? ['هندسة البرمجيات', 'الخوارزميات المتقدمة', 'أمن المعلومات', 'الحوسبة السحابية']
        : ['Software Engineering', 'Advanced Algorithms', 'Information Security', 'Cloud Computing'],
      students: 720,
      faculty: 25,
    },
    {
      icon: Cog,
      name: t('departments.robotics.name'),
      description: t('departments.robotics.description'),
      color: 'from-purple-500 to-indigo-500',
      courses: language === 'ar'
        ? ['الروبوتات الذكية', 'هندسة التحكم', 'الأنظمة المدمجة', 'إنترنت الأشياء']
        : ['Intelligent Robotics', 'Control Engineering', 'Embedded Systems', 'Internet of Things'],
      students: 420,
      faculty: 15,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' ? 'الأقسام الأكاديمية - كلية الذكاء الاصطناعي' : 'Departments - Faculty of AI'}
        </title>
        <meta 
          name="description" 
          content={language === 'ar'
            ? 'استكشف الأقسام الأكاديمية بكلية الذكاء الاصطناعي - الذكاء الاصطناعي، علوم البيانات، علوم الحاسب، الروبوتات'
            : 'Explore academic departments at Faculty of AI - Artificial Intelligence, Data Science, Computer Science, Robotics'}
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
                {t('departments.title')}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                {t('departments.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Departments List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 lg:w-1/3">
                        <div className={`w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                          <dept.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">
                            {dept.name}
                          </h2>
                          <p className="text-muted-foreground text-sm">
                            {dept.description}
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 lg:w-1/4">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xl font-bold text-foreground">{dept.students}</p>
                            <p className="text-xs text-muted-foreground">
                              {language === 'ar' ? 'طالب' : 'Students'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-secondary" />
                          <div>
                            <p className="text-xl font-bold text-foreground">{dept.faculty}</p>
                            <p className="text-xs text-muted-foreground">
                              {language === 'ar' ? 'أستاذ' : 'Faculty'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Courses */}
                      <div className="lg:w-5/12">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold text-foreground">
                            {language === 'ar' ? 'المقررات الرئيسية' : 'Key Courses'}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {dept.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-6 pt-6 border-t border-border flex justify-end">
                      <Button variant="outline" size="sm">
                        {language === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
                        <ChevronRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Departments;
