import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Lock, Fingerprint, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types';
import logo from '@/assets/lxn-logo.png';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
];

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t, language, setLanguage } = useLanguage();

  const handleSendOtp = () => {
    if (phone.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    const success = await login(phone, otp);
    setLoading(false);
    if (success) navigate('/dashboard');
  };

  return (
    <div className="flex flex-col h-full bg-background px-6 pt-16 pb-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center mb-8">
        <img src={logo} alt="Logo" className="w-20 h-20 object-contain mb-3" />
        <h1 className="text-xl font-bold font-display text-primary">ElectionInsight</h1>
        <p className="text-xs text-muted-foreground">Field App</p>
      </motion.div>

      {/* Language Selector */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Globe className="w-4 h-4 text-muted-foreground" />
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              language === lang.code
                ? 'bg-secondary text-secondary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4 flex-1">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">{t('phoneNumber')}</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="pl-10 h-12 text-base"
              disabled={otpSent}
            />
          </div>
        </div>

        {!otpSent ? (
          <Button onClick={handleSendOtp} className="w-full h-12 text-base bg-secondary hover:bg-secondary/90" disabled={phone.length < 10}>
            {t('sendOtp')}
          </Button>
        ) : (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('enterOtp')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="• • • • • •"
                  maxLength={6}
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  className="pl-10 h-12 text-base text-center tracking-[0.5em]"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center">OTP sent to {phone}</p>
            </div>
            <Button onClick={handleVerify} className="w-full h-12 text-base bg-primary" disabled={otp.length < 6 || loading}>
              {loading ? 'Verifying...' : t('verifyOtp')}
            </Button>
          </motion.div>
        )}

        {/* Biometric */}
        <button className="flex items-center justify-center gap-2 w-full py-3 text-sm text-muted-foreground">
          <Fingerprint className="w-5 h-5" />
          {t('biometricLogin')}
        </button>
      </motion.div>

      <p className="text-[10px] text-center text-muted-foreground mt-4">Powered by LXN Technologies</p>
    </div>
  );
}
