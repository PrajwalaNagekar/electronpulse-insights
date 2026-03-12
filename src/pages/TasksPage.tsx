import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Home as HomeIcon, CheckCircle2, ListChecks } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockTasks } from '@/data/mockData';
import { BottomNav } from '@/components/BottomNav';
import { Task } from '@/types';

const priorityColors = { high: 'bg-red-100 text-red-700', medium: 'bg-yellow-100 text-yellow-700', low: 'bg-green-100 text-green-700' };
const statusColors = { pending: 'bg-orange-100 text-orange-700', in_progress: 'bg-blue-100 text-blue-700', completed: 'bg-green-100 text-green-700' };
const nextStatus: Record<string, Task['status']> = { pending: 'in_progress', in_progress: 'completed', completed: 'completed' };

export default function TasksPage() {
  const { t } = useLanguage();
  const [tasks, setTasks] = useState(mockTasks);

  const totalTasks = tasks.length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const inProgressCount = tasks.filter(t => t.status === 'in_progress').length;
  const overallProgress = Math.round((completedCount / totalTasks) * 100);

  const toggleStatus = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: nextStatus[t.status], completedHouseholds: nextStatus[t.status] === 'completed' ? t.households : t.completedHouseholds } : t));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-5 pb-3">
          <h1 className="text-lg font-bold font-display text-foreground">{t('tasks')}</h1>
        </div>

        {/* Summary card */}
        <div className="mx-4 mb-4 bg-card rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className="w-4 h-4 text-secondary" />
            <h2 className="text-sm font-semibold text-foreground">{t('taskSummary')}</h2>
          </div>
          <Progress value={overallProgress} className="h-3 mb-3" />
          <div className="grid grid-cols-3 gap-2 text-center">
            <div><p className="text-lg font-bold text-foreground">{totalTasks}</p><p className="text-[10px] text-muted-foreground">{t('totalTasks')}</p></div>
            <div><p className="text-lg font-bold text-green-600">{completedCount}</p><p className="text-[10px] text-muted-foreground">{t('completedTasks')}</p></div>
            <div><p className="text-lg font-bold text-blue-600">{inProgressCount}</p><p className="text-[10px] text-muted-foreground">{t('inProgress')}</p></div>
          </div>
        </div>

        <div className="px-4 space-y-3 pb-4">
          {tasks.map((task, i) => {
            const taskProgress = task.completedHouseholds ? Math.round((task.completedHouseholds / task.households) * 100) : 0;
            return (
              <motion.div key={task.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-4 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-foreground flex-1 pr-2">{task.title}</h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                    {t(task.priority)}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{t('progress')}</span>
                    <span>{task.completedHouseholds || 0}/{task.households} ({taskProgress}%)</span>
                  </div>
                  <Progress value={taskProgress} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{task.region}</span>
                  <span className="flex items-center gap-1"><HomeIcon className="w-3 h-3" />{task.households} {t('households')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {new Date(task.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <button onClick={() => toggleStatus(task.id)}
                    className={`text-[10px] font-medium px-2.5 py-1 rounded-full transition-all ${statusColors[task.status]}`}>
                    {task.status === 'completed' && <CheckCircle2 className="w-3 h-3 inline mr-1" />}
                    {task.status.replace('_', ' ')}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
