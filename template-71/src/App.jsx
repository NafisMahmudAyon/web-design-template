import React, { useState } from 'react';
import RailNav from './components/RailNav';
import SidebarNav from './components/SidebarNav';
import MessageList from './components/MessageList';
import MessageDetail from './components/MessageDetail';
import ComposeModal from './components/ComposeModal';
import { EMAILS } from './data/emailData';

export default function App() {
  const [activeNav, setActiveNav] = useState('inbox');
  const [activeLabel, setActiveLabel] = useState(null);
  const [activeEmailId, setActiveEmailId] = useState('msg-2');
  const [searchQuery, setSearchQuery] = useState('');
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [emailsList, setEmailsList] = useState(EMAILS);

  const selectedEmail = emailsList.find((msg) => msg.id === activeEmailId) || emailsList[0];

  const handleEmailSent = (newEmail) => {
    const createdMsg = {
      id: `msg-${Date.now()}`,
      sender: {
        name: 'Qojva Salvatoc',
        email: 'QojvaSalvatoc@gmail.com',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
        online: true,
      },
      subject: newEmail.subject,
      snippet: newEmail.body.slice(0, 100) + '...',
      body: newEmail.body,
      date: 'Just now',
      timestamp: 'Now',
      starred: false,
      unread: false,
      tags: [{ label: 'Work', color: '#f87171' }],
      attachments: [],
    };
    setEmailsList([createdMsg, ...emailsList]);
    setActiveEmailId(createdMsg.id);
  };

  return (
    <div className="w-screen h-screen bg-[#121316] p-2 sm:p-4 md:p-6 flex items-center justify-center overflow-hidden">
      {/* Outer App Frame Window with Desktop Styling */}
      <div className="w-full h-full max-w-[1540px] max-h-[920px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.7)] flex bg-[#1d1f24] relative">
        {/* Panel 1: Slim Left Rail */}
        <RailNav
          onOpenSettings={() => alert('Settings & Preferences panel')}
        />

        {/* Panel 2: Folders & Labels Sidebar */}
        <SidebarNav
          activeNav={activeNav}
          onSelectNav={(navId) => {
            setActiveNav(navId);
            setActiveLabel(null);
          }}
          activeLabel={activeLabel}
          onSelectLabel={(lblId) => {
            setActiveLabel(lblId);
            setActiveNav(null);
          }}
        />

        {/* Panel 3: Inbox Message List */}
        <MessageList
          activeEmailId={activeEmailId}
          onSelectEmail={(id) => setActiveEmailId(id)}
          onOpenCompose={() => setIsComposeOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Panel 4: Message Content & Quick Reply */}
        <MessageDetail
          email={selectedEmail}
          onBack={() => {}}
        />
      </div>

      {/* Compose Email Modal */}
      <ComposeModal
        isOpen={isComposeOpen}
        onClose={() => setIsComposeOpen(false)}
        onEmailSent={handleEmailSent}
      />
    </div>
  );
}
