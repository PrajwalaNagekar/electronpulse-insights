import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, ListChecks, Share2, RefreshCw, MapPin, Wifi, WifiOff, Clock, TrendingUp, Target, Zap, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockSyncStatus, mockPerformance } from '@/data/mockData';
import { BottomNav } from '@/components/BottomNav';
import { toast } from 'sonner';

export default function DashboardPage() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const sync = mockSyncStatus;
  const p = mockPerformance;
  const progress = user ? Math.round((user.surveysCompleted / user.dailyTarget) * 100) : 0;

  const handleSync = () => {
    toast.info(t('syncing'));
    setTimeout(() => toast.success(t('syncSuccess')), 1500);
  };

  const quickActions = [
    { icon: PlayCircle, label: t('startSurvey'), path: '/survey/start', color: 'bg-secondary text-secondary-foreground' },
    { icon: ListChecks, label: t('viewTasks'), path: '/tasks', color: 'bg-primary text-primary-foreground' },
    { icon: Share2, label: t('shareProgress'), path: '/share', color: 'bg-accent text-accent-foreground' },
    { icon: RefreshCw, label: t('syncData'), path: '#sync', color: 'bg-muted text-foreground' },
  ];

  const perfStats = [
    { icon: Target, label: t('completed'), value: `${user?.surveysCompleted || 0}/${user?.dailyTarget || 50}`, color: 'text-secondary' },
    { icon: Zap, label: t('responseRate'), value: `${p.responseRate}%`, color: 'text-green-500' },
    { icon: Award, label: t('qualityScore'), value: `${p.qualityScore}%`, color: 'text-accent' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-4">
        {/* Header */}
        <div className="bg-primary px-5 pt-4 pb-8 rounded-b-3xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-primary-foreground/70 text-xs">{t('welcomeBack')}</p>
              <h1 className="text-lg font-bold font-display text-primary-foreground">{user?.name}</h1>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary-foreground/10">
              {sync.isOnline ? <Wifi className="w-3.5 h-3.5 text-green-400" /> : <WifiOff className="w-3.5 h-3.5 text-red-400" />}
              <span className="text-[10px] text-primary-foreground/80">{sync.isOnline ? t('online') : t('offline')}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/70 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{user?.assignedRegion}</span>
          </div>
        </div>

        {/* Progress Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-4 -mt-5 bg-card rounded-2xl shadow-lg p-4 border border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-card-foreground">{t('todayProgress')}</h2>
            <span className="text-xl font-bold text-secondary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3 mb-3" />
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-muted rounded-xl py-2">
              <p className="text-lg font-bold text-foreground">{user?.dailyTarget}</p>
              <p className="text-[10px] text-muted-foreground">{t('dailyTarget')}</p>
            </div>
            <div className="bg-muted rounded-xl py-2">
              <p className="text-lg font-bold text-green-600">{user?.surveysCompleted}</p>
              <p className="text-[10px] text-muted-foreground">{t('completed')}</p>
            </div>
            <div className="bg-muted rounded-xl py-2">
              <p className="text-lg font-bold text-orange-500">{(user?.dailyTarget || 0) - (user?.surveysCompleted || 0)}</p>
              <p className="text-[10px] text-muted-foreground">{t('pending')}</p>
            </div>
          </div>
        </motion.div>

        {/* Sync Status */}
        <div className="mx-4 mt-4 bg-card rounded-xl p-3 border border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${sync.pendingSurveys > 0 ? 'bg-orange-500' : 'bg-green-500'}`} />
            <span className="text-xs text-muted-foreground">{t('syncStatus')}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{sync.pendingSurveys} {t('pending')}</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 mt-5">
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                <Button
                  onClick={() => action.path === '#sync' ? handleSync() : navigate(action.path)}
                  className={`w-full h-20 flex flex-col items-center justify-center gap-2 rounded-2xl text-xs font-medium ${action.color}`}
                  variant="ghost"
                >
                  <action.icon className="w-7 h-7" />
                  {action.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="px-4 mt-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <h2 className="text-sm font-semibold text-foreground">{t('performance')}</h2>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {perfStats.map((s, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-3 text-center">
                <s.icon className={`w-5 h-5 mx-auto mb-1 ${s.color}`} />
                <p className="text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Weekly Trend Chart */}
          <div className="bg-card rounded-2xl border border-border p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">{t('weeklyTrend')}</h3>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={p.weeklyTrend}>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Bar dataKey="count" fill="hsl(217, 91%, 60%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
