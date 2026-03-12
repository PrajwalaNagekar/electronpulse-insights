import React, { createContext, useContext } from 'react';

interface PhoneViewportContextType {
  container: HTMLElement | null;
}

export const PhoneViewportContext = createContext<PhoneViewportContextType | undefined>(undefined);

export function usePhoneViewport() {
  return useContext(PhoneViewportContext);
}
