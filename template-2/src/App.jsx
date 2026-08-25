import React, { useState } from 'react';
import Header from './components/Header';
import DashboardTitleBar from './components/DashboardTitleBar';
import Sidebar from './components/Sidebar';
import UpgradeProCard from './components/UpgradeProCard';
import RevenueOverview from './components/RevenueOverview';
import ProjectStatus from './components/ProjectStatus';
import TeamPerformance from './components/TeamPerformance';
import ActiveProjects from './components/ActiveProjects';
import NextMeetingCard from './components/NextMeetingCard';
import TopClientsCard from './components/TopClientsCard';
import ActionModal from './components/ActionModal';

export default function App() {
  const [activeModalTitle, setActiveModalTitle] = useState(null);

  return (
		<div className="dashboard-shell">
			{/* Top Header Navbar */}
			<Header onOpenModal={(title) => setActiveModalTitle(title)} />

			{/* Dashboard Title Bar & Quick Actions */}
			<DashboardTitleBar onOpenModal={(title) => setActiveModalTitle(title)} />

			{/* Main Content Layout (Sidebar + Cards Grid) */}
			<main className="dashboard-main-layout">
				{/* Left Vertical Icon Bar */}
				<Sidebar />

				{/* Content Cards Grid */}
				<div className="content-cards-grid">
					{/* Card A: Upgrade To Pro / Free Trial (Far Left Hero Banner) */}
					<UpgradeProCard onOpenModal={(title) => setActiveModalTitle(title)} />

					{/* Middle Column (Revenue Overview, Project Status, Team Performance, Active Projects) */}
					<div className="center-column-layout">
						<RevenueOverview
							onOpenModal={(title) => setActiveModalTitle(title)}
						/>
						<ProjectStatus
							onOpenModal={(title) => setActiveModalTitle(title)}
						/>

						<div className="center-bottom-cards-row">
							{/* <TeamPerformance
								onOpenModal={(title) => setActiveModalTitle(title)}
							/>
							<ActiveProjects
								onOpenModal={(title) => setActiveModalTitle(title)}
							/> */}
							<NextMeetingCard
								onOpenModal={(title) => setActiveModalTitle(title)}
							/>
							<TopClientsCard
								onOpenModal={(title) => setActiveModalTitle(title)}
							/>
						</div>
					</div>

					{/* Far Right Column (Next Meeting In, Top Clients) */}
					<div className="right-column-layout">
						{/* <NextMeetingCard
							onOpenModal={(title) => setActiveModalTitle(title)}
						/>
						<TopClientsCard
							onOpenModal={(title) => setActiveModalTitle(title)}
						/> */}
						<TeamPerformance
							onOpenModal={(title) => setActiveModalTitle(title)}
						/>
						<ActiveProjects
							onOpenModal={(title) => setActiveModalTitle(title)}
						/>
					</div>
				</div>
			</main>

			{/* Interactive Modal */}
			<ActionModal
				title={activeModalTitle}
				onClose={() => setActiveModalTitle(null)}
			/>
		</div>
	);
}


