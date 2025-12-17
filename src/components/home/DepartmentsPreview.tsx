import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Database, Code, Cog, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const DepartmentsPreview: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const departments = [
    {
      icon: Brain,
      name: t('departments.ai.name'),
      description: t('departments.ai.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      name: t('departments.ds.name'),
      description: t('departments.ds.description'),
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Code,
      name: t('departments.cs.name'),
      description: t('departments.cs.description'),
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Cog,
      name: t('departments.robotics.name'),
      description: t('departments.robotics.description'),
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('departments.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('departments.subtitle')}
          </p>
        </motion.div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {dept.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/departments">
            <Button variant="default" size="lg">
              {language === 'ar' ? 'اكتشف جميع الأقسام' : 'Explore All Departments'}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsPreview;
