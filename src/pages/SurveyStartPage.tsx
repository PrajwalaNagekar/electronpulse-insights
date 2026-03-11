import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, Users, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SurveyStartPage() {
  const [step, setStep] = useState<'type' | 'location'>('type');
  const [selectedType, setSelectedType] = useState<'question' | 'exercise' | null>(null);
  const [locationConfirmed, setLocationConfirmed] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const confirmLocation = () => {
    setLocationConfirmed(true);
    setTimeout(() => navigate(`/survey/questions/${selectedType}`), 800);
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => step === 'type' ? navigate(-1) : setStep('type')}>
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('startSurvey')}</h1>
      </div>

      <div className="flex-1 px-5 pt-8">
        {step === 'type' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
            <p className="text-sm text-muted-foreground text-center">{t('selectSurveyType')}</p>
            <button
              onClick={() => { setSelectedType('question'); setStep('location'); }}
              className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-secondary transition-colors bg-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <ClipboardList className="w-7 h-7 text-secondary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">{t('questions')}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t('questionsDesc')}</p>
              </div>
            </button>
            <button
              onClick={() => { setSelectedType('exercise'); setStep('location'); }}
              className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-border hover:border-accent transition-colors bg-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">{t('exercise')}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t('exerciseDesc')}</p>
              </div>
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 pt-8">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              {locationConfirmed ? (
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              ) : (
                <MapPin className="w-12 h-12 text-secondary animate-pulse" />
              )}
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-foreground">{t('confirmLocation')}</h2>
              <p className="text-xs text-muted-foreground mt-1">12.9279° N, 77.5831° E</p>
              <p className="text-xs text-muted-foreground">Jayanagar, Bangalore</p>
            </div>
            {!locationConfirmed ? (
              <Button onClick={confirmLocation} className="w-full h-12 bg-secondary text-base rounded-2xl">
                {t('confirmLocation')}
              </Button>
            ) : (
              <p className="text-sm text-green-600 font-medium">{t('locationCaptured')} ✓</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
