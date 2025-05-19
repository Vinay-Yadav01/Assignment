import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { User } from "lucide-react";

const employees = [
  {
    id: 1,
    name: "John Doe",
    role: "Product Manager",
  },
  {
    id: 2,
    name: "Ginna Lee",
    role: "Sales Executive",
  },
  {
    id: 3,
    name: "John Dore",
    role: "UI/UX Designer",
  },
];

const EmployeesList = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Employees</h3>
        <button className="text-gray-500">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <Table>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id} className="hover:bg-gray-50">
              <TableCell className="p-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {employee.avatar ? (
                      <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="rounded-full"
                      />
                    ) : (
                      <User size={20} className="text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-xs text-gray-500">
                      Role: {employee.role}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex space-x-2 justify-end">
                  <button className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="green"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeesList;
