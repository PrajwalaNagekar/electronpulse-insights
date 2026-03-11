import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ClipboardList, User, Bell } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, path: '/dashboard', labelKey: 'home' },
  { icon: ClipboardList, path: '/tasks', labelKey: 'tasks' },
  { icon: Bell, path: '/notifications', labelKey: 'notifications' },
  { icon: User, path: '/profile', labelKey: 'profile' },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-around px-2 py-2 border-t border-border bg-background/95 backdrop-blur-sm">
      {navItems.map(({ icon: Icon, path, labelKey }) => {
        const isActive = location.pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all min-w-[56px]",
              isActive
                ? "text-secondary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className={cn("w-5 h-5", isActive && "stroke-[2.5px]")} />
            <span className="text-[10px] font-medium leading-none">{t(labelKey)}</span>
          </button>
        );
      })}
    </div>
  );
}
