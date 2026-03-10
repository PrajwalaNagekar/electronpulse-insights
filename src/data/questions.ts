import { SurveyQuestion } from '@/types';

// 50 Questions (Party Worker) + 50 Exercise (Citizen Survey)
// All questions relevant to Karnataka politics and local issues

export const surveyQuestions: SurveyQuestion[] = [
  // ===== QUESTIONS (Party Worker Assessment) - 50 =====
  { id: 'q1', surveyType: 'question', category: 'Organization', questionType: 'star_rating', required: true,
    text: { en: 'How effective is the booth-level party organization in your area?', hi: 'आपके क्षेत्र में बूथ-स्तरीय पार्टी संगठन कितना प्रभावी है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಬೂತ್ ಮಟ್ಟದ ಪಕ್ಷ ಸಂಘಟನೆ ಎಷ್ಟು ಪರಿಣಾಮಕಾರಿ?' }
  },
  { id: 'q2', surveyType: 'question', category: 'Strategy', questionType: 'multiple_choice', required: true,
    text: { en: 'What is the primary challenge in voter outreach?', hi: 'मतदाता तक पहुंच में प्राथमिक चुनौती क्या है?', kn: 'ಮತದಾರರ ಸಂಪರ್ಕದಲ್ಲಿ ಪ್ರಮುಖ ಸವಾಲು ಏನು?' },
    options: [
      { id: 'q2a', text: { en: 'Lack of volunteers', hi: 'स्वयंसेवकों की कमी', kn: 'ಸ್ವಯಂಸೇವಕರ ಕೊರತೆ' } },
      { id: 'q2b', text: { en: 'Poor communication', hi: 'खराब संचार', kn: 'ಕಳಪೆ ಸಂವಹನ' } },
      { id: 'q2c', text: { en: 'Anti-incumbency', hi: 'सत्ता विरोधी भावना', kn: 'ಆಡಳಿತ ವಿರೋಧಿ ಭಾವನೆ' } },
      { id: 'q2d', text: { en: 'Opposition strength', hi: 'विपक्ष की ताकत', kn: 'ವಿರೋಧ ಪಕ್ಷದ ಬಲ' } }
    ]
  },
  { id: 'q3', surveyType: 'question', category: 'Campaign', questionType: 'yes_no', required: true,
    text: { en: 'Has campaign material been distributed in your booth area?', hi: 'क्या आपके बूथ क्षेत्र में प्रचार सामग्री वितरित की गई है?', kn: 'ನಿಮ್ಮ ಬೂತ್ ಪ್ರದೇಶದಲ್ಲಿ ಪ್ರಚಾರ ಸಾಮಗ್ರಿ ವಿತರಿಸಲಾಗಿದೆಯೇ?' }
  },
  { id: 'q4', surveyType: 'question', category: 'Leadership', questionType: 'emoji_slider', required: true,
    text: { en: 'How confident are you in the local leadership?', hi: 'स्थानीय नेतृत्व में आप कितने आश्वस्त हैं?', kn: 'ಸ್ಥಳೀಯ ನಾಯಕತ್ವದ ಬಗ್ಗೆ ನಿಮಗೆ ಎಷ್ಟು ವಿಶ್ವಾಸ?' }
  },
  { id: 'q5', surveyType: 'question', category: 'Social Media', questionType: 'multiple_choice', required: true,
    text: { en: 'Which social media platform is most effective for outreach?', hi: 'आउटरीच के लिए कौन सा सोशल मीडिया प्लेटफॉर्म सबसे प्रभावी है?', kn: 'ಸಂಪರ್ಕಕ್ಕೆ ಯಾವ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪರಿಣಾಮಕಾರಿ?' },
    options: [
      { id: 'q5a', text: { en: 'WhatsApp', hi: 'WhatsApp', kn: 'WhatsApp' } },
      { id: 'q5b', text: { en: 'Facebook', hi: 'Facebook', kn: 'Facebook' } },
      { id: 'q5c', text: { en: 'Instagram', hi: 'Instagram', kn: 'Instagram' } },
      { id: 'q5d', text: { en: 'YouTube', hi: 'YouTube', kn: 'YouTube' } }
    ]
  },
  { id: 'q6', surveyType: 'question', category: 'Voter Data', questionType: 'star_rating', required: true,
    text: { en: 'Rate the accuracy of voter database in your area', hi: 'अपने क्षेत्र में मतदाता डेटाबेस की सटीकता रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಮತದಾರರ ಡೇಟಾಬೇಸ್ ನಿಖರತೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q7', surveyType: 'question', category: 'Coordination', questionType: 'emoji_slider', required: true,
    text: { en: 'How well do you coordinate with local panchayat members?', hi: 'स्थानीय पंचायत सदस्यों के साथ आप कितना अच्छा समन्वय करते हैं?', kn: 'ಸ್ಥಳೀಯ ಪಂಚಾಯತ್ ಸದಸ್ಯರೊಂದಿಗೆ ನಿಮ್ಮ ಸಮನ್ವಯ ಹೇಗಿದೆ?' }
  },
  { id: 'q8', surveyType: 'question', category: 'Events', questionType: 'yes_no', required: true,
    text: { en: 'Have you organized any public meeting in the last week?', hi: 'क्या आपने पिछले सप्ताह कोई सार्वजनिक बैठक आयोजित की?', kn: 'ಕಳೆದ ವಾರ ಯಾವುದಾದರೂ ಸಾರ್ವಜನಿಕ ಸಭೆ ಆಯೋಜಿಸಿದ್ದೀರಾ?' }
  },
  { id: 'q9', surveyType: 'question', category: 'Youth', questionType: 'multiple_choice', required: true,
    text: { en: 'What issues concern youth voters the most?', hi: 'युवा मतदाताओं की सबसे बड़ी चिंता क्या है?', kn: 'ಯುವ ಮತದಾರರಿಗೆ ಯಾವ ಸಮಸ್ಯೆ ಹೆಚ್ಚು ಕಾಡುತ್ತದೆ?' },
    options: [
      { id: 'q9a', text: { en: 'Employment', hi: 'रोजगार', kn: 'ಉದ್ಯೋಗ' } },
      { id: 'q9b', text: { en: 'Education', hi: 'शिक्षा', kn: 'ಶಿಕ್ಷಣ' } },
      { id: 'q9c', text: { en: 'Digital services', hi: 'डिजिटल सेवाएं', kn: 'ಡಿಜಿಟಲ್ ಸೇವೆಗಳು' } },
      { id: 'q9d', text: { en: 'Housing', hi: 'आवास', kn: 'ವಸತಿ' } }
    ]
  },
  { id: 'q10', surveyType: 'question', category: 'Strategy', questionType: 'short_text', required: false,
    text: { en: 'What local issue should the candidate address first?', hi: 'उम्मीदवार को सबसे पहले किस स्थानीय मुद्दे पर ध्यान देना चाहिए?', kn: 'ಅಭ್ಯರ್ಥಿ ಮೊದಲು ಯಾವ ಸ್ಥಳೀಯ ಸಮಸ್ಯೆ ಪರಿಹರಿಸಬೇಕು?' }
  },
  { id: 'q11', surveyType: 'question', category: 'Campaign', questionType: 'star_rating', required: true,
    text: { en: 'Rate the visibility of party banners and posters', hi: 'पार्टी बैनर और पोस्टर की दृश्यता रेट करें', kn: 'ಪಕ್ಷದ ಬ್ಯಾನರ್ ಮತ್ತು ಪೋಸ್ಟರ್ ಗೋಚರತೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q12', surveyType: 'question', category: 'Opposition', questionType: 'multiple_choice', required: true,
    text: { en: 'Which opposition tactic is most effective against us?', hi: 'हमारे खिलाफ कौन सी विपक्षी रणनीति सबसे प्रभावी है?', kn: 'ನಮ್ಮ ವಿರುದ್ಧ ಯಾವ ವಿರೋಧ ಪಕ್ಷದ ತಂತ್ರ ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿ?' },
    options: [
      { id: 'q12a', text: { en: 'Door-to-door visits', hi: 'घर-घर दौरा', kn: 'ಮನೆ-ಮನೆ ಭೇಟಿ' } },
      { id: 'q12b', text: { en: 'Social media campaigns', hi: 'सोशल मीडिया अभियान', kn: 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಅಭಿಯಾನ' } },
      { id: 'q12c', text: { en: 'Caste mobilization', hi: 'जाति लामबंदी', kn: 'ಜಾತಿ ಸಂಘಟನೆ' } },
      { id: 'q12d', text: { en: 'Freebies/promises', hi: 'मुफ्त/वादे', kn: 'ಉಚಿತ/ವಾಗ್ದಾನಗಳು' } }
    ]
  },
  { id: 'q13', surveyType: 'question', category: 'Volunteers', questionType: 'yes_no', required: true,
    text: { en: 'Do you have enough volunteers for booth management on election day?', hi: 'क्या चुनाव दिवस पर बूथ प्रबंधन के लिए पर्याप्त स्वयंसेवक हैं?', kn: 'ಚುನಾವಣೆ ದಿನ ಬೂತ್ ನಿರ್ವಹಣೆಗೆ ಸಾಕಷ್ಟು ಸ್ವಯಂಸೇವಕರಿದ್ದಾರೆಯೇ?' }
  },
  { id: 'q14', surveyType: 'question', category: 'Women Voters', questionType: 'emoji_slider', required: true,
    text: { en: 'How strong is women voter support in your booth?', hi: 'आपके बूथ में महिला मतदाता समर्थन कितना मजबूत है?', kn: 'ನಿಮ್ಮ ಬೂತ್‌ನಲ್ಲಿ ಮಹಿಳಾ ಮತದಾರ ಬೆಂಬಲ ಎಷ್ಟು ಪ್ರಬಲ?' }
  },
  { id: 'q15', surveyType: 'question', category: 'Transport', questionType: 'yes_no', required: true,
    text: { en: 'Have transport arrangements been made for elderly voters?', hi: 'क्या बुजुर्ग मतदाताओं के लिए परिवहन व्यवस्था की गई है?', kn: 'ಹಿರಿಯ ಮತದಾರರಿಗೆ ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗಿದೆಯೇ?' }
  },
  { id: 'q16', surveyType: 'question', category: 'Caste Dynamics', questionType: 'multiple_choice', required: true,
    text: { en: 'Which community needs more focused outreach?', hi: 'किस समुदाय को अधिक केंद्रित पहुंच की आवश्यकता है?', kn: 'ಯಾವ ಸಮುದಾಯಕ್ಕೆ ಹೆಚ್ಚು ಕೇಂದ್ರೀಕೃತ ಸಂಪರ್ಕ ಬೇಕು?' },
    options: [
      { id: 'q16a', text: { en: 'SC/ST community', hi: 'SC/ST समुदाय', kn: 'SC/ST ಸಮುದಾಯ' } },
      { id: 'q16b', text: { en: 'OBC community', hi: 'OBC समुदाय', kn: 'OBC ಸಮುದಾಯ' } },
      { id: 'q16c', text: { en: 'Minority community', hi: 'अल्पसंख्यक समुदाय', kn: 'ಅಲ್ಪಸಂಖ್ಯಾತ ಸಮುದಾಯ' } },
      { id: 'q16d', text: { en: 'General category', hi: 'सामान्य वर्ग', kn: 'ಸಾಮಾನ್ಯ ವರ್ಗ' } }
    ]
  },
  { id: 'q17', surveyType: 'question', category: 'Ground Report', questionType: 'short_text', required: false,
    text: { en: 'Describe the ground-level mood in your area today', hi: 'आज अपने क्षेत्र का जमीनी मूड बताएं', kn: 'ಇಂದು ನಿಮ್ಮ ಪ್ರದೇಶದ ನೆಲಮಟ್ಟದ ಮೂಡ್ ವಿವರಿಸಿ' }
  },
  { id: 'q18', surveyType: 'question', category: 'Funding', questionType: 'yes_no', required: true,
    text: { en: 'Have you received adequate funds for local campaign activities?', hi: 'क्या आपको स्थानीय अभियान गतिविधियों के लिए पर्याप्त धन मिला है?', kn: 'ಸ್ಥಳೀಯ ಪ್ರಚಾರ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸಾಕಷ್ಟು ಹಣ ಸಿಕ್ಕಿದೆಯೇ?' }
  },
  { id: 'q19', surveyType: 'question', category: 'Candidate', questionType: 'star_rating', required: true,
    text: { en: 'Rate the popularity of our candidate in your area', hi: 'अपने क्षेत्र में हमारे उम्मीदवार की लोकप्रियता रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ನಮ್ಮ ಅಭ್ಯರ್ಥಿಯ ಜನಪ್ರಿಯತೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q20', surveyType: 'question', category: 'Scheme Awareness', questionType: 'multiple_choice', required: true,
    text: { en: 'Which government scheme is most popular in your area?', hi: 'आपके क्षेत्र में कौन सी सरकारी योजना सबसे लोकप्रिय है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಯಾವ ಸರ್ಕಾರಿ ಯೋಜನೆ ಹೆಚ್ಚು ಜನಪ್ರಿಯ?' },
    options: [
      { id: 'q20a', text: { en: 'Gruha Lakshmi', hi: 'गृह लक्ष्मी', kn: 'ಗೃಹ ಲಕ್ಷ್ಮಿ' } },
      { id: 'q20b', text: { en: 'Gruha Jyothi', hi: 'गृह ज्योती', kn: 'ಗೃಹ ಜ್ಯೋತಿ' } },
      { id: 'q20c', text: { en: 'Anna Bhagya', hi: 'अन्न भाग्य', kn: 'ಅನ್ನ ಭಾಗ್ಯ' } },
      { id: 'q20d', text: { en: 'Shakti (Free bus)', hi: 'शक्ति (मुफ्त बस)', kn: 'ಶಕ್ತಿ (ಉಚಿತ ಬಸ್)' } }
    ]
  },
  { id: 'q21', surveyType: 'question', category: 'Rally', questionType: 'yes_no', required: true,
    text: { en: 'Can you mobilize 200+ people for a rally this week?', hi: 'क्या आप इस सप्ताह रैली के लिए 200+ लोगों को जुटा सकते हैं?', kn: 'ಈ ವಾರ ರ‍್ಯಾಲಿಗೆ 200+ ಜನರನ್ನು ಸಂಘಟಿಸಬಹುದೇ?' }
  },
  { id: 'q22', surveyType: 'question', category: 'Training', questionType: 'emoji_slider', required: true,
    text: { en: 'How well trained do you feel for election day operations?', hi: 'चुनाव दिवस के संचालन के लिए आप कितना प्रशिक्षित महसूस करते हैं?', kn: 'ಚುನಾವಣೆ ದಿನದ ಕಾರ್ಯಾಚರಣೆಗೆ ನೀವು ಎಷ್ಟು ತರಬೇತಿ ಪಡೆದಿದ್ದೀರಿ?' }
  },
  { id: 'q23', surveyType: 'question', category: 'Media', questionType: 'yes_no', required: true,
    text: { en: 'Is local media coverage favorable for our party?', hi: 'क्या स्थानीय मीडिया कवरेज हमारी पार्टी के पक्ष में है?', kn: 'ಸ್ಥಳೀಯ ಮಾಧ್ಯಮ ವರದಿ ನಮ್ಮ ಪಕ್ಷಕ್ಕೆ ಅನುಕೂಲಕರವಾಗಿದೆಯೇ?' }
  },
  { id: 'q24', surveyType: 'question', category: 'Defection', questionType: 'yes_no', required: true,
    text: { en: 'Are any party workers considering switching to opposition?', hi: 'क्या कोई पार्टी कार्यकर्ता विपक्ष में जाने पर विचार कर रहा है?', kn: 'ಯಾವುದೇ ಪಕ್ಷ ಕಾರ್ಯಕರ್ತರು ವಿರೋಧ ಪಕ್ಷಕ್ಕೆ ಹೋಗಲು ಯೋಚಿಸುತ್ತಿದ್ದಾರೆಯೇ?' }
  },
  { id: 'q25', surveyType: 'question', category: 'Voter List', questionType: 'star_rating', required: true,
    text: { en: 'Rate the completeness of voter identification in your booth', hi: 'अपने बूथ में मतदाता पहचान की पूर्णता रेट करें', kn: 'ನಿಮ್ಮ ಬೂತ್‌ನಲ್ಲಿ ಮತದಾರರ ಗುರುತಿಸುವಿಕೆ ಸಂಪೂರ್ಣತೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q26', surveyType: 'question', category: 'Ground Issues', questionType: 'multiple_choice', required: true,
    text: { en: 'Which topic dominates local conversation?', hi: 'स्थानीय बातचीत में कौन सा विषय हावी है?', kn: 'ಸ್ಥಳೀಯ ಸಂಭಾಷಣೆಯಲ್ಲಿ ಯಾವ ವಿಷಯ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿದೆ?' },
    options: [
      { id: 'q26a', text: { en: 'Price rise', hi: 'मूल्य वृद्धि', kn: 'ಬೆಲೆ ಏರಿಕೆ' } },
      { id: 'q26b', text: { en: 'Jobs', hi: 'नौकरी', kn: 'ಉದ್ಯೋಗ' } },
      { id: 'q26c', text: { en: 'Corruption', hi: 'भ्रष्टाचार', kn: 'ಭ್ರಷ್ಟಾಚಾರ' } },
      { id: 'q26d', text: { en: 'Development', hi: 'विकास', kn: 'ಅಭಿವೃದ್ಧಿ' } }
    ]
  },
  { id: 'q27', surveyType: 'question', category: 'WhatsApp', questionType: 'yes_no', required: true,
    text: { en: 'Have you shared party content in WhatsApp groups today?', hi: 'क्या आपने आज WhatsApp ग्रुप में पार्टी सामग्री साझा की?', kn: 'ಇಂದು WhatsApp ಗುಂಪುಗಳಲ್ಲಿ ಪಕ್ಷದ ವಿಷಯ ಹಂಚಿಕೊಂಡಿದ್ದೀರಾ?' }
  },
  { id: 'q28', surveyType: 'question', category: 'Opposition', questionType: 'short_text', required: false,
    text: { en: 'What promises is the opposition making in your area?', hi: 'विपक्ष आपके क्षेत्र में क्या वादे कर रहा है?', kn: 'ವಿರೋಧ ಪಕ್ಷ ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಯಾವ ವಾಗ್ದಾನ ಮಾಡುತ್ತಿದೆ?' }
  },
  { id: 'q29', surveyType: 'question', category: 'SC/ST', questionType: 'emoji_slider', required: true,
    text: { en: 'How satisfied are SC/ST communities with party efforts?', hi: 'पार्टी के प्रयासों से SC/ST समुदाय कितने संतुष्ट हैं?', kn: 'ಪಕ್ಷದ ಪ್ರಯತ್ನಗಳಿಂದ SC/ST ಸಮುದಾಯಗಳು ಎಷ್ಟು ತೃಪ್ತರಾಗಿದ್ದಾರೆ?' }
  },
  { id: 'q30', surveyType: 'question', category: 'Religion', questionType: 'yes_no', required: true,
    text: { en: 'Are religious sentiments being exploited by any party?', hi: 'क्या किसी पार्टी द्वारा धार्मिक भावनाओं का शोषण किया जा रहा है?', kn: 'ಯಾವುದೇ ಪಕ್ಷವು ಧಾರ್ಮಿಕ ಭಾವನೆಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳುತ್ತಿದೆಯೇ?' }
  },
  { id: 'q31', surveyType: 'question', category: 'Farmers', questionType: 'multiple_choice', required: true,
    text: { en: 'What is the biggest farmer issue in your area?', hi: 'आपके क्षेत्र में किसानों का सबसे बड़ा मुद्दा क्या है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ರೈತರ ಅತಿದೊಡ್ಡ ಸಮಸ್ಯೆ ಏನು?' },
    options: [
      { id: 'q31a', text: { en: 'MSP pricing', hi: 'MSP मूल्य', kn: 'MSP ಬೆಲೆ' } },
      { id: 'q31b', text: { en: 'Water/irrigation', hi: 'पानी/सिंचाई', kn: 'ನೀರು/ನೀರಾವರಿ' } },
      { id: 'q31c', text: { en: 'Loan waiver', hi: 'कर्ज माफी', kn: 'ಸಾಲ ಮನ್ನಾ' } },
      { id: 'q31d', text: { en: 'Crop insurance', hi: 'फसल बीमा', kn: 'ಬೆಳೆ ವಿಮೆ' } }
    ]
  },
  { id: 'q32', surveyType: 'question', category: 'First-time Voter', questionType: 'star_rating', required: true,
    text: { en: 'Rate the engagement of first-time voters in your booth', hi: 'अपने बूथ में पहली बार मतदान करने वालों की सहभागिता रेट करें', kn: 'ನಿಮ್ಮ ಬೂತ್‌ನಲ್ಲಿ ಮೊದಲ ಬಾರಿ ಮತದಾರರ ತೊಡಗಿಕೊಳ್ಳುವಿಕೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q33', surveyType: 'question', category: 'Grievance', questionType: 'yes_no', required: true,
    text: { en: 'Have you addressed any voter grievances this week?', hi: 'क्या आपने इस सप्ताह किसी मतदाता शिकायत का समाधान किया?', kn: 'ಈ ವಾರ ಯಾವುದೇ ಮತದಾರ ದೂರು ಪರಿಹರಿಸಿದ್ದೀರಾ?' }
  },
  { id: 'q34', surveyType: 'question', category: 'Security', questionType: 'yes_no', required: true,
    text: { en: 'Are there any law and order concerns in your area?', hi: 'क्या आपके क्षेत्र में कानून व्यवस्था की कोई चिंता है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಕಾನೂನು ಸುವ್ಯವಸ್ಥೆ ಕಾಳಜಿ ಇದೆಯೇ?' }
  },
  { id: 'q35', surveyType: 'question', category: 'Migrant', questionType: 'multiple_choice', required: true,
    text: { en: 'How many migrant worker voters are in your booth?', hi: 'आपके बूथ में कितने प्रवासी श्रमिक मतदाता हैं?', kn: 'ನಿಮ್ಮ ಬೂತ್‌ನಲ್ಲಿ ಎಷ್ಟು ವಲಸೆ ಕಾರ್ಮಿಕ ಮತದಾರರಿದ್ದಾರೆ?' },
    options: [
      { id: 'q35a', text: { en: 'Less than 50', hi: '50 से कम', kn: '50 ಕ್ಕಿಂತ ಕಡಿಮೆ' } },
      { id: 'q35b', text: { en: '50-200', hi: '50-200', kn: '50-200' } },
      { id: 'q35c', text: { en: '200-500', hi: '200-500', kn: '200-500' } },
      { id: 'q35d', text: { en: 'More than 500', hi: '500 से अधिक', kn: '500 ಕ್ಕಿಂತ ಹೆಚ್ಚು' } }
    ]
  },
  { id: 'q36', surveyType: 'question', category: 'Disability', questionType: 'yes_no', required: true,
    text: { en: 'Have arrangements been made for disabled voters?', hi: 'क्या विकलांग मतदाताओं के लिए व्यवस्था की गई है?', kn: 'ಅಂಗವಿಕಲ ಮತದಾರರಿಗೆ ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗಿದೆಯೇ?' }
  },
  { id: 'q37', surveyType: 'question', category: 'Party Meet', questionType: 'star_rating', required: true,
    text: { en: 'Rate attendance at the last party meeting', hi: 'अंतिम पार्टी बैठक में उपस्थिति रेट करें', kn: 'ಕೊನೆಯ ಪಕ್ಷ ಸಭೆಯ ಹಾಜರಾತಿ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q38', surveyType: 'question', category: 'Digital', questionType: 'yes_no', required: true,
    text: { en: 'Are you using the voter management app effectively?', hi: 'क्या आप मतदाता प्रबंधन ऐप का प्रभावी उपयोग कर रहे हैं?', kn: 'ಮತದಾರ ನಿರ್ವಹಣಾ ಆ್ಯಪ್ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸುತ್ತಿದ್ದೀರಾ?' }
  },
  { id: 'q39', surveyType: 'question', category: 'Feedback', questionType: 'short_text', required: false,
    text: { en: 'What additional support do you need from HQ?', hi: 'आपको मुख्यालय से क्या अतिरिक्त सहायता चाहिए?', kn: 'ಕೇಂದ್ರ ಕಚೇರಿಯಿಂದ ಯಾವ ಹೆಚ್ಚುವರಿ ಬೆಂಬಲ ಬೇಕು?' }
  },
  { id: 'q40', surveyType: 'question', category: 'EVM', questionType: 'yes_no', required: true,
    text: { en: 'Have you educated voters about EVM usage?', hi: 'क्या आपने मतदाताओं को EVM उपयोग के बारे में शिक्षित किया?', kn: 'EVM ಬಳಕೆ ಬಗ್ಗೆ ಮತದಾರರಿಗೆ ತಿಳಿಸಿದ್ದೀರಾ?' }
  },
  { id: 'q41', surveyType: 'question', category: 'Booth Agent', questionType: 'yes_no', required: true,
    text: { en: 'Has booth agent been identified and trained?', hi: 'क्या बूथ एजेंट की पहचान और प्रशिक्षण हो गया?', kn: 'ಬೂತ್ ಏಜೆಂಟ್ ಗುರುತಿಸಿ ತರಬೇತಿ ನೀಡಲಾಗಿದೆಯೇ?' }
  },
  { id: 'q42', surveyType: 'question', category: 'Rumor', questionType: 'short_text', required: false,
    text: { en: 'Are there any rumors spreading about our party? Describe.', hi: 'क्या हमारी पार्टी के बारे में कोई अफवाह फैल रही है? वर्णन करें', kn: 'ನಮ್ಮ ಪಕ್ಷದ ಬಗ್ಗೆ ಯಾವುದೇ ಗಾಳಿ ಸುದ್ದಿ ಹರಡುತ್ತಿದೆಯೇ? ವಿವರಿಸಿ' }
  },
  { id: 'q43', surveyType: 'question', category: 'MLA', questionType: 'star_rating', required: true,
    text: { en: 'Rate the local MLA/candidate\'s accessibility to people', hi: 'स्थानीय विधायक/उम्मीदवार की लोगों तक पहुंच रेट करें', kn: 'ಸ್ಥಳೀಯ ಶಾಸಕ/ಅಭ್ಯರ್ಥಿಯ ಜನರ ಲಭ್ಯತೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'q44', surveyType: 'question', category: 'Finance', questionType: 'emoji_slider', required: true,
    text: { en: 'How well are campaign finances being managed?', hi: 'अभियान वित्त का प्रबंधन कितनी अच्छी तरह हो रहा है?', kn: 'ಪ್ರಚಾರ ಹಣಕಾಸು ಎಷ್ಟು ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಲಾಗುತ್ತಿದೆ?' }
  },
  { id: 'q45', surveyType: 'question', category: 'Slum', questionType: 'yes_no', required: true,
    text: { en: 'Have you visited slum areas in your booth for voter outreach?', hi: 'क्या आपने मतदाता संपर्क के लिए अपने बूथ की झुग्गी बस्तियों का दौरा किया?', kn: 'ಮತದಾರ ಸಂಪರ್ಕಕ್ಕಾಗಿ ನಿಮ್ಮ ಬೂತ್‌ನ ಕೊಳೆಗೇರಿ ಪ್ರದೇಶಗಳಿಗೆ ಭೇಟಿ ನೀಡಿದ್ದೀರಾ?' }
  },
  { id: 'q46', surveyType: 'question', category: 'Alliance', questionType: 'emoji_slider', required: true,
    text: { en: 'How effective is our alliance partner coordination?', hi: 'हमारे गठबंधन साझेदार समन्वय कितना प्रभावी है?', kn: 'ನಮ್ಮ ಮೈತ್ರಿ ಪಾಲುದಾರ ಸಮನ್ವಯ ಎಷ್ಟು ಪರಿಣಾಮಕಾರಿ?' }
  },
  { id: 'q47', surveyType: 'question', category: 'Victory', questionType: 'multiple_choice', required: true,
    text: { en: 'Estimated winning margin in your booth', hi: 'आपके बूथ में अनुमानित जीत का अंतर', kn: 'ನಿಮ್ಮ ಬೂತ್‌ನಲ್ಲಿ ಅಂದಾಜು ಗೆಲುವಿನ ಅಂತರ' },
    options: [
      { id: 'q47a', text: { en: 'Comfortable win (500+)', hi: 'आरामदायक जीत (500+)', kn: 'ಆರಾಮದಾಯಕ ಗೆಲುವು (500+)' } },
      { id: 'q47b', text: { en: 'Close contest (100-500)', hi: 'करीबी मुकाबला (100-500)', kn: 'ಹತ್ತಿರದ ಸ್ಪರ್ಧೆ (100-500)' } },
      { id: 'q47c', text: { en: 'Too close to call', hi: 'बहुत करीबी', kn: 'ತೀರಾ ಹತ್ತಿರ' } },
      { id: 'q47d', text: { en: 'We may lose', hi: 'हम हार सकते हैं', kn: 'ನಾವು ಸೋಲಬಹುದು' } }
    ]
  },
  { id: 'q48', surveyType: 'question', category: 'Influence', questionType: 'short_text', required: false,
    text: { en: 'Name influential local leaders supporting our party', hi: 'हमारी पार्टी का समर्थन करने वाले प्रभावशाली स्थानीय नेताओं के नाम बताएं', kn: 'ನಮ್ಮ ಪಕ್ಷವನ್ನು ಬೆಂಬಲಿಸುವ ಪ್ರಭಾವಶಾಲಿ ಸ್ಥಳೀಯ ನಾಯಕರ ಹೆಸರು ತಿಳಿಸಿ' }
  },
  { id: 'q49', surveyType: 'question', category: 'E-Day', questionType: 'yes_no', required: true,
    text: { en: 'Is election day logistics planning complete?', hi: 'क्या चुनाव दिवस की लॉजिस्टिक्स योजना पूरी हो गई?', kn: 'ಚುನಾವಣೆ ದಿನದ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಯೋಜನೆ ಪೂರ್ಣವಾಗಿದೆಯೇ?' }
  },
  { id: 'q50', surveyType: 'question', category: 'Morale', questionType: 'emoji_slider', required: true,
    text: { en: 'Rate the overall morale of party workers in your area', hi: 'अपने क्षेत्र में पार्टी कार्यकर्ताओं का समग्र मनोबल रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಪಕ್ಷ ಕಾರ್ಯಕರ್ತರ ಒಟ್ಟಾರೆ ನೈತಿಕ ಸ್ಥೈರ್ಯ ರೇಟ್ ಮಾಡಿ' }
  },

  // ===== EXERCISE (Citizen Survey) - 50 =====
  { id: 'e1', surveyType: 'exercise', category: 'Water', questionType: 'emoji_slider', required: true,
    text: { en: 'How satisfied are you with water supply in your area?', hi: 'अपने क्षेत्र में पानी की आपूर्ति से आप कितने संतुष्ट हैं?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ನೀರು ಪೂರೈಕೆಯ ಬಗ್ಗೆ ನೀವು ಎಷ್ಟು ತೃಪ್ತರಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e2', surveyType: 'exercise', category: 'Roads', questionType: 'star_rating', required: true,
    text: { en: 'Rate the condition of roads in your locality', hi: 'अपने इलाके में सड़कों की स्थिति रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ರಸ್ತೆಗಳ ಸ್ಥಿತಿ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e3', surveyType: 'exercise', category: 'Electricity', questionType: 'multiple_choice', required: true,
    text: { en: 'How many hours of power cuts do you experience daily?', hi: 'आप प्रतिदिन कितने घंटे बिजली कटौती का अनुभव करते हैं?', kn: 'ದಿನಕ್ಕೆ ಎಷ್ಟು ಗಂಟೆ ವಿದ್ಯುತ್ ಕಡಿತ ಅನುಭವಿಸುತ್ತೀರಿ?' },
    options: [
      { id: 'e3a', text: { en: 'No power cuts', hi: 'कोई बिजली कटौती नहीं', kn: 'ವಿದ್ಯುತ್ ಕಡಿತ ಇಲ್ಲ' } },
      { id: 'e3b', text: { en: '1-2 hours', hi: '1-2 घंटे', kn: '1-2 ಗಂಟೆ' } },
      { id: 'e3c', text: { en: '2-4 hours', hi: '2-4 घंटे', kn: '2-4 ಗಂಟೆ' } },
      { id: 'e3d', text: { en: 'More than 4 hours', hi: '4 घंटे से अधिक', kn: '4 ಗಂಟೆಗಿಂತ ಹೆಚ್ಚು' } }
    ]
  },
  { id: 'e4', surveyType: 'exercise', category: 'Healthcare', questionType: 'emoji_slider', required: true,
    text: { en: 'How satisfied are you with government hospital services?', hi: 'सरकारी अस्पताल सेवाओं से आप कितने संतुष्ट हैं?', kn: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ ಸೇವೆಗಳ ಬಗ್ಗೆ ನೀವು ಎಷ್ಟು ತೃಪ್ತರಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e5', surveyType: 'exercise', category: 'Employment', questionType: 'multiple_choice', required: true,
    text: { en: 'What is your biggest employment concern?', hi: 'आपकी सबसे बड़ी रोजगार चिंता क्या है?', kn: 'ನಿಮ್ಮ ಅತಿದೊಡ್ಡ ಉದ್ಯೋಗ ಕಾಳಜಿ ಏನು?' },
    options: [
      { id: 'e5a', text: { en: 'No jobs available', hi: 'नौकरी उपलब्ध नहीं', kn: 'ಉದ್ಯೋಗ ಲಭ್ಯವಿಲ್ಲ' } },
      { id: 'e5b', text: { en: 'Low wages', hi: 'कम वेतन', kn: 'ಕಡಿಮೆ ವೇತನ' } },
      { id: 'e5c', text: { en: 'Lack of skills training', hi: 'कौशल प्रशिक्षण की कमी', kn: 'ಕೌಶಲ್ಯ ತರಬೇತಿ ಕೊರತೆ' } },
      { id: 'e5d', text: { en: 'Job insecurity', hi: 'नौकरी असुरक्षा', kn: 'ಉದ್ಯೋಗ ಅಭದ್ರತೆ' } }
    ]
  },
  { id: 'e6', surveyType: 'exercise', category: 'Education', questionType: 'star_rating', required: true,
    text: { en: 'Rate the quality of government schools in your area', hi: 'अपने क्षेत्र में सरकारी स्कूलों की गुणवत्ता रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಸರ್ಕಾರಿ ಶಾಲೆಗಳ ಗುಣಮಟ್ಟ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e7', surveyType: 'exercise', category: 'Transport', questionType: 'emoji_slider', required: true,
    text: { en: 'How satisfied are you with BMTC/KSRTC bus services?', hi: 'BMTC/KSRTC बस सेवाओं से आप कितने संतुष्ट हैं?', kn: 'BMTC/KSRTC ಬಸ್ ಸೇವೆಗಳ ಬಗ್ಗೆ ನೀವು ಎಷ್ಟು ತೃಪ್ತರಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e8', surveyType: 'exercise', category: 'Governance', questionType: 'emoji_slider', required: true,
    text: { en: 'How satisfied are you with the current government?', hi: 'वर्तमान सरकार से आप कितने संतुष्ट हैं?', kn: 'ಪ್ರಸ್ತುತ ಸರ್ಕಾರದ ಬಗ್ಗೆ ನೀವು ಎಷ್ಟು ತೃಪ್ತರಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e9', surveyType: 'exercise', category: 'Candidate', questionType: 'yes_no', required: true,
    text: { en: 'Would you consider supporting our candidate?', hi: 'क्या आप हमारे उम्मीदवार का समर्थन करने पर विचार करेंगे?', kn: 'ನಮ್ಮ ಅಭ್ಯರ್ಥಿಯನ್ನು ಬೆಂಬಲಿಸಲು ಯೋಚಿಸುತ್ತೀರಾ?' }
  },
  { id: 'e10', surveyType: 'exercise', category: 'Issues', questionType: 'multiple_choice', required: true,
    text: { en: 'What is the biggest issue in your area?', hi: 'आपके क्षेत्र का सबसे बड़ा मुद्दा क्या है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಅತಿದೊಡ್ಡ ಸಮಸ್ಯೆ ಏನು?' },
    options: [
      { id: 'e10a', text: { en: 'Water supply', hi: 'पानी की आपूर्ति', kn: 'ನೀರು ಪೂರೈಕೆ' } },
      { id: 'e10b', text: { en: 'Road infrastructure', hi: 'सड़क बुनियादी ढांचा', kn: 'ರಸ್ತೆ ಮೂಲಸೌಕರ್ಯ' } },
      { id: 'e10c', text: { en: 'Electricity', hi: 'बिजली', kn: 'ವಿದ್ಯುತ್' } },
      { id: 'e10d', text: { en: 'Healthcare', hi: 'स्वास्थ्य सेवा', kn: 'ಆರೋಗ್ಯ ಸೇವೆ' } }
    ]
  },
  { id: 'e11', surveyType: 'exercise', category: 'Ration', questionType: 'yes_no', required: true,
    text: { en: 'Are you receiving ration card benefits regularly?', hi: 'क्या आप नियमित रूप से राशन कार्ड लाभ प्राप्त कर रहे हैं?', kn: 'ನೀವು ಪಡಿತರ ಚೀಟಿ ಸೌಲಭ್ಯ ನಿಯಮಿತವಾಗಿ ಪಡೆಯುತ್ತಿದ್ದೀರಾ?' }
  },
  { id: 'e12', surveyType: 'exercise', category: 'Waste', questionType: 'star_rating', required: true,
    text: { en: 'Rate the waste management in your area', hi: 'अपने क्षेत्र में कचरा प्रबंधन रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e13', surveyType: 'exercise', category: 'Drainage', questionType: 'emoji_slider', required: true,
    text: { en: 'How bad is the drainage/flooding problem in your area?', hi: 'आपके क्षेत्र में जल निकासी/बाढ़ की समस्या कितनी गंभीर है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಚರಂಡಿ/ಪ್ರವಾಹ ಸಮಸ್ಯೆ ಎಷ್ಟು ಕೆಟ್ಟದಾಗಿದೆ?' }
  },
  { id: 'e14', surveyType: 'exercise', category: 'Cauvery', questionType: 'multiple_choice', required: true,
    text: { en: 'How do you feel about the Cauvery water sharing issue?', hi: 'कावेरी जल बंटवारे के मुद्दे पर आपकी क्या राय है?', kn: 'ಕಾವೇರಿ ನೀರು ಹಂಚಿಕೆ ವಿಷಯದ ಬಗ್ಗೆ ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ಏನು?' },
    options: [
      { id: 'e14a', text: { en: 'Government handled well', hi: 'सरकार ने अच्छा संभाला', kn: 'ಸರ್ಕಾರ ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಿತು' } },
      { id: 'e14b', text: { en: 'Could have done more', hi: 'और अधिक किया जा सकता था', kn: 'ಇನ್ನೂ ಹೆಚ್ಚು ಮಾಡಬಹುದಿತ್ತು' } },
      { id: 'e14c', text: { en: 'Very dissatisfied', hi: 'बहुत असंतुष्ट', kn: 'ಬಹಳ ಅತೃಪ್ತ' } },
      { id: 'e14d', text: { en: 'No opinion', hi: 'कोई राय नहीं', kn: 'ಅಭಿಪ್ರಾಯ ಇಲ್ಲ' } }
    ]
  },
  { id: 'e15', surveyType: 'exercise', category: 'Housing', questionType: 'yes_no', required: true,
    text: { en: 'Have you benefited from any government housing scheme?', hi: 'क्या आपको किसी सरकारी आवास योजना का लाभ मिला?', kn: 'ಯಾವುದೇ ಸರ್ಕಾರಿ ವಸತಿ ಯೋಜನೆಯಿಂದ ಪ್ರಯೋಜನ ಪಡೆದಿದ್ದೀರಾ?' }
  },
  { id: 'e16', surveyType: 'exercise', category: 'Safety', questionType: 'emoji_slider', required: true,
    text: { en: 'How safe do women feel in your area?', hi: 'आपके क्षेत्र में महिलाएं कितनी सुरक्षित महसूस करती हैं?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಮಹಿಳೆಯರು ಎಷ್ಟು ಸುರಕ್ಷಿತ ಭಾವಿಸುತ್ತಾರೆ?' }
  },
  { id: 'e17', surveyType: 'exercise', category: 'Pension', questionType: 'yes_no', required: true,
    text: { en: 'Are senior citizens receiving pension on time?', hi: 'क्या वरिष्ठ नागरिकों को समय पर पेंशन मिल रही है?', kn: 'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಸಮಯಕ್ಕೆ ಪಿಂಚಣಿ ಸಿಗುತ್ತಿದೆಯೇ?' }
  },
  { id: 'e18', surveyType: 'exercise', category: 'Farmer', questionType: 'star_rating', required: true,
    text: { en: 'Rate government support for farmers', hi: 'किसानों के लिए सरकारी सहायता रेट करें', kn: 'ರೈತರಿಗೆ ಸರ್ಕಾರಿ ಬೆಂಬಲ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e19', surveyType: 'exercise', category: 'Price Rise', questionType: 'emoji_slider', required: true,
    text: { en: 'How much has price rise affected your daily life?', hi: 'मूल्य वृद्धि ने आपके दैनिक जीवन को कितना प्रभावित किया?', kn: 'ಬೆಲೆ ಏರಿಕೆ ನಿಮ್ಮ ದೈನಂದಿನ ಜೀವನವನ್ನು ಎಷ್ಟು ಪ್ರಭಾವಿಸಿದೆ?' }
  },
  { id: 'e20', surveyType: 'exercise', category: 'Corruption', questionType: 'yes_no', required: true,
    text: { en: 'Have you faced corruption in government offices?', hi: 'क्या आपने सरकारी कार्यालयों में भ्रष्टाचार का सामना किया?', kn: 'ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಲ್ಲಿ ಭ್ರಷ್ಟಾಚಾರ ಎದುರಿಸಿದ್ದೀರಾ?' }
  },
  { id: 'e21', surveyType: 'exercise', category: 'BBMP', questionType: 'star_rating', required: true,
    text: { en: 'Rate BBMP/Panchayat service quality', hi: 'BBMP/पंचायत सेवा गुणवत्ता रेट करें', kn: 'BBMP/ಪಂಚಾಯತ್ ಸೇವಾ ಗುಣಮಟ್ಟ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e22', surveyType: 'exercise', category: 'Digital', questionType: 'yes_no', required: true,
    text: { en: 'Do you use digital government services (e-Seva, BangaloreOne)?', hi: 'क्या आप डिजिटल सरकारी सेवाओं (e-Seva, BangaloreOne) का उपयोग करते हैं?', kn: 'ಡಿಜಿಟಲ್ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು (e-Seva, BangaloreOne) ಬಳಸುತ್ತೀರಾ?' }
  },
  { id: 'e23', surveyType: 'exercise', category: 'Drinking Water', questionType: 'multiple_choice', required: true,
    text: { en: 'What is your primary source of drinking water?', hi: 'आपके पीने के पानी का प्राथमिक स्रोत क्या है?', kn: 'ನಿಮ್ಮ ಕುಡಿಯುವ ನೀರಿನ ಪ್ರಾಥಮಿಕ ಮೂಲ ಏನು?' },
    options: [
      { id: 'e23a', text: { en: 'Cauvery/Corporation water', hi: 'कावेरी/निगम पानी', kn: 'ಕಾವೇರಿ/ನಿಗಮ ನೀರು' } },
      { id: 'e23b', text: { en: 'Borewell', hi: 'बोरवेल', kn: 'ಬೋರ್‌ವೆಲ್' } },
      { id: 'e23c', text: { en: 'Water tanker', hi: 'पानी टैंकर', kn: 'ನೀರಿನ ಟ್ಯಾಂಕರ್' } },
      { id: 'e23d', text: { en: 'Packaged water', hi: 'पैकेज्ड पानी', kn: 'ಪ್ಯಾಕೇಜ್ಡ್ ನೀರು' } }
    ]
  },
  { id: 'e24', surveyType: 'exercise', category: 'Traffic', questionType: 'emoji_slider', required: true,
    text: { en: 'How bad is the traffic problem in your area?', hi: 'आपके क्षेत्र में ट्रैफिक की समस्या कितनी गंभीर है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಟ್ರಾಫಿಕ್ ಸಮಸ್ಯೆ ಎಷ್ಟು ಕೆಟ್ಟದಾಗಿದೆ?' }
  },
  { id: 'e25', surveyType: 'exercise', category: 'Scheme', questionType: 'multiple_choice', required: true,
    text: { en: 'Which Karnataka guarantee scheme has helped you most?', hi: 'कौन सी कर्नाटक गारंटी योजना ने आपकी सबसे ज्यादा मदद की?', kn: 'ಯಾವ ಕರ್ನಾಟಕ ಗ್ಯಾರಂಟಿ ಯೋಜನೆ ನಿಮಗೆ ಹೆಚ್ಚು ಸಹಾಯ ಮಾಡಿದೆ?' },
    options: [
      { id: 'e25a', text: { en: 'Gruha Lakshmi', hi: 'गृह लक्ष्मी', kn: 'ಗೃಹ ಲಕ್ಷ್ಮಿ' } },
      { id: 'e25b', text: { en: 'Gruha Jyothi', hi: 'गृह ज्योती', kn: 'ಗೃಹ ಜ್ಯೋತಿ' } },
      { id: 'e25c', text: { en: 'Anna Bhagya', hi: 'अन्न भाग्य', kn: 'ಅನ್ನ ಭಾಗ್ಯ' } },
      { id: 'e25d', text: { en: 'Shakti/Yuva Nidhi', hi: 'शक्ति/युवा निधि', kn: 'ಶಕ್ತಿ/ಯುವ ನಿಧಿ' } }
    ]
  },
  { id: 'e26', surveyType: 'exercise', category: 'MLA', questionType: 'star_rating', required: true,
    text: { en: 'Rate your local MLA\'s performance', hi: 'अपने स्थानीय विधायक का प्रदर्शन रेट करें', kn: 'ನಿಮ್ಮ ಸ್ಥಳೀಯ ಶಾಸಕರ ಕಾರ್ಯಕ್ಷಮತೆ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e27', surveyType: 'exercise', category: 'Sanitation', questionType: 'emoji_slider', required: true,
    text: { en: 'How clean are public toilets in your area?', hi: 'आपके क्षेत्र में सार्वजनिक शौचालय कितने साफ हैं?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಸಾರ್ವಜನಿಕ ಶೌಚಾಲಯಗಳು ಎಷ್ಟು ಸ್ವಚ್ಛವಾಗಿವೆ?' }
  },
  { id: 'e28', surveyType: 'exercise', category: 'Streetlights', questionType: 'yes_no', required: true,
    text: { en: 'Are streetlights working properly in your area?', hi: 'क्या आपके क्षेत्र में स्ट्रीटलाइट ठीक से काम कर रही हैं?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಬೀದಿ ದೀಪಗಳು ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಿವೆಯೇ?' }
  },
  { id: 'e29', surveyType: 'exercise', category: 'Parks', questionType: 'star_rating', required: true,
    text: { en: 'Rate the condition of parks and playgrounds', hi: 'पार्क और खेल के मैदानों की स्थिति रेट करें', kn: 'ಉದ್ಯಾನವನ ಮತ್ತು ಆಟದ ಮೈದಾನಗಳ ಸ್ಥಿತಿ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e30', surveyType: 'exercise', category: 'Hospital', questionType: 'multiple_choice', required: true,
    text: { en: 'Where do you usually go for medical treatment?', hi: 'आप आमतौर पर चिकित्सा उपचार के लिए कहां जाते हैं?', kn: 'ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಎಲ್ಲಿ ಹೋಗುತ್ತೀರಿ?' },
    options: [
      { id: 'e30a', text: { en: 'Government hospital', hi: 'सरकारी अस्पताल', kn: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ' } },
      { id: 'e30b', text: { en: 'Private hospital', hi: 'निजी अस्पताल', kn: 'ಖಾಸಗಿ ಆಸ್ಪತ್ರೆ' } },
      { id: 'e30c', text: { en: 'PHC/Community health', hi: 'PHC/सामुदायिक स्वास्थ्य', kn: 'PHC/ಸಮುದಾಯ ಆರೋಗ್ಯ' } },
      { id: 'e30d', text: { en: 'Traditional medicine', hi: 'पारंपरिक चिकित्सा', kn: 'ಸಾಂಪ್ರದಾಯಿಕ ಔಷಧಿ' } }
    ]
  },
  { id: 'e31', surveyType: 'exercise', category: 'Lake', questionType: 'emoji_slider', required: true,
    text: { en: 'How concerned are you about lake encroachment?', hi: 'झील अतिक्रमण के बारे में आप कितने चिंतित हैं?', kn: 'ಕೆರೆ ಒತ್ತುವರಿ ಬಗ್ಗೆ ನೀವು ಎಷ್ಟು ಚಿಂತಿತರಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e32', surveyType: 'exercise', category: 'Metro', questionType: 'yes_no', required: true,
    text: { en: 'Has Namma Metro improved your daily commute?', hi: 'क्या नम्मा मेट्रो ने आपकी दैनिक यात्रा में सुधार किया?', kn: 'ನಮ್ಮ ಮೆಟ್ರೋ ನಿಮ್ಮ ದೈನಂದಿನ ಪ್ರಯಾಣವನ್ನು ಸುಧಾರಿಸಿದೆಯೇ?' }
  },
  { id: 'e33', surveyType: 'exercise', category: 'Garbage', questionType: 'multiple_choice', required: true,
    text: { en: 'How often is garbage collected in your area?', hi: 'आपके क्षेत्र में कितनी बार कचरा उठाया जाता है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಕಸ ಎಷ್ಟು ಬಾರಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ?' },
    options: [
      { id: 'e33a', text: { en: 'Daily', hi: 'रोज', kn: 'ಪ್ರತಿ ದಿನ' } },
      { id: 'e33b', text: { en: 'Alternate days', hi: 'एक दिन छोड़कर', kn: 'ಪ್ರತಿ ಎರಡನೇ ದಿನ' } },
      { id: 'e33c', text: { en: 'Weekly', hi: 'साप्ताहिक', kn: 'ಸಾಪ್ತಾಹಿಕ' } },
      { id: 'e33d', text: { en: 'Irregular/Never', hi: 'अनियमित/कभी नहीं', kn: 'ಅನಿಯಮಿತ/ಎಂದಿಗೂ ಇಲ್ಲ' } }
    ]
  },
  { id: 'e34', surveyType: 'exercise', category: 'Internet', questionType: 'yes_no', required: true,
    text: { en: 'Do you have reliable internet access?', hi: 'क्या आपके पास विश्वसनीय इंटरनेट एक्सेस है?', kn: 'ನಿಮಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಇಂಟರ್ನೆಟ್ ಪ್ರವೇಶ ಇದೆಯೇ?' }
  },
  { id: 'e35', surveyType: 'exercise', category: 'Cooking Gas', questionType: 'emoji_slider', required: true,
    text: { en: 'How affordable is cooking gas (LPG) for your family?', hi: 'आपके परिवार के लिए रसोई गैस (LPG) कितनी सस्ती है?', kn: 'ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಅಡುಗೆ ಅನಿಲ (LPG) ಎಷ್ಟು ಕೈಗೆಟಕುವ ಬೆಲೆಯಲ್ಲಿದೆ?' }
  },
  { id: 'e36', surveyType: 'exercise', category: 'Scheme Access', questionType: 'yes_no', required: true,
    text: { en: 'Do you know how to apply for government schemes online?', hi: 'क्या आप जानते हैं कि सरकारी योजनाओं के लिए ऑनलाइन आवेदन कैसे करें?', kn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗೆ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಹಾಕುವುದು ಹೇಗೆ ಎಂದು ಗೊತ್ತೇ?' }
  },
  { id: 'e37', surveyType: 'exercise', category: 'Pollution', questionType: 'star_rating', required: true,
    text: { en: 'Rate the air quality in your area', hi: 'अपने क्षेत्र में हवा की गुणवत्ता रेट करें', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಗಾಳಿ ಗುಣಮಟ್ಟ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e38', surveyType: 'exercise', category: 'Noise', questionType: 'yes_no', required: true,
    text: { en: 'Is noise pollution a problem in your area?', hi: 'क्या आपके क्षेत्र में ध्वनि प्रदूषण एक समस्या है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಶಬ್ದ ಮಾಲಿನ್ಯ ಸಮಸ್ಯೆ ಇದೆಯೇ?' }
  },
  { id: 'e39', surveyType: 'exercise', category: 'Stray Dogs', questionType: 'yes_no', required: true,
    text: { en: 'Is stray dog menace a concern in your area?', hi: 'क्या आपके क्षेत्र में आवारा कुत्तों की समस्या चिंता का विषय है?', kn: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಬೀದಿ ನಾಯಿಗಳ ಕಾಟ ಸಮಸ್ಯೆ ಇದೆಯೇ?' }
  },
  { id: 'e40', surveyType: 'exercise', category: 'Voting', questionType: 'yes_no', required: true,
    text: { en: 'Will you definitely vote in the upcoming election?', hi: 'क्या आप आगामी चुनाव में जरूर मतदान करेंगे?', kn: 'ಮುಂಬರುವ ಚುನಾವಣೆಯಲ್ಲಿ ನೀವು ಖಂಡಿತ ಮತ ಚಲಾಯಿಸುತ್ತೀರಾ?' }
  },
  { id: 'e41', surveyType: 'exercise', category: 'Footpath', questionType: 'star_rating', required: true,
    text: { en: 'Rate the condition of footpaths/sidewalks', hi: 'फुटपाथ/साइडवॉक की स्थिति रेट करें', kn: 'ಕಾಲ್ನಡಿಗೆ ಪಥ/ಫುಟ್‌ಪಾತ್ ಸ್ಥಿತಿ ರೇಟ್ ಮಾಡಿ' }
  },
  { id: 'e42', surveyType: 'exercise', category: 'Encroachment', questionType: 'yes_no', required: true,
    text: { en: 'Is illegal encroachment a problem in your area?', hi: 'क्या अवैध अतिक्रमण आपके क्षेत्र में एक समस्या है?', kn: 'ಅಕ್ರಮ ಒತ್ತುವರಿ ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆಯೇ?' }
  },
  { id: 'e43', surveyType: 'exercise', category: 'Child Welfare', questionType: 'emoji_slider', required: true,
    text: { en: 'How satisfied are you with anganwadi/child welfare services?', hi: 'आंगनवाड़ी/बाल कल्याण सेवाओं से आप कितने संतुष्ट हैं?', kn: 'ಅಂಗನವಾಡಿ/ಮಕ್ಕಳ ಕಲ್ಯಾಣ ಸೇವೆಗಳ ಬಗ್ಗೆ ಎಷ್ಟು ತೃಪ್ತರಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e44', surveyType: 'exercise', category: 'Land', questionType: 'yes_no', required: true,
    text: { en: 'Have you faced issues with property/land registration?', hi: 'क्या आपने संपत्ति/भूमि पंजीकरण में समस्या का सामना किया?', kn: 'ಆಸ್ತಿ/ಭೂ ನೋಂದಣಿ ಸಮಸ್ಯೆ ಎದುರಿಸಿದ್ದೀರಾ?' }
  },
  { id: 'e45', surveyType: 'exercise', category: 'Widow', questionType: 'yes_no', required: true,
    text: { en: 'Are widows/single women receiving proper government support?', hi: 'क्या विधवा/एकल महिलाओं को उचित सरकारी सहायता मिल रही है?', kn: 'ವಿಧವೆಯರು/ಒಂಟಿ ಮಹಿಳೆಯರಿಗೆ ಸರಿಯಾದ ಸರ್ಕಾರಿ ಬೆಂಬಲ ಸಿಗುತ್ತಿದೆಯೇ?' }
  },
  { id: 'e46', surveyType: 'exercise', category: 'Pothole', questionType: 'multiple_choice', required: true,
    text: { en: 'How many potholes are on your main road?', hi: 'आपकी मुख्य सड़क पर कितने गड्ढे हैं?', kn: 'ನಿಮ್ಮ ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿ ಎಷ್ಟು ಹೊಂಡಗಳಿವೆ?' },
    options: [
      { id: 'e46a', text: { en: 'None', hi: 'कोई नहीं', kn: 'ಯಾವುದೂ ಇಲ್ಲ' } },
      { id: 'e46b', text: { en: 'A few (1-5)', hi: 'कुछ (1-5)', kn: 'ಕೆಲವು (1-5)' } },
      { id: 'e46c', text: { en: 'Many (5-20)', hi: 'बहुत (5-20)', kn: 'ಅನೇಕ (5-20)' } },
      { id: 'e46d', text: { en: 'Terrible (20+)', hi: 'भयानक (20+)', kn: 'ಭಯಾನಕ (20+)' } }
    ]
  },
  { id: 'e47', surveyType: 'exercise', category: 'Caste Certificate', questionType: 'yes_no', required: true,
    text: { en: 'Have you faced difficulty getting caste/income certificate?', hi: 'क्या जाति/आय प्रमाणपत्र प्राप्त करने में कठिनाई हुई?', kn: 'ಜಾತಿ/ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಲು ಕಷ್ಟ ಎದುರಿಸಿದ್ದೀರಾ?' }
  },
  { id: 'e48', surveyType: 'exercise', category: 'Future', questionType: 'short_text', required: false,
    text: { en: 'What one change would most improve your life?', hi: 'कौन सा एक बदलाव आपके जीवन में सबसे ज्यादा सुधार करेगा?', kn: 'ಯಾವ ಒಂದು ಬದಲಾವಣೆ ನಿಮ್ಮ ಜೀವನವನ್ನು ಹೆಚ್ಚು ಸುಧಾರಿಸುತ್ತದೆ?' }
  },
  { id: 'e49', surveyType: 'exercise', category: 'Overall', questionType: 'emoji_slider', required: true,
    text: { en: 'Overall, how happy are you with life in your area?', hi: 'कुल मिलाकर, आप अपने क्षेत्र में जीवन से कितने खुश हैं?', kn: 'ಒಟ್ಟಾರೆ, ನಿಮ್ಮ ಪ್ರದೇಶದ ಜೀವನದ ಬಗ್ಗೆ ಎಷ್ಟು ಸಂತೋಷವಾಗಿದ್ದೀರಿ?' }
  },
  { id: 'e50', surveyType: 'exercise', category: 'Feedback', questionType: 'short_text', required: false,
    text: { en: 'Any message for your local leader or government?', hi: 'अपने स्थानीय नेता या सरकार के लिए कोई संदेश?', kn: 'ನಿಮ್ಮ ಸ್ಥಳೀಯ ನಾಯಕ ಅಥವಾ ಸರ್ಕಾಕ್ಕೆ ಯಾವುದೇ ಸಂದೇಶ?' }
  },
];
