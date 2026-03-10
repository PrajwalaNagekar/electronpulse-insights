import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Camera, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { EmojiSlider } from '@/components/EmojiSlider';
import { StarRating } from '@/components/StarRating';
import { useLanguage } from '@/contexts/LanguageContext';
import { surveyQuestions } from '@/data/questions';
import { SurveyType } from '@/types';

export default function SurveyQuestionPage() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [comment, setComment] = useState('');
  const [showComplete, setShowComplete] = useState(false);

  const questions = useMemo(
    () => surveyQuestions.filter(q => q.surveyType === (type as SurveyType)).slice(0, 10),
    [type]
  );

  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const setAnswer = (val: string | number) => {
    setAnswers(prev => ({ ...prev, [question.id]: val }));
  };

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setComment('');
    } else {
      setShowComplete(true);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(i => i - 1);
  };

  if (showComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-background px-6 gap-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-14 h-14 text-green-500" />
        </motion.div>
        <h1 className="text-xl font-bold font-display text-foreground">{t('surveyComplete')}</h1>
        <p className="text-sm text-muted-foreground text-center">
          {Object.keys(answers).length} / {questions.length} questions answered
        </p>
        <Button onClick={() => navigate('/dashboard')} className="w-full h-12 bg-secondary">
          {t('dashboard')}
        </Button>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => currentIndex === 0 ? navigate(-1) : goPrev()}>
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <span className="text-xs font-medium text-muted-foreground">
            {currentIndex + 1} {t('of')} {questions.length}
          </span>
          <button onClick={goNext} className="text-xs text-secondary font-medium">{t('skip')}</button>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="flex-1 px-5 pt-6 pb-4 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div key={question.id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="space-y-6">
            <div className="bg-muted/50 rounded-xl px-3 py-1 inline-block">
              <span className="text-[10px] font-medium text-muted-foreground uppercase">{question.category}</span>
            </div>
            <h2 className="text-base font-semibold text-foreground leading-relaxed">
              {question.text[language]}
            </h2>

            {/* Answer UI by type */}
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

            {question.questionType === 'yes_no' && (
              <div className="flex gap-3">
                {['yes', 'no', 'undecided'].map(val => (
                  <button
                    key={val}
                    onClick={() => setAnswer(val)}
                    className={`flex-1 py-4 rounded-2xl border-2 text-sm font-semibold transition-all ${
                      answers[question.id] === val
                        ? val === 'yes' ? 'border-green-500 bg-green-50 text-green-700'
                          : val === 'no' ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-yellow-500 bg-yellow-50 text-yellow-700'
                        : 'border-border bg-card text-foreground'
                    }`}
                  >
                    {val === 'yes' ? '👍' : val === 'no' ? '👎' : '🤷'}<br />
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
                placeholder="Type your response..."
                value={(answers[question.id] as string) || ''}
                onChange={e => setAnswer(e.target.value)}
                className="min-h-[120px] text-base"
              />
            )}

            {question.questionType === 'voice' && (
              <div className="flex flex-col items-center gap-3 py-6">
                <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Tap to record</p>
              </div>
            )}

            {/* Comment */}
            <div className="flex items-center gap-2 pt-2">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <input
                placeholder={t('addComment')}
                value={comment}
                onChange={e => setComment(e.target.value)}
                className="flex-1 text-xs bg-transparent border-b border-border py-1 outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-border flex gap-3">
        <Button variant="outline" className="flex-1 h-12" onClick={() => navigate('/survey/photo')}>
          <Camera className="w-4 h-4 mr-2" />
          {t('addPhoto')}
        </Button>
        <Button className="flex-1 h-12 bg-secondary" onClick={goNext}>
          {currentIndex < questions.length - 1 ? t('next') : t('submit')}
        </Button>
      </div>
    </div>
  );
}
