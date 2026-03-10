// Mock API service - structured for future Laravel backend integration
import { SurveyResponse, Task, PerformanceStats, LeaveRequest } from '@/types';
import { mockTasks, mockPerformance, mockSyncStatus, mockNotifications } from '@/data/mockData';

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

export const api = {
  // POST /api/mobile/login
  login: async (phone: string) => {
    await delay(800);
    return { success: true, message: 'OTP sent successfully' };
  },

  // POST /api/mobile/verify-otp
  verifyOtp: async (phone: string, otp: string) => {
    await delay(1000);
    return { success: true, token: 'mock_jwt_' + Date.now(), userId: 'v1' };
  },

  // GET /api/mobile/dashboard
  getDashboard: async () => {
    await delay(500);
    return {
      assignedRegion: 'Jayanagar, Bangalore South',
      dailyTarget: 25,
      surveysCompleted: 18,
      pendingSurveys: 7,
      syncStatus: mockSyncStatus,
    };
  },

  // POST /api/mobile/survey
  submitSurvey: async (survey: SurveyResponse) => {
    await delay(1500);
    return { success: true, surveyId: 'srv_' + Date.now() };
  },

  // GET /api/mobile/questions
  getQuestions: async (type: 'question' | 'exercise') => {
    await delay(500);
    const { surveyQuestions } = await import('@/data/questions');
    return surveyQuestions.filter(q => q.surveyType === type);
  },

  // POST /api/mobile/photo
  uploadPhoto: async (photoData: FormData) => {
    await delay(2000);
    return { success: true, photoId: 'ph_' + Date.now() };
  },

  // GET /api/mobile/tasks
  getTasks: async () => {
    await delay(500);
    return mockTasks;
  },

  // GET /api/mobile/performance
  getPerformance: async (): Promise<PerformanceStats> => {
    await delay(500);
    return mockPerformance;
  },

  // GET /api/mobile/notifications
  getNotifications: async () => {
    await delay(300);
    return mockNotifications;
  },

  // POST /api/mobile/sync
  syncData: async () => {
    await delay(2000);
    return { success: true, syncedSurveys: 3, syncedPhotos: 5 };
  },

  // POST /api/mobile/leave
  submitLeave: async (leave: Omit<LeaveRequest, 'id' | 'status' | 'createdAt'>) => {
    await delay(1000);
    return { success: true, leaveId: 'lv_' + Date.now(), status: 'pending' };
  },
};
