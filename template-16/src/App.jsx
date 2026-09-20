import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import ActionBar from './components/ActionBar';
import PatientQueue from './components/PatientQueue';
import PatientProfileCard from './components/PatientProfileCard';
import AppointmentsCard from './components/AppointmentsCard';
import BloodPressureCard from './components/BloodPressureCard';
import PulseAndOxygenRow from './components/PulseAndOxygenRow';
import AboutPatientCard from './components/AboutPatientCard';
import MedicalReportsCard from './components/MedicalReportsCard';
import MessageModal from './components/MessageModal';
import EditProfileModal from './components/EditProfileModal';
import ReportModal from './components/ReportModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('patient');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState({
    id: 'leslie',
    name: 'Leslie Alexander',
    condition: 'Anxiety Disorder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80',
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* Sidebar Navigation */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenMessage={() => setIsMessageOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-7 max-w-[1520px] w-full mx-auto space-y-6">
          {/* Action / Date Range Bar */}
          <ActionBar
            onExportCSV={() => setIsReportOpen(true)}
            onGenerateReport={() => setIsReportOpen(true)}
          />

          {/* 3-Column Patient Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Column 1: Patient Queue */}
            <div className="lg:col-span-3">
              <PatientQueue
                selectedPatientId={selectedPatient.id}
                onSelectPatient={(p) => setSelectedPatient(p)}
              />
            </div>

            {/* Column 2: Patient Profile & Appointments */}
            <div className="lg:col-span-4 space-y-6">
              <PatientProfileCard
                patient={selectedPatient}
                onEdit={() => setIsEditOpen(true)}
                onMessage={() => setIsMessageOpen(true)}
              />
              <AppointmentsCard onAddAppointment={() => setIsEditOpen(true)} />
            </div>

            {/* Column 3: Vitals & Clinical History */}
            <div className="lg:col-span-5 space-y-6">
              <BloodPressureCard />
              <PulseAndOxygenRow />
              <AboutPatientCard />
              <MedicalReportsCard />
            </div>
          </div>
        </main>
      </div>

      {/* Interactive Overlays */}
      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        patient={selectedPatient}
      />

      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        patient={selectedPatient}
        onSave={(data) => {
          setSelectedPatient((prev) => ({
            ...prev,
            name: data.name,
            condition: data.condition,
          }));
        }}
      />

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
}
