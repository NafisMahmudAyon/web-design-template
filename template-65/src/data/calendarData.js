export const initialCalendarData = {
  currentMonth: 'September',
  currentYear: 2025,
  user: {
    name: 'Alex',
    greeting: 'Morning, Alex!',
    subtitle: "Here's what's on your agenda today.",
    avatar: '/alex-avatar.jpg',
  },
  teamMembers: [
    { id: 1, name: 'Alex W', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80', color: 'bg-emerald-500' },
    { id: 2, name: 'Ivan M', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80', color: 'bg-blue-500' },
    { id: 3, name: 'Julia K', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80', color: 'bg-pink-500' },
    { id: 4, name: 'Marcus L', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80', color: 'bg-amber-500' },
  ],
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  years: [2024, 2025, 2026, 2027],
  daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  
  // Daily agenda items mapped by day key (e.g. '2025-09-08')
  agendaByDate: {
    '2025-09-08': [
      {
        id: 'ev-1',
        timeSlot: '09:00',
        title: 'English Lesson',
        subtitle: 'Online class with tutor',
        timeRange: '09:00 - 10:15',
        duration: '45 min',
        accentColor: '#FF6B4A', // Coral/Orange
        attendees: [
          { name: 'Alex W', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
          { name: 'Ivan M', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
        ],
        attendeeText: 'Alex W and Ivan M',
      },
      {
        id: 'ev-2',
        timeSlot: '10:00',
        title: 'Job Interview',
        subtitle: 'Frontend Developer position',
        timeRange: '10:00 - 11:00',
        duration: '1 hour',
        accentColor: '#D4E738', // Lime/Yellow
        hasMeetLink: true,
        meetUrl: 'https://meet.google.com/abc-frontend-interview',
      },
      {
        id: 'ev-3',
        timeSlot: '13:00',
        title: 'Team Sync Call',
        subtitle: 'Weekly updates',
        timeRange: '13:00 - 15:00',
        duration: '2 hours',
        accentColor: '#2B85FF', // Blue
        attendees: [
          { name: 'Julia K', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80' },
          { name: 'Ivan M', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
          { name: 'Marcus L', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
          { name: 'Alex W', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
        ],
        attendeeText: 'Julia K, Ivan M +5 more',
      },
    ],
    '2025-09-02': [
      {
        id: 'ev-4',
        timeSlot: '11:30',
        title: 'Brainstorm Session',
        subtitle: 'Product roadmap alignment & design critique',
        timeRange: '11:30 - 13:00',
        duration: '1h 30m',
        accentColor: '#F59E0B',
        attendees: [
          { name: 'Alex W', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
          { name: 'Ivan M', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
          { name: 'Julia K', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80' },
        ],
        attendeeText: 'Core UX Squad',
      },
    ],
    '2025-09-04': [
      {
        id: 'ev-5',
        timeSlot: '09:30',
        title: 'Weekly Stand-up',
        subtitle: 'Engineering sprint review',
        timeRange: '09:30 - 10:15',
        duration: '45 min',
        accentColor: '#2B85FF',
        attendeeText: 'Dev Team (All Hands)',
      },
    ],
  },

  // 35 Calendar Day Cells for September 2025 view
  calendarDays: [
    // Row 1
    { dayNumber: 30, isCurrentMonth: false, dateKey: '2025-08-30', events: [] },
    { dayNumber: 1, isCurrentMonth: true, dateKey: '2025-09-01', events: [] },
    { dayNumber: 2, isCurrentMonth: true, dateKey: '2025-09-02', events: [] },
    { dayNumber: 3, isCurrentMonth: true, dateKey: '2025-09-03', events: [{ title: 'Finance Meeting', color: '#FBBF24' }] },
    { dayNumber: 4, isCurrentMonth: true, dateKey: '2025-09-04', isHighlightedGlow: true, events: [{ title: 'Weekly Stand-up', color: '#2B85FF' }] },
    { dayNumber: 5, isCurrentMonth: true, dateKey: '2025-09-05', events: [] },
    { dayNumber: 6, isCurrentMonth: true, dateKey: '2025-09-06', events: [] },

    // Row 2
    { dayNumber: 7, isCurrentMonth: true, dateKey: '2025-09-07', events: [] },
    {
      dayNumber: 8,
      isCurrentMonth: true,
      dateKey: '2025-09-08',
      isSelected: true,
      events: [
        { title: 'English Lesson', color: '#FF6B4A' },
        { title: 'Job Interview', color: '#D4E738' },
        { title: 'Team Sync Call', color: '#2B85FF' },
      ],
    },
    { dayNumber: 9, isCurrentMonth: true, dateKey: '2025-09-09', events: [] },
    { dayNumber: 10, isCurrentMonth: true, dateKey: '2025-09-10', events: [] },
    { dayNumber: 11, isCurrentMonth: true, dateKey: '2025-09-11', events: [] },
    {
      dayNumber: 12,
      isCurrentMonth: true,
      dateKey: '2025-09-12',
      events: [
        { title: 'Marketing Review', color: '#F59E0B' },
        { title: 'Yoga Session', color: '#38BDF8' },
      ],
    },
    { dayNumber: 13, isCurrentMonth: true, dateKey: '2025-09-13', events: [{ title: 'Project Deadline', color: '#EF4444' }] },

    // Row 3
    { dayNumber: 14, isCurrentMonth: true, dateKey: '2025-09-14', events: [] },
    {
      dayNumber: 15,
      isCurrentMonth: true,
      dateKey: '2025-09-15',
      events: [
        { title: 'Marketing Review', color: '#F59E0B' },
        { title: 'Yoga Session', color: '#38BDF8' },
      ],
    },
    { dayNumber: 16, isCurrentMonth: true, dateKey: '2025-09-16', events: [] },
    { dayNumber: 17, isCurrentMonth: true, dateKey: '2025-09-17', events: [] },
    { dayNumber: 18, isCurrentMonth: true, dateKey: '2025-09-18', events: [] },
    { dayNumber: 19, isCurrentMonth: true, dateKey: '2025-09-19', events: [{ title: 'Weekly Stand-up', color: '#2B85FF' }] },
    {
      dayNumber: 20,
      isCurrentMonth: true,
      dateKey: '2025-09-20',
      events: [
        { title: 'Call with Client', color: '#F59E0B' },
        { title: 'Brainstorm Ideas', color: '#2B85FF' },
      ],
    },

    // Row 4
    { dayNumber: 21, isCurrentMonth: true, dateKey: '2025-09-21', events: [{ title: 'Travel Planning', color: '#FBBF24' }] },
    { dayNumber: 22, isCurrentMonth: true, dateKey: '2025-09-22', events: [{ title: 'Finance Meeting', color: '#2B85FF' }] },
    { dayNumber: 23, isCurrentMonth: true, dateKey: '2025-09-23', events: [] },
    { dayNumber: 24, isCurrentMonth: true, dateKey: '2025-09-24', events: [] },
    { dayNumber: 25, isCurrentMonth: true, dateKey: '2025-09-25', events: [] },
    { dayNumber: 26, isCurrentMonth: true, dateKey: '2025-09-26', events: [{ title: 'Project Deadline', color: '#EF4444' }] },
    {
      dayNumber: 27,
      isCurrentMonth: true,
      dateKey: '2025-09-27',
      events: [
        { title: 'Marketing Review', color: '#F59E0B' },
        { title: 'Yoga Session', color: '#38BDF8' },
      ],
    },

    // Row 5
    { dayNumber: 28, isCurrentMonth: true, dateKey: '2025-09-28', events: [] },
    {
      dayNumber: 29,
      isCurrentMonth: true,
      dateKey: '2025-09-29',
      events: [
        { title: 'Marketing Review', color: '#F59E0B' },
        { title: 'Yoga Session', color: '#38BDF8' },
      ],
    },
    { dayNumber: 30, isCurrentMonth: true, dateKey: '2025-09-30', events: [] },
    { dayNumber: 1, isCurrentMonth: false, dateKey: '2025-10-01', events: [{ title: 'Finance Meeting', color: '#2B85FF' }] },
    { dayNumber: 2, isCurrentMonth: false, dateKey: '2025-10-02', events: [] },
    { dayNumber: 3, isCurrentMonth: false, dateKey: '2025-10-03', events: [] },
    { dayNumber: 4, isCurrentMonth: false, dateKey: '2025-10-04', events: [] },
  ],
};
