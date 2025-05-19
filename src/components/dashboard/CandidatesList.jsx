import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { User } from "lucide-react";

const candidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Application Developer",
    status: "new",
  },
  {
    id: 2,
    name: "Ginna Lee",
    role: "Application Developer - Sales Executive",
    status: "rejected",
  },
  {
    id: 3,
    name: "James Fox",
    role: "Application Developer - Product Manager",
    status: "interview",
    daysAgo: "3 days ago",
  },
];

const CandidatesList = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Candidates</h3>
        <button className="text-gray-500">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <Table>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id} className="hover:bg-gray-50">
              <TableCell className="p-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {candidate.avatar ? (
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="rounded-full"
                      />
                    ) : (
                      <User size={20} className="text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{candidate.name}</p>
                    <p className="text-xs text-gray-500">{candidate.role}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end items-center gap-2">
                  {candidate.status === "new" && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      New
                    </span>
                  )}
                  {candidate.status === "rejected" && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      Rejected
                    </span>
                  )}
                  {candidate.status === "interview" && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Interview
                    </span>
                  )}

                  {candidate.daysAgo && (
                    <span className="text-xs text-gray-500">
                      {candidate.daysAgo}
                    </span>
                  )}

                  <button className="ml-2 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
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

export default CandidatesList;
