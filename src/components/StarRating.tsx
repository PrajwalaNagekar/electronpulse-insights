import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

export function StarRating({ value, onChange, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: max }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className="transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Star
            className={cn(
              "w-12 h-12 transition-colors",
              i < value
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-muted-foreground/30"
            )}
          />
        </button>
      ))}
    </div>
  );
}
