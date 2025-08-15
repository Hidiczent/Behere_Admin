import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";


interface ReportItem {
  id: number;
  date: string;
  from: string;
  title: string;
  description: string;
}

const reports: ReportItem[] = [
  {
    id: 1,
    date: "13/8/2025",
    from: "pinkyblabla@gmail.com",
    title: "ໃຊ້ຄຳເວົ້າບໍ່ເໝາະສົມ",
    description: "ຜູ້ຟັງບໍ່ສົນໃຈຂໍ້ຄວາມ",
  },
  {
    id: 2,
    date: "13/8/2025",
    from: "pinkyblabla@gmail.com",
    title: "ໃຊ້ຄຳເວົ້າບໍ່ເໝາະສົມ",
    description: "ຜູ້ຟັງບໍ່ສົນໃຈຂໍ້ຄວາມ",
  },
  {
    id: 3,
    date: "11/8/2025",
    from: "pinkyblabla@gmail.com",
    title: "ໃຊ້ຄຳເວົ້າບໍ່ເໝາະສົມ",
    description: "ຜູ້ຟັງບໍ່ສົນໃຈຂໍ້ຄວາມ",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-lao">
      

      {/* Title */}
    <div className="flex items-center justify-center gap-2 mb-4">
    <ExclamationTriangleIcon className="h-6 w-6 text-[#567C8D]" />
    <h2 className="text-[#567C8D] font-bold text-xl">
        ລາຍງານຜູ້ໃຊ້
    </h2>
    </div>



      {/* Group by Date */}
      {Array.from(new Set(reports.map((r) => r.date))).map((date) => (
        <div key={date} className="mb-8">
          {/* Date label with line */}
          <div className="text-center text-[#567C8D] mb-4 relative">
            <span className="bg-[#F8F1E6] px-2 relative z-10">
              ວັນທີ, {date}
            </span>
            <div className="absolute left-0 top-1/2 w-full border-t border-[#567C8D] z-0"></div>
          </div>

          {/* Report cards */}
          {reports
            .filter((r) => r.date === date)
            .map((r) => (
              <div
                key={r.id}
                className="bg-[#567C8D] text-white rounded-lg p-4 mb-4 flex flex-col gap-2"
              >
                <p className="text-sm">
                  <strong>ຈາກ :</strong> {r.from}
                </p>
                <p className="text-sm">
                  <strong>ເນື້ອໃນ :</strong> {r.title}
                </p>
                <p className="text-sm">
                  <strong>ຫມາຍເຫດ :</strong> {r.description}
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="bg-gray-200 text-[#567C8D] rounded px-4 py-1 text-sm">
                    View
                  </button>
                  <button className="bg-gray-200 text-[#567C8D] rounded px-4 py-1 text-sm">
                    Send
                  </button>
                  <button className="bg-[#00FF00] text-white rounded px-4 py-1 text-sm">
                    Confirm
                  </button>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
