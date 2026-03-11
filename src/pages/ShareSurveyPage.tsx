import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, MessageSquare, MapPin, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function ShareSurveyPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user } = useAuth();
  const progress = user ? Math.round((user.surveysCompleted / user.dailyTarget) * 100) : 0;

  const shareText = `${user?.name} - ${t('todayStats')}: ${user?.surveysCompleted}/${user?.dailyTarget} surveys (${progress}%) | 📍 ${user?.assignedRegion}`;

  const handleShare = (method: string) => {
    if (method === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    } else {
      toast.success(`${t('shareViaSMS')} ✓`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('shareProgress')}</h1>
      </div>

      <div className="flex-1 px-5 pt-6 space-y-5">
        {/* Progress Card */}
        <div className="bg-card rounded-2xl border border-border p-5 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <h2 className="text-sm font-semibold text-foreground">{t('myProgress')}</h2>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{t('todayStats')}</span>
            <span className="text-xl font-bold text-secondary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{user?.surveysCompleted} {t('completed')}</span>
            <span>{(user?.dailyTarget || 0) - (user?.surveysCompleted || 0)} {t('pending')}</span>
          </div>
        </div>

        {/* Location */}
        <div className="bg-card rounded-2xl border border-border p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{t('currentLocation')}</p>
            <p className="text-sm font-medium text-foreground">{user?.assignedRegion}</p>
            <p className="text-[10px] text-muted-foreground">12.9279° N, 77.5831° E</p>
          </div>
        </div>

        {/* Share Buttons */}
        <Button onClick={() => handleShare('whatsapp')} className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-sm gap-3">
          <MessageCircle className="w-6 h-6" />
          {t('shareWithSupervisor')} (WhatsApp)
        </Button>

        <Button onClick={() => handleShare('sms')} variant="outline" className="w-full h-14 rounded-2xl text-sm gap-3">
          <MessageSquare className="w-6 h-6" />
          {t('shareWithCoworkers')} (SMS)
        </Button>
      </div>
    </div>
  );
}
