import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, RefreshCw } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types';

const langs: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी (Hindi)' },
  { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
];

export default function SettingsPage() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('settings')}</h1>
      </div>
      <div className="flex-1 px-5 pt-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-secondary" />
            <h2 className="text-sm font-semibold text-foreground">{t('language')}</h2>
          </div>
          <div className="space-y-2">
            {langs.map(l => (
              <button key={l.code} onClick={() => setLanguage(l.code)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                  language === l.code ? 'border-secondary bg-secondary/10' : 'border-border bg-card'
                }`}
              >{l.label}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw className="w-4 h-4 text-secondary" />
            <h2 className="text-sm font-semibold text-foreground">{t('syncPreferences')}</h2>
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-card rounded-xl border border-border">
            <span className="text-sm text-foreground">{t('autoSync')}</span>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
