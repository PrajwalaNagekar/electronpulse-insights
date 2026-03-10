import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Flag, Send, Eye, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { mockSurveyResponses } from '@/data/mockData';

const volunteers = [
  { name: 'Ramesh Kumar', surveys: 18, target: 25, ward: 'Ward 42' },
  { name: 'Suresh Babu', surveys: 22, target: 25, ward: 'Ward 38' },
  { name: 'Anitha R.', surveys: 25, target: 25, ward: 'Ward 15' },
  { name: 'Manjunath H.', surveys: 10, target: 25, ward: 'Ward 29' },
];

export default function SupervisorPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('supervisor')}</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pt-4 space-y-4 pb-4">
        {/* Volunteer list */}
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Users className="w-4 h-4 text-secondary" />{t('volunteers')}
        </h2>
        {volunteers.map((v, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-3.5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">{v.name}</p>
              <p className="text-xs text-muted-foreground">{v.ward} • {v.surveys}/{v.target} surveys</p>
            </div>
            <div className="flex items-center gap-1">
              {v.surveys >= v.target ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : v.surveys < v.target / 2 ? (
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              ) : (
                <Eye className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Button variant="outline" className="h-12 rounded-xl text-xs gap-2">
            <Flag className="w-4 h-4" />{t('flagResponse')}
          </Button>
          <Button className="h-12 rounded-xl text-xs gap-2 bg-secondary">
            <Send className="w-4 h-4" />{t('sendInstruction')}
          </Button>
        </div>

        {/* Recent Submissions */}
        <h2 className="text-sm font-semibold text-foreground pt-2">{t('submissions')}</h2>
        {mockSurveyResponses.map(sr => (
          <div key={sr.id} className="bg-card rounded-xl border border-border p-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-foreground capitalize">{sr.surveyType}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${sr.synced ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {sr.synced ? 'Synced' : 'Pending'}
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">{sr.answers.length} answers • {new Date(sr.startTime).toLocaleString('en-IN')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
