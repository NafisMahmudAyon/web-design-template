import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import PatientCareOverview from './components/PatientCareOverview';
import DoctorList from './components/DoctorList';
import AppointmentsCard from './components/AppointmentsCard';
import RecoveryTrendCard from './components/RecoveryTrendCard';
import ShiftInfoCard from './components/ShiftInfoCard';
import PatientHealthAnalysis from './components/PatientHealthAnalysis';
import AiAssistantCard from './components/AiAssistantCard';
import AddAppointmentModal from './components/AddAppointmentModal';
import NewPatientTaskModal from './components/NewPatientTaskModal';
import DetailModal from './components/DetailModal';
import { appointmentsData } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [appointments, setAppointments] = useState(appointmentsData);
  
  // Modals state
  const [addAppointmentOpen, setAddAppointmentOpen] = useState(false);
  const [addPatientOpen, setAddPatientOpen] = useState(false);
  const [detailModalData, setDetailModalData] = useState(null);
  const [detailModalType, setDetailModalType] = useState(null);

  const handleOpenDetail = (data, type) => {
    setDetailModalData(data);
    setDetailModalType(type);
  };

  const handleAddAppointment = (newApt) => {
    setAppointments((prev) => [newApt, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#E5E8E3] text-[#181D17] antialiased p-3 sm:p-6 lg:p-8 selection:bg-[#52734D] selection:text-white flex flex-col justify-between">
      
      {/* Centered App Container */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 flex flex-col">
        
        {/* Navigation Bar */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onOpenAddPatient={() => setAddPatientOpen(true)}
          onOpenAddAppointment={() => setAddAppointmentOpen(true)}
        />

        {/* Page Header */}
        <PageHeader />

        {/* Main Dashboard Bento Grid */}
        <main className="flex-1 flex flex-col gap-6">
          
          {/* Row 1: [Patient Care Overview (6 cols)] [Doctor (3 cols)] [Appointments (3 cols)] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Patient Care Overview */}
            <div className={`lg:col-span-6 transition-all duration-300 ${activeTab === 'Patients' ? 'ring-2 ring-[#52734D] rounded-3xl' : ''}`}>
              <PatientCareOverview onSelectMetric={(metric) => handleOpenDetail(metric, 'metric')} />
            </div>

            {/* Doctor */}
            <div className={`lg:col-span-3 transition-all duration-300 ${activeTab === 'Doctors' ? 'ring-2 ring-[#52734D] rounded-3xl' : ''}`}>
              <DoctorList onSelectDoctor={(doc) => handleOpenDetail(doc, 'doctor')} />
            </div>

            {/* Appointments */}
            <div className={`lg:col-span-3 transition-all duration-300 ${activeTab === 'Schedules' ? 'ring-2 ring-[#52734D] rounded-3xl' : ''}`}>
              <AppointmentsCard 
                appointments={appointments}
                onOpenAddAppointment={() => setAddAppointmentOpen(true)}
                onSelectAppointment={(apt) => handleOpenDetail(apt, 'appointment')}
              />
            </div>

          </div>

          {/* Row 2: [Recovery & Shift Info (3 cols)] [Patient Health Analysis (6 cols)] [Ai Assistant (3 cols)] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Stack: Recovery Trend Card & Shift Info Card (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-5 justify-between">
              <RecoveryTrendCard />
              <ShiftInfoCard />
            </div>

            {/* Middle: Patient Health Analysis (6 cols) */}
            <div className="lg:col-span-6">
              <PatientHealthAnalysis onSelectSection={(sec) => console.log(sec)} />
            </div>

            {/* Right: Ai Assistant Card (3 cols) */}
            <div className="lg:col-span-3">
              <AiAssistantCard />
            </div>

          </div>

        </main>

        {/* Bottom subtle hospital footer note */}
        <footer className="mt-8 pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A8376]">
          <p>© 2026 St. Mary's Medical Center • Nursing Operations Management System</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              HL7 / FHIR Gateway Online
            </span>
            <span>HIPAA Compliant</span>
          </div>
        </footer>

      </div>

      {/* Interactive Modals */}
      <AddAppointmentModal
        isOpen={addAppointmentOpen}
        onClose={() => setAddAppointmentOpen(false)}
        onAddAppointment={handleAddAppointment}
      />

      <NewPatientTaskModal
        isOpen={addPatientOpen}
        onClose={() => setAddPatientOpen(false)}
        onPatientAdmitted={(patient) => {
          console.log('Admitted:', patient);
        }}
      />

      <DetailModal
        isOpen={!!detailModalData}
        onClose={() => {
          setDetailModalData(null);
          setDetailModalType(null);
        }}
        data={detailModalData}
        type={detailModalType}
      />

    </div>
  );
}
