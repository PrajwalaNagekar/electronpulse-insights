export type Language = 'en' | 'hi' | 'kn';

export type UserRole = 'volunteer' | 'supervisor' | 'coordinator';

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: UserRole;
  assignedWard: string;
  assignedRegion: string;
  emergencyContact: string;
  avatar?: string;
  dailyTarget: number;
  surveysCompleted: number;
}

export type SurveyType = 'question' | 'exercise';

export type QuestionType = 'multiple_choice' | 'yes_no' | 'emoji_slider' | 'star_rating' | 'short_text' | 'voice';

export interface TranslatedText {
  en: string;
  hi: string;
  kn: string;
}

export interface QuestionOption {
  id: string;
  text: TranslatedText;
  icon?: string;
}

export interface SurveyQuestion {
  id: string;
  surveyType: SurveyType;
  category: string;
  questionType: QuestionType;
  text: TranslatedText;
  options?: QuestionOption[];
  required: boolean;
}

export interface SurveyResponse {
  id: string;
  surveyType: SurveyType;
  volunteerId: string;
  startLocation: { lat: number; lng: number };
  endLocation?: { lat: number; lng: number };
  startTime: string;
  endTime?: string;
  answers: AnswerEntry[];
  photos: PhotoEntry[];
  synced: boolean;
  flagged: boolean;
}

export interface AnswerEntry {
  questionId: string;
  value: string | number;
  comment?: string;
}

export interface PhotoEntry {
  id: string;
  uri: string;
  lat: number;
  lng: number;
  timestamp: string;
  type: 'infrastructure' | 'environment' | 'community';
  synced: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  region: string;
  households: number;
  deadline: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'assignment' | 'reminder' | 'sync' | 'update';
  read: boolean;
  timestamp: string;
}

export interface LeaveRequest {
  id: string;
  userId: string;
  date: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface SyncStatus {
  pendingSurveys: number;
  pendingPhotos: number;
  lastSyncTime: string | null;
  isOnline: boolean;
  isSyncing: boolean;
}

export interface PerformanceStats {
  surveysCompleted: number;
  dailyTarget: number;
  responseRate: number;
  qualityScore: number;
  weeklyTrend: { day: string; count: number }[];
}
