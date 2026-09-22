export const initialPatientMetrics = [
  {
    id: 'total',
    title: 'Total Patients',
    value: '128',
    denominator: null,
    icon: 'users',
    color: 'emerald',
    description: 'Active bed capacity across all wards. 8 beds available for emergency intake.',
    actionLabel: 'View Census Details',
    details: [
      { label: 'General Ward', val: '72' },
      { label: 'ICU & Stepdown', val: '24' },
      { label: 'Observation', val: '32' },
    ]
  },
  {
    id: 'stable',
    title: 'Stable Patients',
    value: '86',
    denominator: '128',
    icon: 'user-check',
    color: 'emerald',
    description: 'Vitals within normal range. Standard 4-hour assessment cycles ongoing.',
    actionLabel: 'Review Ward Log',
    details: [
      { label: 'Vitals Recorded', val: '86/86' },
      { label: 'Dietary Cleared', val: '81' },
      { label: 'Mobility Ready', val: '54' },
    ]
  },
  {
    id: 'critical',
    title: 'Critical Patients',
    value: '12',
    denominator: '128',
    icon: 'heart-pulse',
    color: 'rose',
    description: 'Continuous monitoring required. 3 on mechanical ventilation in ICU Wing B.',
    actionLabel: 'Open ICU Monitor',
    details: [
      { label: 'ICU Ventilated', val: '3' },
      { label: 'Cardiac Telemetry', val: '7' },
      { label: 'Post-Op Observation', val: '2' },
    ]
  },
  {
    id: 'discharges',
    title: 'Discharges Patients',
    value: '24',
    denominator: '128',
    icon: 'user-plus',
    color: 'blue',
    description: 'Physician sign-off complete. Pharmacy prescriptions & transport in progress.',
    actionLabel: 'Print Discharge Papers',
    details: [
      { label: 'Rx Dispensed', val: '18/24' },
      { label: 'Transport En Route', val: '14' },
      { label: 'Awaiting Escort', val: '10' },
    ]
  }
];

export const doctorsData = [
  {
    id: 'doc-1',
    name: 'Dr. Olivia Bennett',
    specialty: 'Cardiologist',
    status: 'On Duty',
    statusColor: 'blue',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Cardiology 4A',
    pager: '#4021',
    patientsCount: 14,
  },
  {
    id: 'doc-2',
    name: 'Dr. Marcus Lee',
    specialty: 'Neurologist',
    status: 'Available',
    statusColor: 'green',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Neuro Wing 2B',
    pager: '#3110',
    patientsCount: 9,
  },
  {
    id: 'doc-3',
    name: 'Dr. Samuel Ortiz',
    specialty: 'Orthopedic Surgeon',
    status: 'On Duty',
    statusColor: 'blue',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Surgical Suite 6',
    pager: '#1804',
    patientsCount: 11,
  },
  {
    id: 'doc-4',
    name: 'Dr. Milang Carter',
    specialty: 'Pediatrician',
    status: 'On Leave',
    statusColor: 'red',
    avatar: 'https://images.unsplash.com/photo-1594824813697-3f305c219665?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Pediatrics 1C',
    pager: '#9042',
    patientsCount: 0,
  },
  {
    id: 'doc-5',
    name: 'Dr. Marco Singh',
    specialty: 'Dermatologist',
    status: 'Available',
    statusColor: 'green',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Clinic 3B',
    pager: '#2255',
    patientsCount: 7,
  }
];

export const appointmentsData = [
  {
    id: 'apt-1',
    time: '09:20',
    patientName: 'Michael Chen',
    type: 'Follow-up Consultation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Room 302',
    doctor: 'Dr. Olivia Bennett',
    status: 'Completed',
    notes: 'Post-myocardial infarction recovery check. BP 120/78, sinus rhythm normal.'
  },
  {
    id: 'apt-2',
    time: '10:20',
    patientName: 'Sarah Jenkins',
    type: 'Follow-up Consultation',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Room 214',
    doctor: 'Dr. Samuel Ortiz',
    status: 'In Progress',
    notes: 'Knee arthroscopy follow-up. Dressing refreshed, wound healing well.'
  },
  {
    id: 'apt-3',
    time: '12:20',
    patientName: 'David Miller',
    type: 'Follow-up Consultation',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Room 405',
    doctor: 'Dr. Marcus Lee',
    status: 'Upcoming',
    notes: 'Migraine aura review and EEG consultation.'
  },
  {
    id: 'apt-4',
    time: '2:20',
    patientName: 'Emma Watson',
    type: 'Follow-up Consultation',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Room 112',
    doctor: 'Dr. Marco Singh',
    status: 'Upcoming',
    notes: 'Allergy skin prick evaluation and topical treatment titration.'
  },
  {
    id: 'apt-5',
    time: '3:20',
    patientName: 'Robert Hayes',
    type: 'Follow-up Consultation',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=80',
    room: 'Room 208',
    doctor: 'Dr. Olivia Bennett',
    status: 'Upcoming',
    notes: 'Cardiac rehabilitation progression assessment and lipid panel review.'
  }
];

export const aiKnowledgeBase = {
  "Why is my HRV low?": {
    reply: "Heart Rate Variability (HRV) typically drops due to physiological stressors such as acute systemic inflammation, autonomic nervous system fatigue, dehydration, fever, or pain. In Ward 4B, verify if the patient had recent surgical stress, check electrolyte panel (specifically Potassium and Magnesium), and assess sleep disruptions.",
    tags: ["Autonomic System", "Vitals Protocol", "Ward 4B"]
  },
  "Check medication schedule": {
    reply: "14:00 Med Pass: 6 patients scheduled for IV antibiotics (Ceftriaxone 1g, Vancomycin trough checks), 12 patients for routine oral antihypertensives. Ensure double-signoff on Ward 4B Bed 12 for Heparin infusion titration.",
    tags: ["Med Pass", "Pharmacy Sync", "IV Titration"]
  },
  "Summarize ICU vitals": {
    reply: "12 Critical Patients active: Bed 4 shows stable MAP at 72 mmHg on low-dose Levophed. Bed 7 post-op telemetry normal sinus at 74 bpm. Bed 11 SpO2 97% on 2L nasal cannula, weaning protocol recommended.",
    tags: ["ICU Telemetry", "Ventilator Weaning", "Alerts"]
  },
  default: {
    reply: "Clinical copilot active. Patient records, nursing workflows, dosage protocols, and St. Mary's Medical Center standards are synced. How can I assist with your shift?",
    tags: ["Clinical Assistant", "Shift Support"]
  }
};
