import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import DepartmentsPreview from '@/components/home/DepartmentsPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import CTASection from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' 
            ? 'كلية الذكاء الاصطناعي - جامعة كفر الشيخ' 
            : 'Faculty of Artificial Intelligence - Kafrelsheikh University'}
        </title>
        <meta 
          name="description" 
          content={language === 'ar'
            ? 'كلية الذكاء الاصطناعي بجامعة كفر الشيخ - رائدة في تعليم وأبحاث الذكاء الاصطناعي في مصر'
            : 'Faculty of Artificial Intelligence at Kafrelsheikh University - Leading AI education and research in Egypt'}
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <StatsSection />
        <DepartmentsPreview />
        <ServicesPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
