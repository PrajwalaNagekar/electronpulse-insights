import { Language } from '@/types';

type TranslationKeys = Record<string, Record<Language, string>>;

export const translations: TranslationKeys = {
  // App
  appName: { en: 'Citizen First', hi: 'सिटीजन फर्स्ट', kn: 'ಸಿಟಿಜನ್ ಫಸ್ಟ್' },
  fieldApp: { en: 'Field Volunteer App', hi: 'फील्ड वॉलंटियर ऐप', kn: 'ಫೀಲ್ಡ್ ವಾಲಂಟೀರ್ ಆ್ಯಪ್' },

  // Login
  signIn: { en: 'Sign In', hi: 'साइन इन', kn: 'ಸೈನ್ ಇನ್' },
  signUp: { en: 'Sign Up', hi: 'साइन अप', kn: 'ಸೈನ್ ಅಪ್' },
  login: { en: 'Login', hi: 'लॉगिन', kn: 'ಲಾಗಿನ್' },
  phoneNumber: { en: 'Phone Number', hi: 'फोन नंबर', kn: 'ಫೋನ್ ನಂಬರ್' },
  enterPhone: { en: 'Enter your phone number', hi: 'अपना फोन नंबर दर्ज करें', kn: 'ನಿಮ್ಮ ಫೋನ್ ನಂಬರ್ ನಮೂದಿಸಿ' },
  sendOtp: { en: 'Send OTP', hi: 'OTP भेजें', kn: 'OTP ಕಳುಹಿಸಿ' },
  enterOtp: { en: 'Enter OTP', hi: 'OTP दर्ज करें', kn: 'OTP ನಮೂದಿಸಿ' },
  verifyOtp: { en: 'Verify & Login', hi: 'सत्यापित करें और लॉगिन करें', kn: 'ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗಿನ್' },
  selectLanguage: { en: 'Select Language', hi: 'भाषा चुनें', kn: 'ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ' },
  biometricLogin: { en: 'Use Biometric Login', hi: 'बायोमेट्रिक लॉगिन उपयोग करें', kn: 'ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಗಿನ್ ಬಳಸಿ' },
  emailAddress: { en: 'Email Address', hi: 'ईमेल पता', kn: 'ಇಮೇಲ್ ವಿಳಾಸ' },
  password: { en: 'Password', hi: 'पासवर्ड', kn: 'ಪಾಸ್‌ವರ್ಡ್' },
  loginWithEmail: { en: 'Login with Email', hi: 'ईमेल से लॉगिन', kn: 'ಇಮೇಲ್‌ನಿಂದ ಲಾಗಿನ್' },
  orLoginWith: { en: 'or login with', hi: 'या इससे लॉगिन करें', kn: 'ಅಥಿವಾ ಇದರಿಂದ ಲಾಗಿನ್' },
  fullName: { en: 'Full Name', hi: 'पूरा नाम', kn: 'ಪೂರ್ಣ ಹೆಸರು' },
  currentAddress: { en: 'Current Residential Address', hi: 'वर्तमान आवासीय पता', kn: 'ಪ್ರಸ್ತುತ ವಾಸ ವಿಳಾಸ' },
  aadhaarNumber: { en: 'Aadhaar Number', hi: 'आधार नंबर', kn: 'ಆಧಾರ್ ಸಂಖ್ಯೆ' },
  panNumber: { en: 'PAN Card Number', hi: 'पैन कार्ड नंबर', kn: 'ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ' },
  uploadAadhaar: { en: 'Upload Aadhaar Image', hi: 'आधार फोटो अपलोड करें', kn: 'ಆಧಾರ್ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' },
  uploadPan: { en: 'Upload PAN Image', hi: 'पैन फोटो अपलोड करें', kn: 'ಪ್ಯಾನ್ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' },
  takeSelfie: { en: 'Take Selfie', hi: 'सेल्फी लें', kn: 'ಸೆಲ್ಫಿ ತೆಗೆಯಿರಿ' },
  submitRegistration: { en: 'Submit Registration', hi: 'पंजीकरण जमा करें', kn: 'ನೋಂದಣಿ ಸಲ್ಲಿಸಿ' },
  pendingVerification: { en: 'Pending Admin Verification', hi: 'व्यवस्थापक सत्यापन लंबित', kn: 'ನಿರ್ವಾಹಕ ಪರಿಶೀಲನೆ ಬಾಕಿ' },
  pendingVerificationDesc: { en: 'Your account is under review. You will receive your login credentials once approved.', hi: 'आपका खाता समीक्षाधीन है। स्वीकृति के बाद आपको लॉगिन विवरण मिलेंगे।', kn: 'ನಿಮ್ಮ ಖಾತೆ ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ. ಅನುಮೋದಿಸಿದ ನಂತರ ನಿಮಗೆ ಲಾಗಿನ್ ವಿವರಗಳು ಸಿಗುತ್ತವೆ.' },
  accountNotApproved: { en: 'Account not yet approved by admin', hi: 'खाता अभी तक व्यवस्थापक द्वारा स्वीकृत नहीं', kn: 'ಖಾತೆ ಇನ್ನೂ ನಿರ್ವಾಹಕರಿಂದ ಅನುಮೋದಿಸಲಾಗಿಲ್ಲ' },
  personalDetails: { en: 'Personal Details', hi: 'व्यक्तिगत विवरण', kn: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು' },
  identityVerification: { en: 'Identity Verification', hi: 'पहचान सत्यापन', kn: 'ಗುರುತಿನ ಪರಿಶೀಲನೆ' },
  documentUpload: { en: 'Document Upload', hi: 'दस्तावेज़ अपलोड', kn: 'ದಾಖಲೆ ಅಪ್‌ಲೋಡ್' },
  nextStep: { en: 'Next Step', hi: 'अगला चरण', kn: 'ಮುಂದಿನ ಹಂತ' },
  previousStep: { en: 'Previous Step', hi: 'पिछला चरण', kn: 'ಹಿಂದಿನ ಹಂತ' },
  step: { en: 'Step', hi: 'चरण', kn: 'ಹಂತ' },
  verifying: { en: 'Verifying...', hi: 'सत्यापित हो रहा है...', kn: 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...' },

  // Home (was Dashboard)
  home: { en: 'Home', hi: 'होम', kn: 'ಹೋಮ್' },
  dashboard: { en: 'Home', hi: 'होम', kn: 'ಹೋಮ್' },
  assignedRegion: { en: 'Assigned Region', hi: 'निर्धारित क्षेत्र', kn: 'ನಿಯೋಜಿತ ಪ್ರದೇಶ' },
  dailyTarget: { en: 'Daily Target', hi: 'दैनिक लक्ष्य', kn: 'ದೈನಿಕ ಗುರಿ' },
  completed: { en: 'Completed', hi: 'पूर्ण', kn: 'ಪೂರ್ಣಗೊಂಡಿದೆ' },
  pending: { en: 'Pending', hi: 'लंबित', kn: 'ಬಾಕಿ' },
  syncStatus: { en: 'Sync Status', hi: 'सिंक स्थिति', kn: 'ಸಿಂಕ್ ಸ್ಥಿತಿ' },
  startSurvey: { en: 'Start Survey', hi: 'सर्वेक्षण शुरू करें', kn: 'ಸಮೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ' },
  viewTasks: { en: 'View Tasks', hi: 'कार्य देखें', kn: 'ಕಾರ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ' },
  shareProgress: { en: 'Share Progress', hi: 'प्रगति साझा करें', kn: 'ಪ್ರಗತಿ ಹಂಚಿಕೊಳ್ಳಿ' },
  sendSurveyLink: { en: 'Share Progress', hi: 'प्रगति साझा करें', kn: 'ಪ್ರಗತಿ ಹಂಚಿಕೊಳ್ಳಿ' },
  syncData: { en: 'Sync Data', hi: 'डेटा सिंक करें', kn: 'ಡೇಟಾ ಸಿಂಕ್ ಮಾಡಿ' },
  welcomeBack: { en: 'Welcome back', hi: 'वापसी पर स्वागत', kn: 'ಮರಳಿ ಸ್ವಾಗತ' },
  todayProgress: { en: "Today's Progress", hi: 'आज की प्रगति', kn: 'ಇಂದಿನ ಪ್ರಗತಿ' },
  syncing: { en: 'Syncing...', hi: 'सिंक हो रहा है...', kn: 'ಸಿಂಕ್ ಆಗುತ್ತಿದೆ...' },
  syncSuccess: { en: '3 surveys synced successfully', hi: '3 सर्वेक्षण सफलतापूर्वक सिंक हुए', kn: '3 ಸಮೀಕ್ಷೆಗಳು ಯಶಸ್ವಿಯಾಗಿ ಸಿಂಕ್ ಆಗಿವೆ' },

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
  submitEarly: { en: 'Submit Early', hi: 'जल्दी जमा करें', kn: 'ಮುಂಚಿತವಾಗಿ ಸಲ್ಲಿಸಿ' },
  surveyComplete: { en: 'Survey Complete!', hi: 'सर्वेक्षण पूर्ण!', kn: 'ಸಮೀಕ್ಷೆ ಪೂರ್ಣ!' },
  addPhoto: { en: 'Add Photo', hi: 'फोटो जोड़ें', kn: 'ಫೋಟೋ ಸೇರಿಸಿ' },
  addComment: { en: 'Add Comment', hi: 'टिप्पणी जोड़ें', kn: 'ಕಾಮೆಂಟ್ ಸೇರಿಸಿ' },
  skip: { en: 'Skip', hi: 'छोड़ें', kn: 'ಬಿಟ್ಟುಬಿಡಿ' },
  questionsAnswered: { en: 'questions answered', hi: 'प्रश्नों का उत्तर दिया', kn: 'ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಲಾಗಿದೆ' },
  minimumRequired: { en: 'Minimum 30 questions required to submit', hi: 'जमा करने के लिए न्यूनतम 30 प्रश्न आवश्यक', kn: 'ಸಲ್ಲಿಸಲು ಕನಿಷ್ಠ 30 ಪ್ರಶ್ನೆಗಳು ಅಗತ್ಯ' },
  tapToRecord: { en: 'Tap to record', hi: 'रिकॉर्ड करने के लिए टैप करें', kn: 'ರೆಕಾರ್ಡ್ ಮಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ' },
  typeResponse: { en: 'Type your response...', hi: 'अपनी प्रतिक्रिया टाइप करें...', kn: 'ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ ಟೈಪ್ ಮಾಡಿ...' },
  selectSurveyType: { en: 'Select survey type', hi: 'सर्वेक्षण प्रकार चुनें', kn: 'ಸಮೀಕ್ಷೆ ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ' },

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
  taskSummary: { en: 'Task Summary', hi: 'कार्य सारांश', kn: 'ಕಾರ್ಯ ಸಾರಾಂಶ' },
  totalTasks: { en: 'Total Tasks', hi: 'कुल कार्य', kn: 'ಒಟ್ಟು ಕಾರ್ಯಗಳು' },
  completedTasks: { en: 'Completed', hi: 'पूर्ण', kn: 'ಪೂರ್ಣ' },
  inProgress: { en: 'In Progress', hi: 'प्रगति पर', kn: 'ಪ್ರಗತಿಯಲ್ಲಿ' },
  progress: { en: 'Progress', hi: 'प्रगति', kn: 'ಪ್ರಗತಿ' },
  tapToUpdate: { en: 'Tap to update status', hi: 'स्थिति अपडेट करने के लिए टैप करें', kn: 'ಸ್ಥಿತಿ ನವೀಕರಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ' },

  // Performance
  performance: { en: 'Performance', hi: 'प्रदर्शन', kn: 'ಕಾರ್ಯಕ್ಷಮತೆ' },
  responseRate: { en: 'Response Rate', hi: 'प्रतिक्रिया दर', kn: 'ಪ್ರತಿಕ್ರಿಯೆ ದರ' },
  qualityScore: { en: 'Quality Score', hi: 'गुणवत्ता स्कोर', kn: 'ಗುಣಮಟ್ಟ ಸ್ಕೋರ್' },
  weeklyTrend: { en: 'Weekly Trend', hi: 'साप्ताहिक रुझान', kn: 'ಸಾಪ್ತಾಹಿಕ ಪ್ರವೃತ್ತಿ' },
  surveysToday: { en: 'surveys completed today', hi: 'आज सर्वेक्षण पूर्ण', kn: 'ಇಂದು ಪೂರ್ಣಗೊಂಡ ಸಮೀಕ್ಷೆಗಳು' },

  // Notifications
  notifications: { en: 'Notifications', hi: 'सूचनाएं', kn: 'ಅಧಿಸೂಚನೆಗಳು' },
  markAllRead: { en: 'Mark all read', hi: 'सभी पढ़ा हुआ चिह्नित करें', kn: 'ಎಲ್ಲವನ್ನೂ ಓದಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ' },

  // Share Progress
  shareSurvey: { en: 'Share Progress', hi: 'प्रगति साझा करें', kn: 'ಪ್ರಗತಿ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareViaWhatsApp: { en: 'Share via WhatsApp', hi: 'WhatsApp से साझा करें', kn: 'WhatsApp ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareViaSMS: { en: 'Share via SMS', hi: 'SMS से साझा करें', kn: 'SMS ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareViaQR: { en: 'Share via QR Code', hi: 'QR कोड से साझा करें', kn: 'QR ಕೋಡ್ ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareWithSupervisor: { en: 'Share with Supervisor', hi: 'पर्यवेक्षक के साथ साझा करें', kn: 'ಮೇಲ್ವಿಚಾರಕರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ' },
  shareWithCoworkers: { en: 'Share with Co-workers', hi: 'सहकर्मियों के साथ साझा करें', kn: 'ಸಹೋದ್ಯೋಗಿಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ' },
  myProgress: { en: 'My Progress', hi: 'मेरी प्रगति', kn: 'ನನ್ನ ಪ್ರಗತಿ' },
  currentLocation: { en: 'Current Location', hi: 'वर्तमान स्थान', kn: 'ಪ್ರಸ್ತುತ ಸ್ಥಳ' },
  todayStats: { en: "Today's Stats", hi: 'आज के आंकड़े', kn: 'ಇಂದಿನ ಅಂಕಿಅಂಶಗಳು' },

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
  startTime: { en: 'Start Time', hi: 'शुरू का समय', kn: 'ಪ್ರಾರಂಭ ಸಮಯ' },
  endTime: { en: 'End Time', hi: 'समाप्ति का समय', kn: 'ಅಂತಿಮ ಸಮಯ' },
  approver: { en: 'Approver', hi: 'अनुमोदक', kn: 'ಅನುಮೋದಕ' },
  districtSupervisor: { en: 'District Supervisor', hi: 'जिला पर्यवेक्षक', kn: 'ಜಿಲ್ಲಾ ಮೇಲ್ವಿಚಾರಕ' },
  campaignManager: { en: 'Campaign Manager', hi: 'अभियान प्रबंधक', kn: 'ಪ್ರಚಾರ ವ್ಯವಸ್ಥಾಪಕ' },
  leaveSubmitted: { en: 'Leave Request Submitted', hi: 'छुट्टी अनुरोध जमा किया गया', kn: 'ರಜೆ ವಿನಂತಿ ಸಲ್ಲಿಸಲಾಗಿದೆ' },
  leaveApprovalChain: { en: 'Your request has been sent for approval', hi: 'आपका अनुरोध अनुमोदन के लिए भेजा गया है', kn: 'ನಿಮ್ಮ ವಿನಂತಿ ಅನುಮೋದನೆಗೆ ಕಳುಹಿಸಲಾಗಿದೆ' },
  enterReason: { en: 'Enter reason for leave...', hi: 'छुट्टी का कारण दर्ज करें...', kn: 'ರಜೆಯ ಕಾರಣ ನಮೂದಿಸಿ...' },
  primaryApprover: { en: 'Primary Approver', hi: 'प्राथमिक अनुमोदक', kn: 'ಪ್ರಾಥಮಿಕ ಅನುಮೋದಕ' },
  secondaryApprover: { en: 'Secondary Approver', hi: 'द्वितीयक अनुमोदक', kn: 'ದ್ವಿತೀಯ ಅನುಮೋದಕ' },

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
  online: { en: 'Online', hi: 'ऑनलाइन', kn: 'ಆನ್‌ಲೈನ್' },
  offline: { en: 'Offline', hi: 'ऑफ़लाइन', kn: 'ಆಫ್‌ಲೈನ್' },
  poweredBy: { en: 'Powered by Anormos', hi: 'Anormos द्वारा संचालित', kn: 'Anormos ಮೂಲಕ ನಡೆಸಲಾಗುತ್ತಿದೆ' },
  goHome: { en: 'Go to Home', hi: 'होम पर जाएं', kn: 'ಹೋಮ್‌ಗೆ ಹೋಗಿ' },
  synced: { en: 'Synced', hi: 'सिंक हुआ', kn: 'ಸಿಂಕ್ ಆಗಿದೆ' },
  answers: { en: 'answers', hi: 'उत्तर', kn: 'ಉತ್ತರಗಳು' },

  // Survey modal
  startYourSurvey: { en: 'Start your survey', hi: 'अपना सर्वेक्षण शुरू करें', kn: 'ನಿಮ್ಮ ಸಮೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ' },
  surveyNudgeSubtitle: { en: 'Your feedback matters. Help us understand citizen concerns by answering a few quick questions.', hi: 'आपकी प्रतिक्रिया मायने रखती है। कुछ प्रश्नों का उत्तर देकर नागरिकों की चिंताओं को समझने में हमारी सहायता करें।', kn: 'ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ಮುಖ್ಯ. ಕೆಲವು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ ನಾಗರಿಕರ ಕಳವಳಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ.' },
  continueToApp: { en: 'Continue to App', hi: 'ऐप पर जारी रखें', kn: 'ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ' },
  surveySubmittedToast: { en: 'Survey submitted successfully.', hi: 'सर्वेक्षण सफलतापूर्वक जमा किया गया।', kn: 'ಸಮೀಕ್ಷೆ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.' },
  surveySubmittedCount: { en: 'Survey submitted. You answered {count} questions.', hi: 'सर्वेक्षण जमा। आपने {count} प्रश्नों का उत्तर दिया।', kn: 'ಸಮೀಕ್ಷೆ ಸಲ್ಲಿಸಲಾಗಿದೆ. ನೀವು {count} ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿದ್ದೀರಿ.' },

  // Respondent info (Exercise mode)
  citizenName: { en: 'Citizen Name', hi: 'नागरिक का नाम', kn: 'ನಾಗರಿಕರ ಹೆಸರು' },
  citizenPhone: { en: 'Phone Number', hi: 'फोन नंबर', kn: 'ಫೋನ್ ನಂಬರ್' },
  areaName: { en: 'Area Name', hi: 'क्षेत्र का नाम', kn: 'ಪ್ರದೇಶದ ಹೆಸರು' },
  respondentInfo: { en: 'Respondent Information', hi: 'उत्तरदाता जानकारी', kn: 'ಪ್ರತಿವಾದಿ ಮಾಹಿತಿ' },
  proceedToSurvey: { en: 'Proceed to Survey', hi: 'सर्वेक्षण पर आगे बढ़ें', kn: 'ಸಮೀಕ್ಷೆಗೆ ಮುಂದುವರಿಯಿರಿ' },
  backgroundLocationWarning: { en: 'Background location helps validate fieldwork. Please re-enable it in settings.', hi: 'पृष्ठभूमि स्थान फ़ील्डवर्क को मान्य करने में सहायता करता है। कृपया इसे सेटिंग्स में पुनः सक्षम करें।', kn: 'ಹಿನ್ನೆಲೆ ಸ್ಥಳವು ಕ್ಷೇತ್ರಕಾರ್ಯವನ್ನು ಮೌಲ್ಯೀಕರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ದಯವಿಟ್ಟು ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಮತ್ತೆ ಸಕ್ರಿಯಗೊಳಿಸಿ.' },
  enterCitizenName: { en: 'Enter citizen name', hi: 'नागरिक का नाम दर्ज करें', kn: 'ನಾಗರಿಕರ ಹೆಸರು ನಮೂದಿಸಿ' },
  enterPhoneNumber: { en: 'Enter phone number', hi: 'फोन नंबर दर्ज करें', kn: 'ಫೋನ್ ನಂಬರ್ ನಮೂದಿಸಿ' },
  enterAreaName: { en: 'Enter area name', hi: 'क्षेत्र का नाम दर्ज करें', kn: 'ಪ್ರದೇಶದ ಹೆಸರು ನಮೂದಿಸಿ' },

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
