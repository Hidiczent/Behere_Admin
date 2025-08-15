import React from "react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";


interface ReportItem {
  id: number;
  date: string;
  from: string;
  to: string;
  message: string;
  rating: number;
}

const reports: ReportItem[] = [
  {
    id: 1,
    date: "13/8/2025",
    from: "pinkyblabla@gmail.com",
    to: "labububu@gmail.com",
    message: "ໃຫ້ຄຳປຶກສາດີຫຼາຍ ຂອບໃຈທີ່ຮັບຟັງ <3",
    rating: 5,
  },
  {
    id: 2,
    date: "13/8/2025",
    from: "pinkyblabla@gmail.com",
    to: "labububu@gmail.com",
    message: "ໃຫ້ຄຳປຶກສາດີຫຼາຍ ຂອບໃຈທີ່ຮັບຟັງ <3",
    rating: 4,
  },
  {
    id: 3,
    date: "11/8/2025",
    from: "pinkyblabla@gmail.com",
    to: "labububu@gmail.com",
    message: "ໃຫ້ຄຳປຶກສາດີຫຼາຍ ຂອບໃຈທີ່ຮັບຟັງ <3",
    rating: 4,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-lao">

      {/* Title */}
    <div className="flex items-center justify-center gap-2 mb-4">
    <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-[#567C8D]" />
    <h2 className="text-[#567C8D] font-bold text-xl">
        ການສົ່ງຄຳຄິດເຫັນ
    </h2>
    </div>


      {/* Group by Date */}
      {Array.from(new Set(reports.map((r) => r.date))).map((date) => (
        <div key={date} className="mb-8">
          <div className="text-center text-[#567C8D] mb-4">
            <span>ວັນທີ, {date}</span>
            <div className="border-t border-[#567C8D] mt-1 w-full" />
          </div>

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
                  <strong>ເຖິງ :</strong> {r.to}
                </p>
                <p className="text-sm">
                  <strong>ເນື້ອໃນ :</strong> {r.message}
                </p>
                {/* Rating */}
                <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarSolid
                    key={star}
                    className={`h-5 w-5 ${
                        star <= r.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    />
                ))}
                </div>
                {/* Actions */}
                <div className="flex gap-2 mt-2 justify-end">
                  <button className="bg-gray-200 text-[#567C8D] rounded px-3 py-1 text-sm">
                    Send
                  </button>
                  <button className="bg-green-500 text-white rounded px-3 py-1 text-sm">
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
