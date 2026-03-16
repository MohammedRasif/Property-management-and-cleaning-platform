import {
  FiAlertCircle,
  FiCheckSquare,
  FiClipboard,
  FiClock,
  FiHome,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import DashboardHeader from "./components/DashboardHeader";
import MaintenanceIssues from "./components/MaintenanceIssues";
import RecentActivity from "./components/RecentActivity";
import RuleBreakingIssues from "./components/RuleBreakingIssues";
import StatCard from "./components/StatCard";
import UpcomingTasks from "./components/UpcomingTasks";

const overviewStats = [
  {
    label: "Total Buildings",
    value: "12",
    sub: "+2 this month",
    icon: HiOutlineBuildingOffice2,
    color: "blue",
  },
  {
    label: "Total Properties",
    value: "146",
    sub: "+8 this month",
    icon: FiHome,
    color: "green",
  },
  {
    label: "Today's Cleaning Tasks",
    value: "38",
    sub: "12 completed",
    icon: FiCheckSquare,
    color: "purple",
  },
  {
    label: "Pending Maintenance Issues",
    value: "21",
    sub: "5 high priority",
    icon: FiClock,
    color: "orange",
  },
];

const performanceStats = [
  { label: "Task Completion", value: "98%", icon: FiTrendingUp, color: "blue" },
  { label: "Tasks Completed", value: "142", icon: FiClipboard, color: "green" },
  { label: "Active Cleaners", value: "08", icon: FiUsers, color: "purple" },
  { label: "Issues Resolved", value: "15", icon: FiAlertCircle, color: "orange" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <DashboardHeader />

      {/* ── Overview Stats ── */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* ── This Week's Performance ── */}
      <section className="mb-6">
        <h3 className="mb-4 text-base font-bold text-slate-800">
          This Week&apos;s Performance
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {performanceStats.map((stat) => (
            <StatCard key={stat.label} {...stat} coloredValue />
          ))}
        </div>
      </section>

      {/* ── Recent Activity + Upcoming Tasks ── */}
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentActivity />
        <UpcomingTasks />
      </div>

      {/* ── Maintenance + Rule-Breaking ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MaintenanceIssues />
        <RuleBreakingIssues />
      </div>
    </div>
  );
};

export default Dashboard;