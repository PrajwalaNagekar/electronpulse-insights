import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const photoTypes = [
  { id: 'infrastructure', icon: '🏗️', label: 'Infrastructure' },
  { id: 'environment', icon: '🌍', label: 'Environment' },
  { id: 'community', icon: '👥', label: 'Community' },
];

export default function PhotoCapturePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState('infrastructure');
  const [captured, setCaptured] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <button onClick={() => navigate(-1)}><ArrowLeft className="w-5 h-5 text-foreground" /></button>
        <h1 className="text-base font-semibold font-display text-foreground">{t('addPhoto')}</h1>
      </div>
      <div className="flex-1 px-5 pt-6 space-y-5">
        <div className="flex gap-2">
          {photoTypes.map(pt => (
            <button key={pt.id} onClick={() => setSelectedType(pt.id)}
              className={`flex-1 py-3 rounded-xl border-2 text-center text-xs font-medium transition-all ${
                selectedType === pt.id ? 'border-secondary bg-secondary/10' : 'border-border bg-card'
              }`}
            >
              <span className="text-2xl block mb-1">{pt.icon}</span>
              {pt.label}
            </button>
          ))}
        </div>

        <div className="aspect-[4/3] bg-muted rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border">
          {captured ? (
            <>
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <p className="text-sm text-green-600 font-medium">Photo captured!</p>
            </>
          ) : (
            <>
              <Camera className="w-12 h-12 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Tap to capture</p>
            </>
          )}
        </div>

        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />12.9279° N, 77.5831° E</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{new Date().toLocaleTimeString()}</span>
        </div>

        <Button onClick={() => { setCaptured(true); setTimeout(() => navigate(-1), 1000); }}
          className="w-full h-12 bg-secondary" disabled={captured}
        >
          <Camera className="w-4 h-4 mr-2" />
          Capture Photo
        </Button>
      </div>
    </div>
  );
}
