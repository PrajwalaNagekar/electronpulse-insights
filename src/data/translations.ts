import { Language } from '@/types';

type TranslationKeys = Record<string, Record<Language, string>>;

export const translations: TranslationKeys = {
  // App
  appName: { en: 'ElectionInsight', hi: 'इलेक्शनइनसाइट', kn: 'ಎಲೆಕ್ಷನ್‌ಇನ್‌ಸೈಟ್' },
  fieldApp: { en: 'Field App', hi: 'फील्ड ऐप', kn: 'ಫೀಲ್ಡ್ ಆ್ಯಪ್' },

  // Login
  login: { en: 'Login', hi: 'लॉगिन', kn: 'ಲಾಗಿನ್' },
  phoneNumber: { en: 'Phone Number', hi: 'फोन नंबर', kn: 'ಫೋನ್ ನಂಬರ್' },
  enterPhone: { en: 'Enter your phone number', hi: 'अपना फोन नंबर दर्ज करें', kn: 'ನಿಮ್ಮ ಫೋನ್ ನಂಬರ್ ನಮೂದಿಸಿ' },
  sendOtp: { en: 'Send OTP', hi: 'OTP भेजें', kn: 'OTP ಕಳುಹಿಸಿ' },
  enterOtp: { en: 'Enter OTP', hi: 'OTP दर्ज करें', kn: 'OTP ನಮೂದಿಸಿ' },
  verifyOtp: { en: 'Verify & Login', hi: 'सत्यापित करें और लॉगिन करें', kn: 'ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗಿನ್' },
  selectLanguage: { en: 'Select Language', hi: 'भाषा चुनें', kn: 'ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ' },
  biometricLogin: { en: 'Use Biometric Login', hi: 'बायोमेट्रिक लॉगिन उपयोग करें', kn: 'ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಗಿನ್ ಬಳಸಿ' },

  // Dashboard
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड', kn: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್' },
  assignedRegion: { en: 'Assigned Region', hi: 'निर्धारित क्षेत्र', kn: 'ನಿಯೋಜಿತ ಪ್ರದೇಶ' },
  dailyTarget: { en: 'Daily Target', hi: 'दैनिक लक्ष्य', kn: 'ದೈನಿಕ ಗುರಿ' },
  completed: { en: 'Completed', hi: 'पूर्ण', kn: 'ಪೂರ್ಣಗೊಂಡಿದೆ' },
  pending: { en: 'Pending', hi: 'लंबित', kn: 'ಬಾಕಿ' },
  syncStatus: { en: 'Sync Status', hi: 'सिंक स्थिति', kn: 'ಸಿಂಕ್ ಸ್ಥಿತಿ' },
  startSurvey: { en: 'Start Survey', hi: 'सर्वेक्षण शुरू करें', kn: 'ಸಮೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ' },
  viewTasks: { en: 'View Tasks', hi: 'कार्य देखें', kn: 'ಕಾರ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ' },
  sendSurveyLink: { en: 'Send Survey Link', hi: 'सर्वेक्षण लिंक भेजें', kn: 'ಸಮೀಕ್ಷೆ ಲಿಂಕ್ ಕಳುಹಿಸಿ' },
  syncData: { en: 'Sync Data', hi: 'डेटा सिंक करें', kn: 'ಡೇಟಾ ಸಿಂಕ್ ಮಾಡಿ' },
  welcomeBack: { en: 'Welcome back', hi: 'वापसी पर स्वागत', kn: 'ಮರಳಿ ಸ್ವಾಗತ' },
  todayProgress: { en: "Today's Progress", hi: 'आज की प्रगति', kn: 'ಇಂದಿನ ಪ್ರಗತಿ' },

  // Survey
  survey: { en: 'Survey', hi: 'सर्वेक्षण', kn: 'ಸಮೀಕ್ಷೆ' },
  questions: { en: 'Questions', hi: 'प्रश्न', kn: 'ಪ್ರಶ್ನೆಗಳು' },
  exercise: { en: 'Exercise', hi: 'अभ्यास', kn: 'ಅಭ್ಯಾಸ' },
  questionsDesc: { en: 'Internal party worker assessment', hi: 'आंतरिक पार्टी कार्यकर्ता मूल्यांकन', kn: 'ಆಂತರಿಕ ಪಕ್ಷ ಕಾರ್ಯಕರ್ತ ಮೌಲ್ಯಮಾಪನ' },
  exerciseDesc: { en: 'Citizen survey - ask people', hi: 'नागरिक सर्वेक्षण - लोगों से पूछें', kn: 'ನಾಗರಿಕ ಸಮೀಕ್ಷೆ - ಜನರನ್ನು ಕೇಳಿ' },
  confirmLocation: { en: 'Confirm Location', hi: 'स्थान की पुष्टि करें', kn: 'ಸ್ಥಳವನ್ನು ಖಚಿತಪಡಿಸಿ' },
  locationCaptured: { en: 'Location captured', hi: 'स्थान कैप्चर किया गया', kn: 'ಸ್ಥಳ ಸೆರೆಹಿಡಿಯಲಾಗಿದೆ' },
  next: { en: 'Next', hi: 'अगला', kn: 'ಮುಂದೆ' },
  previous: { en: 'Previous', hi: 'पिछला', kn: 'ಹಿಂದೆ' },
  submit: { en: 'Submit', hi: 'जमा करें', kn: 'ಸಲ್ಲಿಸಿ' },
  surveyComplete: { en: 'Survey Complete!', hi: 'सर्वेक्षण पूर्ण!', kn: 'ಸಮೀಕ್ಷೆ ಪೂರ್ಣ!' },
  addPhoto: { en: 'Add Photo', hi: 'फोटो जोड़ें', kn: 'ಫೋಟೋ ಸೇರಿಸಿ' },
  addComment: { en: 'Add Comment', hi: 'टिप्पणी जोड़ें', kn: 'ಕಾಮೆಂಟ್ ಸೇರಿಸಿ' },
  skip: { en: 'Skip', hi: 'छोड़ें', kn: 'ಬಿಟ್ಟುಬಿಡಿ' },

  // Profile
  profile: { en: 'Profile', hi: 'प्रोफ़ाइल', kn: 'ಪ್ರೊಫೈಲ್' },
  name: { en: 'Name', hi: 'नाम', kn: 'ಹೆಸರು' },
  email: { en: 'Email', hi: 'ईमेल', kn: 'ಇಮೇಲ್' },
  assignedWard: { en: 'Assigned Ward', hi: 'निर्धारित वार्ड', kn: 'ನಿಯೋಜಿತ ವಾರ್ಡ್' },
  emergencyContact: { en: 'Emergency Contact', hi: 'आपातकालीन संपर्क', kn: 'ತುರ್ತು ಸಂಪರ್ಕ' },
  applyLeave: { en: 'Apply for Leave', hi: 'छुट्टी के लिए आवेदन करें', kn: 'ರಜೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ' },
  logout: { en: 'Logout', hi: 'लॉगआउट', kn: 'ಲಾಗ್‌ಔಟ್' },

  // Tasks
  tasks: { en: 'Tasks', hi: 'कार्य', kn: 'ಕಾರ್ಯಗಳು' },
  deadline: { en: 'Deadline', hi: 'समय सीमा', kn: 'ಗಡುವು' },
  households: { en: 'Households', hi: 'घर', kn: 'ಮನೆಗಳು' },
  priority: { en: 'Priority', hi: 'प्राथमिकता', kn: 'ಆದ್ಯತೆ' },
  high: { en: 'High', hi: 'उच्च', kn: 'ಹೆಚ್ಚಿನ' },
  medium: { en: 'Medium', hi: 'मध्यम', kn: 'ಮಧ್ಯಮ' },
  low: { en: 'Low', hi: 'निम्न', kn: 'ಕಡಿಮೆ' },

  // Performance
  performance: { en: 'Performance', hi: 'प्रदर्शन', kn: 'ಕಾರ್ಯಕ್ಷಮತೆ' },
  responseRate: { en: 'Response Rate', hi: 'प्रतिक्रिया दर', kn: 'ಪ್ರತಿಕ್ರಿಯೆ ದರ' },
  qualityScore: { en: 'Quality Score', hi: 'गुणवत्ता स्कोर', kn: 'ಗುಣಮಟ್ಟ ಸ್ಕೋರ್' },
  weeklyTrend: { en: 'Weekly Trend', hi: 'साप्ताहिक रुझान', kn: 'ಸಾಪ್ತಾಹಿಕ ಪ್ರವೃತ್ತಿ' },

  // Notifications
  notifications: { en: 'Notifications', hi: 'सूचनाएं', kn: 'ಅಧಿಸೂಚನೆಗಳು' },
  markAllRead: { en: 'Mark all read', hi: 'सभी पढ़ा हुआ चिह्नित करें', kn: 'ಎಲ್ಲವನ್ನೂ ಓದಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ' },

  // Share
  shareSurvey: { en: 'Share Survey', hi: 'सर्वेक्षण साझा करें', kn: 'ಸಮೀಕ್ಷೆ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareViaWhatsApp: { en: 'Share via WhatsApp', hi: 'WhatsApp से साझा करें', kn: 'WhatsApp ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareViaSMS: { en: 'Share via SMS', hi: 'SMS से साझा करें', kn: 'SMS ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareViaQR: { en: 'Share via QR Code', hi: 'QR कोड से साझा करें', kn: 'QR ಕೋಡ್ ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ' },

  // Settings
  settings: { en: 'Settings', hi: 'सेटिंग्स', kn: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು' },
  language: { en: 'Language', hi: 'भाषा', kn: 'ಭಾಷೆ' },
  syncPreferences: { en: 'Sync Preferences', hi: 'सिंक प्राथमिकताएं', kn: 'ಸಿಂಕ್ ಆದ್ಯತೆಗಳು' },
  autoSync: { en: 'Auto Sync', hi: 'ऑटो सिंक', kn: 'ಸ್ವಯಂ ಸಿಂಕ್' },

  // Leave
  leaveApplication: { en: 'Leave Application', hi: 'छुट्टी आवेदन', kn: 'ರಜೆ ಅರ್ಜಿ' },
  selectDate: { en: 'Select Date', hi: 'तारीख चुनें', kn: 'ದಿನಾಂಕ ಆಯ್ಕೆ ಮಾಡಿ' },
  reason: { en: 'Reason', hi: 'कारण', kn: 'ಕಾರಣ' },
  submitLeave: { en: 'Submit Leave Request', hi: 'छुट्टी अनुरोध जमा करें', kn: 'ರಜೆ ವಿನಂತಿ ಸಲ್ಲಿಸಿ' },

  // Supervisor
  supervisor: { en: 'Supervisor Panel', hi: 'पर्यवेक्षक पैनल', kn: 'ಮೇಲ್ವಿಚಾರಕ ಪ್ಯಾನೆಲ್' },
  volunteers: { en: 'Volunteers', hi: 'स्वयंसेवक', kn: 'ಸ್ವಯಂಸೇವಕರು' },
  submissions: { en: 'Submissions', hi: 'जमा', kn: 'ಸಲ್ಲಿಕೆಗಳು' },
  flagResponse: { en: 'Flag Response', hi: 'प्रतिक्रिया चिह्नित करें', kn: 'ಪ್ರತಿಕ್ರಿಯೆ ಫ್ಲ್ಯಾಗ್ ಮಾಡಿ' },
  sendInstruction: { en: 'Send Instruction', hi: 'निर्देश भेजें', kn: 'ಸೂಚನೆ ಕಳುಹಿಸಿ' },

  // Common
  yes: { en: 'Yes', hi: 'हां', kn: 'ಹೌದು' },
  no: { en: 'No', hi: 'नहीं', kn: 'ಇಲ್ಲ' },
  undecided: { en: 'Undecided', hi: 'अनिश्चित', kn: 'ಅನಿರ್ಧಾರಿತ' },
  cancel: { en: 'Cancel', hi: 'रद्द करें', kn: 'ರದ್ದು ಮಾಡಿ' },
  save: { en: 'Save', hi: 'सहेजें', kn: 'ಉಳಿಸಿ' },
  back: { en: 'Back', hi: 'वापस', kn: 'ಹಿಂದೆ' },
  of: { en: 'of', hi: 'का', kn: 'ರ' },

  // Sentiment
  verySatisfied: { en: 'Very Satisfied', hi: 'बहुत संतुष्ट', kn: 'ಬಹಳ ತೃಪ್ತಿ' },
  satisfied: { en: 'Satisfied', hi: 'संतुष्ट', kn: 'ತೃಪ್ತಿ' },
  neutral: { en: 'Neutral', hi: 'तटस्थ', kn: 'ತಟಸ್ಥ' },
  dissatisfied: { en: 'Dissatisfied', hi: 'असंतुष्ट', kn: 'ಅತೃಪ್ತಿ' },
  veryDissatisfied: { en: 'Very Dissatisfied', hi: 'बहुत असंतुष्ट', kn: 'ಬಹಳ ಅತೃಪ್ತಿ' },

  // Photo types
  infrastructure: { en: 'Infrastructure', hi: 'बुनियादी ढांचा', kn: 'ಮೂಲಸೌಕರ್ಯ' },
  environment: { en: 'Environment', hi: 'पर्यावरण', kn: 'ಪರಿಸರ' },
  community: { en: 'Community', hi: 'समुदाय', kn: 'ಸಮುದಾಯ' },
};

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.en || key;
}
