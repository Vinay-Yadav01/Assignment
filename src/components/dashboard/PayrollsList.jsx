import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { User } from "lucide-react";

const payrolls = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer",
    salary: "$5000.00/month",
    status: "paid",
  },
  {
    id: 2,
    name: "Ginna Lee",
    role: "Senior Developer",
    salary: "$5500.00/month",
    status: "processing",
  },
  {
    id: 3,
    name: "James Fox",
    role: "Product Manager",
    salary: "$6500.00/month",
    status: "processing",
  },
];

const PayrollsList = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">April Payrolls</h3>
        <button className="text-gray-500">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <Table>
        <TableBody>
          {payrolls.map((payroll) => (
            <TableRow key={payroll.id} className="hover:bg-gray-50">
              <TableCell className="p-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {payroll.avatar ? (
                      <img
                        src={payroll.avatar}
                        alt={payroll.name}
                        className="rounded-full"
                      />
                    ) : (
                      <User size={20} className="text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{payroll.name}</p>
                    <p className="text-xs text-gray-500">{payroll.salary}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                {payroll.status === "paid" ? (
                  <div className="h-2 w-20 bg-green-500 rounded-full ml-auto"></div>
                ) : (
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 mb-1">
                      Processing
                    </span>
                    <div className="h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          payroll.name === "Ginna Lee" ? "w-3/4" : "w-1/3"
                        } bg-yellow-500`}
                      ></div>
                    </div>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PayrollsList;
