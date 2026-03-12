import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ThumbsUp, ThumbsDown, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { EmojiSlider } from '@/components/EmojiSlider';
import { StarRating } from '@/components/StarRating';
import { useLanguage } from '@/contexts/LanguageContext';
import { surveyQuestions } from '@/data/questions';
import { SurveyType } from '@/types';
import { toast } from 'sonner';

export default function SurveyQuestionPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [showComplete, setShowComplete] = useState(false);

  const questions = useMemo(
    () => surveyQuestions.filter(q => q.surveyType === (type as SurveyType)),
    [type]
  );

  const question = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  const setAnswer = (val: string | number) => {
    setAnswers(prev => ({ ...prev, [question.id]: val }));
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    toast.success(t('surveySubmittedToast'));
    setShowComplete(true);
  };

  if (showComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-background px-6 gap-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-14 h-14 text-green-500" />
        </motion.div>
        <h1 className="text-xl font-bold font-display text-foreground">{t('surveyComplete')}</h1>
        <Button onClick={() => navigate('/dashboard')} className="w-full h-12 bg-secondary rounded-2xl">
          {t('goHome')}
        </Button>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header — no question counter */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => currentIndex === 0 ? navigate(-1) : setCurrentIndex(i => i - 1)}>
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h2 className="text-sm font-semibold text-foreground">{t('survey')}</h2>
          <div className="w-5" />
        </div>
        
      </div>

      {/* Question */}
      <div className="flex-1 px-5 pt-4 pb-4 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div key={question.id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-5">
            <div className="bg-muted/50 rounded-xl px-3 py-1 inline-block">
              <span className="text-[10px] font-medium text-muted-foreground uppercase">{question.category}</span>
            </div>
            <h2 className="text-base font-semibold text-foreground leading-relaxed">
              {question.text[language]}
            </h2>

            {/* Multiple choice */}
            {question.questionType === 'multiple_choice' && question.options && (
              <div className="space-y-2.5">
                {question.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setAnswer(opt.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all text-sm font-medium ${
                      answers[question.id] === opt.id
                        ? 'border-secondary bg-secondary/10 text-foreground'
                        : 'border-border bg-card text-foreground hover:border-secondary/50'
                    }`}
                  >
                    {opt.text[language]}
                  </button>
                ))}
              </div>
            )}

            {/* Yes/No with civic icons */}
            {question.questionType === 'yes_no' && (
              <div className="flex gap-3">
                {[
                  { val: 'yes', icon: ThumbsUp, activeColor: 'border-green-500 bg-green-50', iconColor: 'text-green-600' },
                  { val: 'no', icon: ThumbsDown, activeColor: 'border-red-500 bg-red-50', iconColor: 'text-red-600' },
                  { val: 'undecided', icon: HelpCircle, activeColor: 'border-yellow-500 bg-yellow-50', iconColor: 'text-yellow-600' },
                ].map(({ val, icon: Icon, activeColor, iconColor }) => (
                  <button
                    key={val}
                    onClick={() => setAnswer(val)}
                    className={`flex-1 py-4 rounded-2xl border-2 flex flex-col items-center gap-2 text-sm font-semibold transition-all ${
                      answers[question.id] === val ? activeColor : 'border-border bg-card text-foreground'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      answers[question.id] === val ? activeColor : 'bg-muted'
                    }`}>
                      <Icon className={`w-6 h-6 ${answers[question.id] === val ? iconColor : 'text-muted-foreground'}`} />
                    </div>
                    {t(val)}
                  </button>
                ))}
              </div>
            )}

            {question.questionType === 'emoji_slider' && (
              <EmojiSlider value={(answers[question.id] as number) ?? 2} onChange={val => setAnswer(val)} />
            )}

            {question.questionType === 'star_rating' && (
              <StarRating value={(answers[question.id] as number) ?? 0} onChange={val => setAnswer(val)} />
            )}

            {question.questionType === 'short_text' && (
              <Textarea
                placeholder={t('typeResponse')}
                value={(answers[question.id] as string) || ''}
                onChange={e => setAnswer(e.target.value)}
                className="min-h-[120px] text-base rounded-xl"
              />
            )}

            {question.questionType === 'voice' && (
              <div className="flex flex-col items-center gap-3 py-6">
                <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{t('tapToRecord')}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer — only Next and Submit */}
      <div className="px-5 py-3 border-t border-border">
        <div className="flex gap-3">
          <Button className="flex-1 h-11 rounded-xl" onClick={goNext}>
            {currentIndex < questions.length - 1 ? t('next') : t('submit')}
          </Button>
          {currentIndex < questions.length - 1 && (
            <Button variant="outline" className="flex-1 h-11 rounded-xl border-secondary/30 text-secondary" onClick={handleSubmit}>
              {t('submit')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
