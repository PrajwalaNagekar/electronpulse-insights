import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, MessageSquare, QrCode, Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function ShareSurveyPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const link = 'https://survey.electioninsight.app/s/abc123';

  const copyLink = () => { navigator.clipboard?.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('shareSurvey')}</h1>
      </div>

      <div className="flex-1 px-5 pt-6 space-y-4">
        {/* Link */}
        <div className="bg-muted rounded-xl p-3 flex items-center gap-2">
          <p className="text-xs text-foreground flex-1 truncate">{link}</p>
          <button onClick={copyLink} className="shrink-0">
            {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
          </button>
        </div>

        <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-sm gap-3">
          <MessageCircle className="w-6 h-6" />
          {t('shareViaWhatsApp')}
        </Button>

        <Button variant="outline" className="w-full h-14 rounded-2xl text-sm gap-3">
          <MessageSquare className="w-6 h-6" />
          {t('shareViaSMS')}
        </Button>

        <Button variant="outline" className="w-full h-14 rounded-2xl text-sm gap-3">
          <QrCode className="w-6 h-6" />
          {t('shareViaQR')}
        </Button>

        {/* Mock QR */}
        <div className="flex justify-center pt-4">
          <div className="w-48 h-48 bg-card border-2 border-border rounded-2xl flex items-center justify-center">
            <div className="grid grid-cols-8 gap-0.5 w-36 h-36">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={`w-full aspect-square rounded-sm ${Math.random() > 0.5 ? 'bg-primary' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-center text-muted-foreground">Citizen responses will be marked as self-reported</p>
      </div>
    </div>
  );
}
