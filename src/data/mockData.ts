import { User, Task, Notification, SyncStatus, PerformanceStats, SurveyResponse } from '@/types';

export const mockUsers: Record<string, User> = {
  volunteer1: {
    id: 'v1',
    name: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    email: 'ramesh.kumar@gmail.com',
    role: 'volunteer',
    assignedWard: 'Ward 42 - Jayanagar',
    assignedRegion: 'Jayanagar, Bangalore South',
    emergencyContact: '+91 98765 43211',
    dailyTarget: 25,
    surveysCompleted: 18,
  },
  supervisor1: {
    id: 's1',
    name: 'Lakshmi Devi',
    phone: '+91 87654 32109',
    email: 'lakshmi.devi@gmail.com',
    role: 'supervisor',
    assignedWard: 'District - Bangalore South',
    assignedRegion: 'Bangalore South Constituency',
    emergencyContact: '+91 87654 32110',
    dailyTarget: 0,
    surveysCompleted: 0,
  },
};

export const mockTasks: Task[] = [
  { id: 't1', title: 'Survey households in Jayanagar 4th Block', description: 'Complete door-to-door survey in 4th Block', region: 'Jayanagar 4th Block', households: 40, deadline: '2026-03-11T18:00:00', status: 'in_progress', priority: 'high', assignedTo: 'v1' },
  { id: 't2', title: 'Cover Koramangala 3rd Block', description: 'Survey remaining households in 3rd Block', region: 'Koramangala 3rd Block', households: 35, deadline: '2026-03-12T18:00:00', status: 'pending', priority: 'medium', assignedTo: 'v1' },
  { id: 't3', title: 'BTM Layout voter verification', description: 'Verify voter list accuracy in BTM Layout', region: 'BTM Layout 2nd Stage', households: 50, deadline: '2026-03-13T18:00:00', status: 'pending', priority: 'high', assignedTo: 'v1' },
  { id: 't4', title: 'HSR Layout community meeting', description: 'Attend community meeting and collect feedback', region: 'HSR Layout Sector 2', households: 25, deadline: '2026-03-14T18:00:00', status: 'pending', priority: 'low', assignedTo: 'v1' },
  { id: 't5', title: 'Madiwala slum area outreach', description: 'Visit slum area for outreach program', region: 'Madiwala', households: 60, deadline: '2026-03-10T18:00:00', status: 'completed', priority: 'high', assignedTo: 'v1' },
];

export const mockNotifications: Notification[] = [
  { id: 'n1', title: 'New Task Assigned', message: 'Survey 40 households in Jayanagar 4th Block before tomorrow evening.', type: 'assignment', read: false, timestamp: '2026-03-10T09:00:00' },
  { id: 'n2', title: 'Daily Target Reminder', message: 'You have 7 more surveys to complete today. Keep going!', type: 'reminder', read: false, timestamp: '2026-03-10T14:00:00' },
  { id: 'n3', title: 'Sync Required', message: '3 surveys pending sync. Please connect to internet.', type: 'sync', read: true, timestamp: '2026-03-10T10:30:00' },
  { id: 'n4', title: 'Campaign Update', message: 'Rally scheduled at Town Hall on March 15. Mobilize 200+ supporters.', type: 'update', read: true, timestamp: '2026-03-09T18:00:00' },
  { id: 'n5', title: 'Great Work!', message: 'You completed 100% of yesterday\'s target. Keep up the excellent work!', type: 'update', read: true, timestamp: '2026-03-09T20:00:00' },
];

export const mockSyncStatus: SyncStatus = {
  pendingSurveys: 3,
  pendingPhotos: 5,
  lastSyncTime: '2026-03-10T13:45:00',
  isOnline: true,
  isSyncing: false,
};

export const mockPerformance: PerformanceStats = {
  surveysCompleted: 18,
  dailyTarget: 25,
  responseRate: 92,
  qualityScore: 87,
  weeklyTrend: [
    { day: 'Mon', count: 22 },
    { day: 'Tue', count: 25 },
    { day: 'Wed', count: 20 },
    { day: 'Thu', count: 28 },
    { day: 'Fri', count: 18 },
    { day: 'Sat', count: 15 },
    { day: 'Sun', count: 18 },
  ],
};

export const mockSurveyResponses: SurveyResponse[] = [
  {
    id: 'sr1', surveyType: 'exercise', volunteerId: 'v1',
    startLocation: { lat: 12.9279, lng: 77.5831 },
    endLocation: { lat: 12.9280, lng: 77.5832 },
    startTime: '2026-03-10T10:00:00', endTime: '2026-03-10T10:15:00',
    answers: [
      { questionId: 'e1', value: 3 },
      { questionId: 'e2', value: 2 },
      { questionId: 'e3', value: 'e3c' },
    ],
    photos: [], synced: true, flagged: false,
  },
  {
    id: 'sr2', surveyType: 'question', volunteerId: 'v1',
    startLocation: { lat: 12.9350, lng: 77.6100 },
    startTime: '2026-03-10T11:00:00',
    answers: [
      { questionId: 'q1', value: 4 },
      { questionId: 'q2', value: 'q2a' },
    ],
    photos: [], synced: false, flagged: false,
  },
];
