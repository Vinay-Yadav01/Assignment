import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, User } from "lucide-react";

// Sample data for employee list
const employeeData = [
  {
    id: 1,
    name: "John Steven Doe",
    department: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 2,
    name: "Barry Jhayson",
    department: "IT",
    jobTitle: "Backend Engineer",
    startDate: "28/04/2022",
    category: "Remote",
    gender: "Male",
  },
  {
    id: 3,
    name: "Tiwa Cavage",
    department: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Female",
  },
  {
    id: 4,
    name: "James IDK",
    department: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 5,
    name: "Vanessa Chidi",
    department: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Female",
  },
  {
    id: 6,
    name: "Don Gorgon",
    department: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Male",
  },
  {
    id: 7,
    name: "Sarah Wilson",
    department: "Design",
    jobTitle: "UI UX Designer",
    startDate: "28/04/2022",
    category: "Full time",
    gender: "Female",
  },
];

const EmployeeManagement = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter employees based on search term
  const filteredEmployees = employeeData.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

          {/* Action Buttons - Same as Dashboard */}
          <div className="flex items-center space-x-3">
            <button className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-[#2d4175]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <button className="relative w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <User size={20} className="text-[#2d4175]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <button className="relative w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={20} className="text-[#2d4175]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">
                Dashboard / Employee Management
              </h1>
            </div>
          </div>

          {/* Employee Management Header */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold">Employee Management</h2>

              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <Input
                    type="text"
                    placeholder="Search employees..."
                    className="pl-10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>

                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Export
                </Button>
              </div>
            </div>
          </div>

          {/* Employee Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name(s)</TableHead>
                  <TableHead>Dept</TableHead>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.jobTitle}</TableCell>
                    <TableCell>{employee.startDate}</TableCell>
                    <TableCell>{employee.category}</TableCell>
                    <TableCell>{employee.gender}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Button className="w-full bg-[#2d4175] hover:bg-[#233561] text-xs py-1">
                          Actions
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full text-xs py-1 text-[#2d4175] border-[#2d4175]"
                        >
                          View Profile
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full text-xs py-1 text-[#2d4175] border-[#2d4175]"
                        >
                          Edit Profile
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeManagement;
