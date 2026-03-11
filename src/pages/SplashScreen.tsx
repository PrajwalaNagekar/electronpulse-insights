import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '@/assets/lxn-logo.png';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4 z-10"
      >
        <img src={logo} alt="Logo" className="w-36 h-36 object-contain" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold font-display text-primary">Citizen First</h1>
          <p className="text-sm text-muted-foreground mt-1">Field Volunteer App</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 flex gap-1.5"
      >
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </motion.div>
    </div>
  );
}
