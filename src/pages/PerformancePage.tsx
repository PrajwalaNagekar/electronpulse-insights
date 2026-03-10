import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Zap, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockPerformance } from '@/data/mockData';
import { BottomNav } from '@/components/BottomNav';

export default function PerformancePage() {
  const { t } = useLanguage();
  const p = mockPerformance;

  const stats = [
    { icon: Target, label: t('completed'), value: `${p.surveysCompleted}/${p.dailyTarget}`, color: 'text-secondary' },
    { icon: Zap, label: t('responseRate'), value: `${p.responseRate}%`, color: 'text-green-500' },
    { icon: Award, label: t('qualityScore'), value: `${p.qualityScore}%`, color: 'text-accent' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pb-4">
        <div className="px-5 pt-5 pb-3">
          <h1 className="text-lg font-bold font-display text-foreground">{t('performance')}</h1>
        </div>

        <div className="px-4 grid grid-cols-3 gap-2 mb-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-3 text-center">
              <s.icon className={`w-5 h-5 mx-auto mb-1 ${s.color}`} />
              <p className="text-lg font-bold text-foreground">{s.value}</p>
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-4 bg-card rounded-2xl border border-border p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <h2 className="text-sm font-semibold text-foreground">{t('weeklyTrend')}</h2>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={p.weeklyTrend}>
              <XAxis dataKey="day" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Bar dataKey="count" fill="hsl(217, 91%, 60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mx-4 bg-card rounded-2xl border border-border p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">{t('dailyTarget')}</h2>
          <Progress value={(p.surveysCompleted / p.dailyTarget) * 100} className="h-3 mb-2" />
          <p className="text-xs text-muted-foreground">{p.surveysCompleted} of {p.dailyTarget} surveys completed today</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
