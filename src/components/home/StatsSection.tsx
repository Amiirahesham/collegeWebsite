import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpen, FileText } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '2,500+', label: t('stats.students') },
    { icon: GraduationCap, value: '85+', label: t('stats.faculty') },
    { icon: BookOpen, value: '12', label: t('stats.programs') },
    { icon: FileText, value: '450+', label: t('stats.research') },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 lg:p-8 text-center group hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 gradient-text">
                {stat.value}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
