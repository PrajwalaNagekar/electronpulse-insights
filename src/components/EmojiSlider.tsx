import React from 'react';
import { cn } from '@/lib/utils';

interface EmojiSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const emojis = [
  { emoji: '😡', label: 'Very Dissatisfied', color: 'bg-red-500' },
  { emoji: '😟', label: 'Dissatisfied', color: 'bg-orange-500' },
  { emoji: '😐', label: 'Neutral', color: 'bg-yellow-500' },
  { emoji: '😊', label: 'Satisfied', color: 'bg-lime-500' },
  { emoji: '😍', label: 'Very Satisfied', color: 'bg-green-500' },
];

export function EmojiSlider({ value, onChange }: EmojiSliderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Large selected emoji */}
      <div className="text-6xl transition-all duration-300">
        {emojis[value]?.emoji || '😐'}
      </div>
      <p className="text-sm font-medium text-muted-foreground">
        {emojis[value]?.label}
      </p>

      {/* Emoji buttons */}
      <div className="flex items-center gap-3">
        {emojis.map((item, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-all duration-200",
              value === index
                ? "scale-110 ring-3 ring-secondary shadow-lg bg-secondary/10"
                : "bg-muted hover:scale-105 opacity-60 hover:opacity-100"
            )}
          >
            {item.emoji}
          </button>
        ))}
      </div>

      {/* Color bar */}
      <div className="flex w-full rounded-full overflow-hidden h-2">
        {emojis.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex-1 transition-opacity",
              item.color,
              index <= value ? "opacity-100" : "opacity-20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
