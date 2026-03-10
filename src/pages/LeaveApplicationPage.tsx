import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LeaveApplicationPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 gap-5">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-lg font-bold font-display text-foreground">Leave Request Submitted</h1>
        <p className="text-sm text-muted-foreground text-center">Your supervisor will review your request.</p>
        <Button onClick={() => navigate('/profile')} className="w-full h-12 bg-secondary">{t('back')}</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('leaveApplication')}</h1>
      </div>
      <div className="flex-1 px-5 pt-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">{t('selectDate')}</label>
          <Input type="date" value={date} onChange={e => setDate(e.target.value)} className="h-12" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">{t('reason')}</label>
          <Textarea placeholder="Enter reason for leave..." value={reason} onChange={e => setReason(e.target.value)} className="min-h-[120px]" />
        </div>
        <Button onClick={() => setSubmitted(true)} disabled={!date || !reason} className="w-full h-12 bg-secondary text-base">
          {t('submitLeave')}
        </Button>
      </div>
    </div>
  );
}
