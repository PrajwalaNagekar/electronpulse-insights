import React from 'react';
import { Angry, Frown, Meh, Smile, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface EmojiSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const sentimentItems = [
  { icon: Angry, labelKey: 'veryDissatisfied', bg: 'bg-red-100', iconColor: 'text-red-500', ring: 'ring-red-400' },
  { icon: Frown, labelKey: 'dissatisfied', bg: 'bg-orange-100', iconColor: 'text-orange-500', ring: 'ring-orange-400' },
  { icon: Meh, labelKey: 'neutral', bg: 'bg-yellow-100', iconColor: 'text-yellow-600', ring: 'ring-yellow-400' },
  { icon: Smile, labelKey: 'satisfied', bg: 'bg-lime-100', iconColor: 'text-lime-600', ring: 'ring-lime-400' },
  { icon: Heart, labelKey: 'verySatisfied', bg: 'bg-green-100', iconColor: 'text-green-600', ring: 'ring-green-400' },
];

const barColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];

export function EmojiSlider({ value, onChange }: EmojiSliderProps) {
  const { t } = useLanguage();
  const selected = sentimentItems[value];
  const SelectedIcon = selected?.icon || Meh;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Large selected icon */}
      <div className={cn("w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300", selected?.bg)}>
        <SelectedIcon className={cn("w-12 h-12 transition-all duration-300", selected?.iconColor)} />
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        {t(selected?.labelKey || 'neutral')}
      </p>

      {/* Icon buttons */}
      <div className="flex items-center gap-3">
        {sentimentItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => onChange(index)}
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200",
                value === index
                  ? `scale-110 ring-3 ${item.ring} shadow-lg ${item.bg}`
                  : "bg-muted hover:scale-105 opacity-60 hover:opacity-100"
              )}
            >
              <Icon className={cn("w-7 h-7", value === index ? item.iconColor : "text-muted-foreground")} />
            </button>
          );
        })}
      </div>

      {/* Color bar */}
      <div className="flex w-full rounded-full overflow-hidden h-2">
        {barColors.map((color, index) => (
          <div
            key={index}
            className={cn(
              "flex-1 transition-opacity",
              color,
              index <= value ? "opacity-100" : "opacity-20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
