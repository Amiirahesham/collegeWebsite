import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Lock, User, IdCard, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const Auth: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  
  const [isLogin, setIsLogin] = useState(mode !== 'register');
  const [studentType, setStudentType] = useState<'internal' | 'external'>('internal');
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <>
      <Helmet>
        <title>
          {language === 'ar' 
            ? (isLogin ? 'تسجيل الدخول' : 'إنشاء حساب') + ' - كلية الذكاء الاصطناعي'
            : (isLogin ? 'Login' : 'Register') + ' - Faculty of AI'}
        </title>
      </Helmet>
      
      <div className="min-h-screen flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-background">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-md"
          >
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-foreground">
                  {language === 'ar' ? 'كلية الذكاء الاصطناعي' : 'Faculty of AI'}
                </h1>
                <p className="text-xs text-muted-foreground">
                  {language === 'ar' ? 'جامعة كفر الشيخ' : 'Kafrelsheikh University'}
                </p>
              </div>
            </Link>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {isLogin ? t('auth.login_title') : t('auth.register_title')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isLogin ? t('auth.login_subtitle') : t('auth.register_subtitle')}
            </p>

            {/* Form */}
            <form className="space-y-5">
              {/* Student Type - Only for Register */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label>{t('auth.student_type')}</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setStudentType('internal')}
                      className={cn(
                        "p-4 rounded-xl border-2 text-center transition-all duration-300",
                        studentType === 'internal'
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <GraduationCap className={cn(
                        "w-6 h-6 mx-auto mb-2",
                        studentType === 'internal' ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "text-sm font-medium",
                        studentType === 'internal' ? "text-primary" : "text-foreground"
                      )}>
                        {t('auth.internal')}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStudentType('external')}
                      className={cn(
                        "p-4 rounded-xl border-2 text-center transition-all duration-300",
                        studentType === 'external'
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <User className={cn(
                        "w-6 h-6 mx-auto mb-2",
                        studentType === 'external' ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "text-sm font-medium",
                        studentType === 'external' ? "text-primary" : "text-foreground"
                      )}>
                        {t('auth.external')}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Full Name - Only for Register */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">{t('auth.full_name')}</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      className="pl-10 h-12 rounded-xl"
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>
                </div>
              )}

              {/* ID Field - University ID or National ID */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="id">
                    {studentType === 'internal' ? t('auth.university_id') : t('auth.national_id')}
                  </Label>
                  <div className="relative">
                    <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="id"
                      type="text"
                      className="pl-10 h-12 rounded-xl"
                      placeholder={studentType === 'internal' 
                        ? (language === 'ar' ? 'أدخل رقمك الجامعي' : 'Enter your university ID')
                        : (language === 'ar' ? 'أدخل رقمك القومي' : 'Enter your national ID')}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">{t('auth.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    className="pl-10 h-12 rounded-xl"
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">{t('auth.password')}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="pl-10 pr-10 h-12 rounded-xl"
                    placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password - Only for Register */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t('auth.confirm_password')}</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      className="pl-10 h-12 rounded-xl"
                      placeholder={language === 'ar' ? 'أكد كلمة المرور' : 'Confirm your password'}
                    />
                  </div>
                </div>
              )}

              {/* Remember & Forgot - Only for Login */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm text-muted-foreground">{t('auth.remember_me')}</span>
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    {t('auth.forgot_password')}
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <Button type="submit" variant="hero" size="lg" className="w-full">
                {isLogin ? t('auth.sign_in') : t('auth.sign_up')}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </Button>
            </form>

            {/* Toggle Mode */}
            <p className="text-center mt-6 text-muted-foreground">
              {isLogin ? t('auth.no_account') : t('auth.have_account')}{' '}
              <button
                onClick={toggleMode}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? t('auth.sign_up') : t('auth.sign_in')}
              </button>
            </p>
          </motion.div>
        </div>

        {/* Right Side - Decorative */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative z-10 flex items-center justify-center w-full p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-primary-foreground"
            >
              <div className="w-24 h-24 mx-auto rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-8">
                <GraduationCap className="w-12 h-12" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {language === 'ar' ? 'كلية الذكاء الاصطناعي' : 'Faculty of AI'}
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">
                {language === 'ar'
                  ? 'انضم إلى أفضل برنامج للذكاء الاصطناعي في مصر'
                  : 'Join Egypt\'s leading AI program'}
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">2,500+</p>
                  <p className="text-sm text-primary-foreground/70">{t('stats.students')}</p>
                </div>
                <div className="w-px bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="text-3xl font-bold">85+</p>
                  <p className="text-sm text-primary-foreground/70">{t('stats.faculty')}</p>
                </div>
                <div className="w-px bg-primary-foreground/20" />
                <div className="text-center">
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-primary-foreground/70">{t('stats.programs')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
