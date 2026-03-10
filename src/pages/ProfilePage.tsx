import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Mail, MapPin, AlertCircle, Calendar, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { BottomNav } from '@/components/BottomNav';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/login'); };

  const infoItems = [
    { icon: Phone, label: t('phoneNumber'), value: user?.phone },
    { icon: Mail, label: t('email'), value: user?.email },
    { icon: MapPin, label: t('assignedWard'), value: user?.assignedWard },
    { icon: AlertCircle, label: t('emergencyContact'), value: user?.emergencyContact },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Header */}
        <div className="bg-primary px-5 pt-6 pb-10 rounded-b-3xl flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-lg font-bold font-display text-primary-foreground">{user?.name}</h1>
          <span className="text-xs text-primary-foreground/60 capitalize bg-primary-foreground/10 px-3 py-1 rounded-full mt-1">{user?.role}</span>
        </div>

        {/* Info Cards */}
        <div className="mx-4 -mt-5 bg-card rounded-2xl shadow-lg border border-border divide-y divide-border">
          {infoItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3.5">
              <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center">
                <item.icon className="w-4 h-4 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mx-4 mt-4 space-y-2">
          <button onClick={() => navigate('/leave')} className="w-full flex items-center justify-between px-4 py-3.5 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{t('applyLeave')}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          <Button onClick={handleLogout} variant="outline" className="w-full h-12 text-destructive border-destructive/30 mt-4">
            <LogOut className="w-4 h-4 mr-2" />
            {t('logout')}
          </Button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
