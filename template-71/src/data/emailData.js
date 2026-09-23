export const CURRENT_USER = {
  name: 'Qojva Salvatoc',
  email: 'QojvaSalvatoc@gmail.com',
  avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  status: 'online',
};

export const WORKSPACE_CONTACTS = [
  {
    id: 1,
    name: 'Marcus Vance',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    online: true,
  },
  {
    id: 2,
    name: 'Elena Rostova',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    online: true,
  },
  {
    id: 3,
    name: 'Julian Sterling',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    online: false,
  },
  {
    id: 4,
    name: 'Clara Oswald',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
    online: false,
  },
];

export const PRIMARY_NAV = [
  { id: 'inbox', label: 'Inbox', icon: 'Inbox', count: 16 },
  { id: 'starred', label: 'Starred', icon: 'Star', count: 8 },
  { id: 'send', label: 'Send', icon: 'Send', count: 33 },
  { id: 'draft', label: 'Draft', icon: 'FileText', count: 2 },
  { id: 'spam', label: 'Spam', icon: 'Ban', count: 78 },
  { id: 'deleted', label: 'Deleted', icon: 'Trash2', count: 61 },
];

export const FOLDERS = [
  { id: 'personal', label: 'Personal', count: 12 },
  { id: 'projects', label: 'My Projects', count: 7 },
  { id: 'payments', label: 'Payments', count: 14 },
  { id: 'documents', label: 'Documents', count: 23 },
];

export const LABELS = [
  { id: 'work', label: 'Work', count: 44, color: '#f87171' },
  { id: 'education', label: 'Education', count: 29, color: '#38bdf8' },
  { id: 'social', label: 'Social Media', count: 136, color: '#f472b6' },
  { id: 'bwc', label: 'BWC Bank', count: 17, color: '#c084fc' },
  { id: 'applications', label: 'Applications', count: 10, color: '#60a5fa' },
];

export const EMAILS = [
  {
    id: 'msg-1',
    sender: {
      name: 'Jessica Brown',
      email: 'jessica.brown@milora.io',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
      online: true,
    },
    subject: 'Usability Test Results',
    snippet:
      'Hello Qojva, in the latest test conducted on the profile pages of the checkout flow, 84% of respondents found the new interaction intuitive...',
    body: `Hello Qojva,

In the latest test conducted on the profile pages of the checkout flow, 84% of respondents found the new interaction intuitive and frictionless. 

Key observations:
1. Load time under 1.1s increased completion rate by 18%.
2. The simplified biometric verification modal was praised across all mobile testing units.

Let me know if you would like me to prepare the presentation slides for Thursday's design sync.

Best regards,
Jessica Brown`,
    date: 'Today, 11:32 AM',
    timestamp: '11:32 AM',
    starred: false,
    unread: true,
    tags: [
      { label: 'Applications', color: '#60a5fa' },
      { label: 'work', color: '#f87171' },
    ],
    attachments: [],
  },
  {
    id: 'msg-2',
    sender: {
      name: 'Mateusz Nickarz',
      email: 'Mateusznickarz@yahoo.com',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
      online: true,
    },
    subject: 'About Lastes Project',
    snippet:
      'Please send the documents related to the research of our last project as soon as possible. These documents are crucial for our upcoming presentation...',
    body: `Hello, Qojva

Please send the documents related to the research of our last project as soon as possible. These documents are crucial for our upcoming presentation, and having them on hand will allow us to prepare thoroughly. Additionally, if there are any supplementary materials or data that could enhance our understanding of the project's outcomes, please include those as well.

Mateusz Nickarz`,
    date: 'Today, 09:14 AM',
    timestamp: '09:14 AM',
    starred: true,
    unread: false,
    badges: ['BWC Bank', 'Payments'],
    tags: [
      { label: 'BWC Bank', color: '#c084fc' },
      { label: 'Payments', color: '#94a3b8' },
    ],
    hasAttachment: true,
    attachments: [
      {
        id: 'att-1',
        name: 'Report product.pdf',
        size: '68kb',
        type: 'pdf',
        preview:
          'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=260&q=80',
      },
      {
        id: 'att-2',
        name: 'Brand book.pdf',
        size: '678kb',
        type: 'pdf',
        preview:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=260&q=80',
      },
      {
        id: 'att-3',
        name: 'Sitemap.pdf',
        size: '116kb',
        type: 'pdf',
        preview:
          'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=260&q=80',
      },
    ],
    defaultReply: `Hello, Mateusz

Thank you for your reminder. I will send the project-related documents soon and will also attach a summary of the findings and recommendations.`,
  },
  {
    id: 'msg-3',
    sender: {
      name: 'Grace Jackson',
      email: 'grace.j@milora.design',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
      online: false,
    },
    subject: 'Inquiry work redesign app',
    snippet:
      'My former co-worker, Milora agencyc, suggested that I write to you to explore a strategic UX overhaul for our fintech customer dashboard...',
    body: `Hi Qojva,

My former co-worker at Milora Agency suggested that I write to you to explore a strategic UX overhaul for our fintech customer dashboard.

We have a 6-week window before our Series B announcement, and we want our product aesthetics to match our enterprise tier capabilities.

Could we schedule a 20-minute introductory sync this week?

Warm regards,
Grace Jackson`,
    date: 'Yesterday, 06:58 PM',
    timestamp: 'Yesterday',
    starred: false,
    unread: false,
    hasAttachment: true,
    tags: [{ label: 'Work', color: '#f87171' }],
    attachments: [
      {
        id: 'att-4',
        name: 'Design Brief.pdf',
        size: '1.2mb',
        type: 'pdf',
        preview:
          'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=260&q=80',
      },
    ],
  },
  {
    id: 'msg-4',
    sender: {
      name: 'Oliver Miller',
      email: 'oliver.m@clouddocs.org',
      avatar:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80',
      online: true,
    },
    subject: 'Restoring Previous Versions',
    snippet:
      'remembers any changes you make to your files for 30 days, allowing you to seamlessly revert to previous snapshots with zero data loss...',
    body: `Dear Qojva,

The automated cloud backup system remembers any changes you make to your files for 30 days, allowing you to seamlessly revert to previous snapshots with zero data loss.

Please review your workspace storage settings to ensure retention rules meet your team compliance standards.

Sincerely,
Oliver Miller`,
    date: '18 Jul, 07:48 AM',
    timestamp: '18 Jul',
    starred: false,
    unread: false,
    tags: [
      { label: 'Education', color: '#38bdf8' },
      { label: 'Personal', color: '#94a3b8' },
    ],
    attachments: [],
  },
  {
    id: 'msg-5',
    sender: {
      name: 'James Anderson',
      email: 'j.anderson@ventures.com',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
      online: false,
    },
    subject: 'Goals of this project',
    snippet:
      'Tell me more about this project, Im really interested in learning how we can scale the distributed node architecture...',
    body: `Hey Qojva,

Tell me more about this project. I am really interested in learning how we can scale the distributed node architecture without introducing latency.

Let's catch up next Monday morning over coffee or via Google Meet.

Cheers,
James`,
    date: '16 Jul, 04:15 PM',
    timestamp: '16 Jul',
    starred: false,
    unread: false,
    tags: [{ label: 'Work', color: '#f87171' }],
    attachments: [],
  },
];
