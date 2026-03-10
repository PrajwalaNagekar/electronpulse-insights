import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Home, Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockTasks } from '@/data/mockData';
import { BottomNav } from '@/components/BottomNav';

const priorityColors = { high: 'bg-red-100 text-red-700', medium: 'bg-yellow-100 text-yellow-700', low: 'bg-green-100 text-green-700' };
const statusColors = { pending: 'bg-orange-100 text-orange-700', in_progress: 'bg-blue-100 text-blue-700', completed: 'bg-green-100 text-green-700' };

export default function TasksPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-5 pb-3">
          <h1 className="text-lg font-bold font-display text-foreground">{t('tasks')}</h1>
        </div>
        <div className="px-4 space-y-3 pb-4">
          {mockTasks.map((task, i) => (
            <motion.div key={task.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl border border-border p-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-foreground flex-1 pr-2">{task.title}</h3>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                  {task.priority}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{task.region}</span>
                <span className="flex items-center gap-1"><Home className="w-3 h-3" />{task.households} {t('households')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {new Date(task.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                </span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${statusColors[task.status]}`}>
                  {task.status.replace('_', ' ')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
