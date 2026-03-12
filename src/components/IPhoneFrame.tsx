import React, { useState, useEffect, useCallback } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';
import { PhoneViewportContext } from '@/contexts/PhoneViewportContext';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  const [time, setTime] = useState('');
  const [phoneContainer, setPhoneContainer] = useState<HTMLElement | null>(null);
  const setPhoneRef = useCallback((el: HTMLDivElement | null) => setPhoneContainer(el), []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PhoneViewportContext.Provider value={{ container: phoneContainer }}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
        <div ref={setPhoneRef} className="relative w-[393px] h-[852px] phone-bezel bg-background overflow-hidden flex flex-col">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-center pt-2">
            <div className="w-[126px] h-[37px] bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700" />
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="relative z-40 flex items-center justify-between px-8 pt-3 pb-1 text-xs font-semibold">
          <span className="w-14 text-foreground">{time}</span>
          <div className="w-[126px]" /> {/* spacer for notch */}
          <div className="flex items-center gap-1 text-foreground">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center">
              <Battery className="w-5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="w-36 h-1.5 bg-foreground/20 rounded-full" />
        </div>
      </div>
    </div>
    </PhoneViewportContext.Provider>
  );
}
