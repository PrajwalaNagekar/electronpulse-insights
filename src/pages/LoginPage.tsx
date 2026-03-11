import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Lock, Mail, Fingerprint, Globe, User, MapPin, CreditCard, Camera, Upload, CheckCircle2, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types';
import { toast } from 'sonner';
import logo from '@/assets/lxn-logo.png';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
];

type Tab = 'signin' | 'signup';
type SignInMethod = 'phone' | 'email';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<Tab>('signin');
  const [signInMethod, setSignInMethod] = useState<SignInMethod>('phone');
  // Sign In - Phone
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  // Sign In - Email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // Sign Up
  const [signupStep, setSignupStep] = useState(1);
  const [signupData, setSignupData] = useState({
    fullName: '', phone: '', email: '', address: '',
    aadhaarNumber: '', panNumber: '',
    aadhaarImage: '', panImage: '', selfieImage: '',
  });
  const [signupSubmitted, setSignupSubmitted] = useState(false);

  const navigate = useNavigate();
  const { login, loginWithEmail, signup } = useAuth();
  const { t, language, setLanguage } = useLanguage();

  const handleSendOtp = () => {
    if (phone.length >= 10) setOtpSent(true);
  };

  const handlePhoneVerify = async () => {
    setLoading(true);
    const success = await login(phone, otp);
    setLoading(false);
    if (success) navigate('/dashboard');
    else toast.error(t('accountNotApproved'));
  };

  const handleEmailLogin = async () => {
    setLoading(true);
    const result = await loginWithEmail(email, password);
    setLoading(false);
    if (result.success) navigate('/dashboard');
    else toast.error(t(result.error || 'accountNotApproved'));
  };

  const handleSignup = async () => {
    setLoading(true);
    await signup(signupData);
    setLoading(false);
    setSignupSubmitted(true);
  };

  const updateSignup = (field: string, value: string) => {
    setSignupData(prev => ({ ...prev, [field]: value }));
  };

  if (signupSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-background px-6 gap-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center">
          <Clock className="w-14 h-14 text-amber-500" />
        </motion.div>
        <h1 className="text-xl font-bold font-display text-foreground text-center">{t('pendingVerification')}</h1>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">{t('pendingVerificationDesc')}</p>
        <Button onClick={() => { setSignupSubmitted(false); setActiveTab('signin'); setSignupStep(1); }} variant="outline" className="w-full h-12 rounded-2xl">
          {t('signIn')}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex flex-col items-center pt-10 pb-4 px-6">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain mb-2" />
        <h1 className="text-xl font-bold font-display text-primary">Citizen First</h1>
        <p className="text-xs text-muted-foreground">Field Volunteer App</p>
      </div>

      {/* Language */}
      <div className="flex items-center justify-center gap-2 px-6 mb-4">
        <Globe className="w-3.5 h-3.5 text-muted-foreground" />
        {languages.map(lang => (
          <button key={lang.code} onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
              language === lang.code ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >{lang.label}</button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex mx-6 rounded-2xl bg-muted p-1 mb-4">
        {(['signin', 'signup'] as Tab[]).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
            }`}
          >{t(tab === 'signin' ? 'signIn' : 'signUp')}</button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <AnimatePresence mode="wait">
          {activeTab === 'signin' ? (
            <motion.div key="signin" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
              {/* Sign In Method Toggle */}
              <div className="flex gap-2">
                <button onClick={() => setSignInMethod('phone')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium border-2 transition-all ${
                    signInMethod === 'phone' ? 'border-secondary bg-secondary/5 text-secondary' : 'border-border text-muted-foreground'
                  }`}>
                  <Phone className="w-4 h-4" />{t('phoneNumber')}
                </button>
                <button onClick={() => setSignInMethod('email')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium border-2 transition-all ${
                    signInMethod === 'email' ? 'border-secondary bg-secondary/5 text-secondary' : 'border-border text-muted-foreground'
                  }`}>
                  <Mail className="w-4 h-4" />{t('email')}
                </button>
              </div>

              {signInMethod === 'phone' ? (
                <>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">{t('phoneNumber')}</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <Input type="tel" placeholder="+91 98765 43210" value={phone} onChange={e => setPhone(e.target.value)}
                        className="pl-10 h-12 text-base rounded-xl" disabled={otpSent} />
                    </div>
                  </div>
                  {!otpSent ? (
                    <Button onClick={handleSendOtp} className="w-full h-12 text-base bg-secondary hover:bg-secondary/90 rounded-2xl" disabled={phone.length < 10}>
                      {t('sendOtp')}
                    </Button>
                  ) : (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">{t('enterOtp')}</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                          <Input type="text" placeholder="• • • • • •" maxLength={6} value={otp} onChange={e => setOtp(e.target.value)}
                            className="pl-10 h-12 text-base text-center tracking-[0.5em] rounded-xl" />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">OTP → {phone}</p>
                      </div>
                      <Button onClick={handlePhoneVerify} className="w-full h-12 text-base bg-primary rounded-2xl" disabled={otp.length < 6 || loading}>
                        {loading ? t('verifying') : t('verifyOtp')}
                      </Button>
                    </motion.div>
                  )}
                </>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">{t('emailAddress')}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <Input type="email" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)}
                        className="pl-10 h-12 text-base rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">{t('password')}</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <Input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
                        className="pl-10 h-12 text-base rounded-xl" />
                    </div>
                  </div>
                  <Button onClick={handleEmailLogin} className="w-full h-12 text-base bg-secondary hover:bg-secondary/90 rounded-2xl" disabled={!email || !password || loading}>
                    {loading ? t('verifying') : t('loginWithEmail')}
                  </Button>
                </>
              )}

              <button className="flex items-center justify-center gap-2 w-full py-3 text-sm text-muted-foreground">
                <Fingerprint className="w-5 h-5" />
                {t('biometricLogin')}
              </button>
            </motion.div>
          ) : (
            <motion.div key="signup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex items-center gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      s === signupStep ? 'bg-secondary text-secondary-foreground' : s < signupStep ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
                    }`}>{s < signupStep ? '✓' : s}</div>
                    {s < 3 && <div className={`w-8 h-0.5 ${s < signupStep ? 'bg-green-500' : 'bg-muted'}`} />}
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-muted-foreground font-medium">
                {t('step')} {signupStep}/3: {signupStep === 1 ? t('personalDetails') : signupStep === 2 ? t('identityVerification') : t('documentUpload')}
              </p>

              <AnimatePresence mode="wait">
                {signupStep === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">{t('fullName')}</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                        <Input placeholder={t('fullName')} value={signupData.fullName} onChange={e => updateSignup('fullName', e.target.value)}
                          className="pl-10 h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">{t('phoneNumber')}</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                        <Input type="tel" placeholder="+91 98765 43210" value={signupData.phone} onChange={e => updateSignup('phone', e.target.value)}
                          className="pl-10 h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">{t('emailAddress')}</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                        <Input type="email" placeholder="email@example.com" value={signupData.email} onChange={e => updateSignup('email', e.target.value)}
                          className="pl-10 h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">{t('currentAddress')}</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Textarea placeholder={t('currentAddress')} value={signupData.address} onChange={e => updateSignup('address', e.target.value)}
                          className="pl-10 min-h-[60px] rounded-xl text-sm" />
                      </div>
                    </div>
                    <Button onClick={() => setSignupStep(2)} className="w-full h-12 bg-secondary rounded-2xl gap-2"
                      disabled={!signupData.fullName || !signupData.phone || !signupData.email}>
                      {t('nextStep')} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
                {signupStep === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">{t('aadhaarNumber')}</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="XXXX XXXX XXXX" maxLength={14} value={signupData.aadhaarNumber}
                          onChange={e => updateSignup('aadhaarNumber', e.target.value)} className="pl-10 h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">{t('panNumber')}</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="ABCDE1234F" maxLength={10} value={signupData.panNumber}
                          onChange={e => updateSignup('panNumber', e.target.value.toUpperCase())} className="pl-10 h-12 rounded-xl" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => setSignupStep(1)} variant="outline" className="flex-1 h-12 rounded-2xl gap-2">
                        <ArrowLeft className="w-4 h-4" /> {t('previousStep')}
                      </Button>
                      <Button onClick={() => setSignupStep(3)} className="flex-1 h-12 bg-secondary rounded-2xl gap-2"
                        disabled={!signupData.aadhaarNumber || !signupData.panNumber}>
                        {t('nextStep')} <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
                {signupStep === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                    {[
                      { key: 'aadhaarImage', label: t('uploadAadhaar'), icon: Upload },
                      { key: 'panImage', label: t('uploadPan'), icon: Upload },
                      { key: 'selfieImage', label: t('takeSelfie'), icon: Camera },
                    ].map(item => (
                      <button key={item.key} onClick={() => updateSignup(item.key, 'uploaded_' + Date.now())}
                        className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                          signupData[item.key as keyof typeof signupData] ? 'border-green-500 bg-green-50' : 'border-dashed border-border bg-card'
                        }`}>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          signupData[item.key as keyof typeof signupData] ? 'bg-green-100' : 'bg-muted'
                        }`}>
                          {signupData[item.key as keyof typeof signupData] ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          ) : (
                            <item.icon className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>
                        <span className={`text-sm font-medium ${signupData[item.key as keyof typeof signupData] ? 'text-green-700' : 'text-foreground'}`}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                    <div className="flex gap-2 pt-2">
                      <Button onClick={() => setSignupStep(2)} variant="outline" className="flex-1 h-12 rounded-2xl gap-2">
                        <ArrowLeft className="w-4 h-4" /> {t('previousStep')}
                      </Button>
                      <Button onClick={handleSignup} className="flex-1 h-12 bg-primary rounded-2xl" disabled={loading}>
                        {loading ? t('verifying') : t('submitRegistration')}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-[10px] text-center text-muted-foreground py-3">{t('poweredBy')}</p>
    </div>
  );
}
