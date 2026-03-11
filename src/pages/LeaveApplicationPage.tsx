import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, UserCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

type Approver = 'district_supervisor' | 'campaign_manager';

export default function LeaveApplicationPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reason, setReason] = useState('');
  const [approver, setApprover] = useState<Approver>('district_supervisor');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 gap-5">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-lg font-bold font-display text-foreground">{t('leaveSubmitted')}</h1>
        <p className="text-sm text-muted-foreground text-center">{t('leaveApprovalChain')}</p>
        <div className="w-full bg-card rounded-2xl border border-border p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">{t('primaryApprover')}</p>
              <p className="text-sm font-medium text-foreground">{t('districtSupervisor')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <Users className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">{t('secondaryApprover')}</p>
              <p className="text-sm font-medium text-foreground">{t('campaignManager')}</p>
            </div>
          </div>
        </div>
        <Button onClick={() => navigate('/profile')} className="w-full h-12 bg-secondary rounded-2xl">{t('back')}</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('leaveApplication')}</h1>
      </div>
      <div className="flex-1 px-5 pt-6 space-y-4 overflow-y-auto pb-6">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">{t('selectDate')}</label>
          <Input type="date" value={date} onChange={e => setDate(e.target.value)} className="h-12 rounded-xl" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{t('startTime')}</label>
            <Input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="h-12 rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">{t('endTime')}</label>
            <Input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} className="h-12 rounded-xl" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">{t('reason')}</label>
          <Textarea placeholder={t('enterReason')} value={reason} onChange={e => setReason(e.target.value)} className="min-h-[100px] rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">{t('approver')}</label>
          <div className="space-y-2">
            {([
              { value: 'district_supervisor' as Approver, label: t('districtSupervisor'), sublabel: t('primaryApprover'), icon: UserCheck },
              { value: 'campaign_manager' as Approver, label: t('campaignManager'), sublabel: t('secondaryApprover'), icon: Users },
            ]).map(opt => (
              <button key={opt.value} onClick={() => setApprover(opt.value)}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all ${
                  approver === opt.value ? 'border-secondary bg-secondary/5' : 'border-border bg-card'
                }`}>
                <opt.icon className={`w-5 h-5 ${approver === opt.value ? 'text-secondary' : 'text-muted-foreground'}`} />
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{opt.label}</p>
                  <p className="text-[10px] text-muted-foreground">{opt.sublabel}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <Button onClick={() => setSubmitted(true)} disabled={!date || !reason}
          className="w-full h-12 bg-secondary text-base rounded-2xl">
          {t('submitLeave')}
        </Button>
      </div>
    </div>
  );
}
