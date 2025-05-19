import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import AppliedJobs from "@/components/dashboard/AppliedJobs";
import EmployeesList from "@/components/dashboard/EmployeesList";
import CandidatesList from "@/components/dashboard/CandidatesList";
import PayrollsList from "@/components/dashboard/PayrollsList";
import { useUser } from "@/context/UserContext";
import {
  Mail,
  Briefcase,
  Users,
  Bell,
  MessageSquare,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile, shown on larger screens */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block fixed inset-0 z-20 md:relative md:inset-auto`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-4 text-gray-600 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <button className="bg-[#2d4175] text-white rounded-md px-4 py-2 flex items-center gap-2 text-sm">
              All Candidates
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Search Bar */}
            <div className="ml-4 hidden md:flex items-center relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Bell size={20} className="text-[#2d4175]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <button className="relative w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <MessageSquare size={20} className="text-[#2d4175]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <button className="relative w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail size={20} className="text-[#2d4175]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="text-xl font-semibold mb-6">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <DashboardCard
              icon={<Mail size={24} />}
              title="Messages"
              count={138}
              color="bg-yellow-400"
            />

            <DashboardCard
              icon={<Briefcase size={24} />}
              title="Jobs"
              count={50}
              color="bg-[#2d4175]"
            />

            <DashboardCard
              icon={<Users size={24} />}
              title="Candidates"
              count={100}
              color="bg-green-600"
            />
          </div>

          {/* Main Dashboard Content - 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AppliedJobs />
            <EmployeesList />
            <CandidatesList />
            <PayrollsList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
