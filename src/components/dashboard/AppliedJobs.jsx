import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Clock } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Sales Executive",
    company: "Acme Inc",
    logo: "AI", // Using initials as fallback
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    title: "User Experience Designer",
    company: "Facebook",
    logo: "FB",
    timeAgo: "12 hours ago",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Tech Pay",
    logo: "TP",
    timeAgo: "3 days ago",
  },
];

const AppliedJobs = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Applied Jobs</h3>
        <button className="text-gray-500">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <Table>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id} className="hover:bg-gray-50">
              <TableCell className="p-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      job.company === "Acme Inc"
                        ? "bg-yellow-500"
                        : job.company === "Facebook"
                        ? "bg-blue-500"
                        : "bg-purple-500"
                    } text-white font-medium`}
                  >
                    {job.logo}
                  </div>
                  <div>
                    <p className="font-medium">{job.title}</p>
                    <p className="text-xs text-gray-500">{job.company}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right text-xs text-gray-500">
                <div className="flex items-center justify-end gap-1">
                  <Clock size={12} />
                  {job.timeAgo}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;
