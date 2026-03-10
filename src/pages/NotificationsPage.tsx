import React, { useState } from 'react';
import { Bell, ClipboardList, RefreshCw, Megaphone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockNotifications } from '@/data/mockData';
import { BottomNav } from '@/components/BottomNav';
import { cn } from '@/lib/utils';

const typeIcons = { assignment: ClipboardList, reminder: Clock, sync: RefreshCw, update: Megaphone };

export default function NotificationsPage() {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState(mockNotifications);
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold font-display text-foreground">{t('notifications')}</h1>
            {unread > 0 && <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{unread}</span>}
          </div>
          <button onClick={() => setNotifications(n => n.map(x => ({ ...x, read: true })))} className="text-xs text-secondary font-medium">
            {t('markAllRead')}
          </button>
        </div>
        <div className="px-4 space-y-2 pb-4">
          {notifications.map(n => {
            const Icon = typeIcons[n.type];
            return (
              <div key={n.id} className={cn("bg-card rounded-xl border border-border p-3.5 flex gap-3", !n.read && "border-l-4 border-l-secondary")}>
                <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{n.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{n.message}</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-1">
                    {new Date(n.timestamp).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
