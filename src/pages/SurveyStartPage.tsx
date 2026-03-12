import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, Users, ArrowLeft, User, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SurveyStartPage() {
  const [step, setStep] = useState<'type' | 'respondent'>('type');
  const [respondent, setRespondent] = useState({ name: '', phone: '', area: '' });
  const navigate = useNavigate();
  const { t } = useLanguage();

  const isRespondentValid = respondent.name.trim() && respondent.phone.trim().length >= 10 && respondent.area.trim();

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => step === 'type' ? navigate(-1) : setStep('type')}>
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-base font-semibold font-display text-foreground">
          {step === 'type' ? t('startSurvey') : t('respondentInfo')}
        </h1>
      </div>

      <div className="flex-1 px-5 pt-8">
        {step === 'type' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
            <p className="text-sm text-muted-foreground text-center">{t('selectSurveyType')}</p>
            {/* Questions — Volunteer mode: direct start */}
            <button
              onClick={() => navigate('/survey/questions/question')}
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
            {/* Exercise — requires respondent info */}
            <button
              onClick={() => setStep('respondent')}
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <p className="text-sm text-muted-foreground text-center mb-2">{t('respondentInfo')}</p>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">{t('citizenName')} *</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t('enterCitizenName')}
                  value={respondent.name}
                  onChange={e => setRespondent(p => ({ ...p, name: e.target.value }))}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">{t('citizenPhone')} *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder={t('enterPhoneNumber')}
                  value={respondent.phone}
                  onChange={e => setRespondent(p => ({ ...p, phone: e.target.value }))}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">{t('areaName')} *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t('enterAreaName')}
                  value={respondent.area}
                  onChange={e => setRespondent(p => ({ ...p, area: e.target.value }))}
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>
            <Button
              onClick={() => navigate('/survey/questions/exercise')}
              className="w-full h-12 bg-secondary text-base rounded-2xl mt-4"
              disabled={!isRespondentValid}
            >
              {t('proceedToSurvey')}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
