import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TeamHeader from './components/TeamHeader';
import EmployeeSpotlight from './components/EmployeeSpotlight';
import ProgressCard from './components/ProgressCard';
import WorkingFormatCard from './components/WorkingFormatCard';
import SalaryChart from './components/SalaryChart';
import TasksTimelineCard from './components/TasksTimelineCard';
import PremiumBanner from './components/PremiumBanner';
import AddEmployeeModal from './components/AddEmployeeModal';
import { TEAM_MEMBERS } from './data/drankData';

export default function App() {
  const [teamMembers, setTeamMembers] = useState(TEAM_MEMBERS);
  const [activeEmployee, setActiveEmployee] = useState(TEAM_MEMBERS[0]); // Cavin Piterson
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSelectEmployee = (member) => {
    setActiveEmployee(member);
  };

  const handleAddEmployee = (newMember) => {
    setTeamMembers((prev) => [newMember, ...prev]);
    setActiveEmployee(newMember);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#24262d] via-[#1c1d23] to-[#121317] flex items-center justify-center p-2 sm:p-4 md:p-8 font-sans antialiased text-white selection:bg-[#7ae2a4] selection:text-black">
      {/* Outer Dark Sleek Chassis */}
      <main className="w-full max-w-[1460px] bg-[#090a0e] rounded-[32px] sm:rounded-[44px] p-3.5 sm:p-5 md:p-6 border border-[#1b1c26] shadow-2xl shadow-black/60 flex flex-col md:flex-row gap-4 sm:gap-5 min-w-0">
        {/* Leftmost Sidebar Strip */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navbar */}
          <Navbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onOpenNotifications={() => alert('All recent employee alerts are up to date.')}
          />

          {/* Subheader: Team carousel & Add employee */}
          <TeamHeader
            teamMembers={teamMembers}
            activeEmployeeId={activeEmployee.id}
            onSelectEmployee={handleSelectEmployee}
            onAddEmployeeClick={() => setIsAddModalOpen(true)}
          />

          {/* Bento Grid Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-2">
            {/* Col 1 (Span 4 lg): Employee Spotlight & Skills */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <EmployeeSpotlight employee={activeEmployee} />
            </div>

            {/* Col 2 (Span 5 lg): Progress, Working Format & Salary Chart */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Top Row: Progress & Working Format side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ProgressCard />
                <WorkingFormatCard />
              </div>

              {/* Bottom: Salary Bar Chart */}
              <SalaryChart />
            </div>

            {/* Col 3 (Span 3 lg): Tasks Timeline & Drank Premium */}
            <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
              <TasksTimelineCard />
              <PremiumBanner />
            </div>
          </div>
        </div>
      </main>

      {/* Add Employee Modal */}
      <AddEmployeeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddEmployee={handleAddEmployee}
      />
    </div>
  );
}
