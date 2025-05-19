import { Link, useLocation } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import {
  User,
  LogOut,
  Briefcase,
  Users,
  FileText,
  MessageSquare,
  LayoutDashboard,
  Calendar,
  BarChart,
} from "lucide-react";

const Sidebar = () => {
  const { user, logout } = useUser();
  const location = useLocation();

  const featureItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/messages" },
  ];

  const recruitmentItems = [
    { icon: <Briefcase size={20} />, label: "Jobs", path: "/jobs" },
    { icon: <Users size={20} />, label: "Candidates", path: "/candidates" },
    { icon: <FileText size={20} />, label: "Resumes", path: "/resumes" },
  ];

  const organizationItems = [
    {
      icon: <User size={20} />,
      label: "Employee Management",
      path: "/employees",
    },
    { icon: <Calendar size={20} />, label: "Leave Management", path: "/leave" },
    {
      icon: <BarChart size={20} />,
      label: "Performance Management",
      path: "/performance",
    },
  ];

  const payItems = [
    {
      icon: <Briefcase size={20} />,
      label: "Payroll Management",
      path: "/payroll",
    },
  ];

  const NavSection = ({ title, items }) => (
    <div className="mb-4">
      <h3 className="px-4 text-xs uppercase text-gray-400 font-semibold mb-2">
        {title}
      </h3>
      <ul>
        {items.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg mb-1 ${
                  isActive
                    ? "bg-yellow-400 text-[#1a2547] font-medium"
                    : "text-white hover:bg-[#3a4b75]"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.label === "Messages" && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="w-64 bg-[#1a2547] h-screen flex flex-col text-white">
      {/* Profile */}
      <div className="p-4 flex items-center gap-3 border-b border-[#2d3a5d]">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
          <User size={24} className="text-[#1a2547]" />
        </div>
        <div>
          <h3 className="font-semibold">{user?.name || "KRIS Admin"}</h3>
          <p className="text-sm text-gray-400">Admin</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <NavSection title="Features" items={featureItems} />
        <NavSection title="Recruitment" items={recruitmentItems} />
        <NavSection title="Organization" items={organizationItems} />
        <NavSection title="KRIS Pay" items={payItems} />
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="m-4 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg"
      >
        <LogOut size={20} />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;
