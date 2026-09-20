import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DoctorQueue, { INITIAL_DOCTORS } from './components/DoctorQueue';
import DoctorProfileCard from './components/DoctorProfileCard';
import TodaysSchedule from './components/TodaysSchedule';
import PatientOverviewChart from './components/PatientOverviewChart';
import AboutDoctorCard from './components/AboutDoctorCard';
import LicensesCard from './components/LicensesCard';
import AddDoctorModal from './components/AddDoctorModal';
import MessageModal from './components/MessageModal';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('Doctor Profile');
  const [doctors, setDoctors] = useState(INITIAL_DOCTORS);
  // Default selected doctor is Dr. Farhan Ahmed (id: 2)
  const [selectedDoctor, setSelectedDoctor] = useState(INITIAL_DOCTORS[1]);

  const [addDoctorModalOpen, setAddDoctorModalOpen] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  const handleAddDoctor = (newDoc) => {
    setDoctors([newDoc, ...doctors]);
    setSelectedDoctor(newDoc);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] text-slate-800 font-sans flex antialiased selection:bg-emerald-500 selection:text-white">
      {/* 1. Collapsible Sidebar Navigation */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeSubmenu={activeSubmenu}
        onSelectSubmenu={setActiveSubmenu}
        onOpenAddDoctor={() => setAddDoctorModalOpen(true)}
      />

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Header Top Bar */}
        <TopBar
          onOpenAddDoctor={() => setAddDoctorModalOpen(true)}
          onOpenMessages={() => setMessageModalOpen(true)}
        />

        {/* 3. Dashboard Body Grid */}
        <main className="p-6 md:p-7 max-w-[1600px] w-full mx-auto flex-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Column 1: Doctor Queue (Span 3 on Desktop) */}
            <div className="lg:col-span-3 h-full">
              <DoctorQueue
                selectedDoctor={selectedDoctor}
                onSelectDoctor={setSelectedDoctor}
              />
            </div>

            {/* Column 2: Doctor Profile Details & Today's Schedule (Span 4 on Desktop) */}
            <div className="lg:col-span-4 space-y-6">
              <DoctorProfileCard
                doctor={selectedDoctor}
                onOpenMessage={() => setMessageModalOpen(true)}
              />
              <TodaysSchedule />
            </div>

            {/* Column 3: Patient Overview Analytics, About Doctor & Licenses (Span 5 on Desktop) */}
            <div className="lg:col-span-5 space-y-6">
              <PatientOverviewChart />
              <AboutDoctorCard doctor={selectedDoctor} />
              <LicensesCard doctor={selectedDoctor} />
            </div>
          </motion.div>
        </main>
      </div>

      {/* 4. Interactive Modals */}
      <AddDoctorModal
        isOpen={addDoctorModalOpen}
        onClose={() => setAddDoctorModalOpen(false)}
        onAddDoctor={handleAddDoctor}
      />

      <MessageModal
        isOpen={messageModalOpen}
        onClose={() => setMessageModalOpen(false)}
        doctor={selectedDoctor}
      />
    </div>
  );
}
