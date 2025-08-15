// src/pages/Dashboard.tsx
import { Link } from "react-router-dom";
import {
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
  ExclamationCircleIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const Dashboard: React.FC = () => {
  const statCards = [
    { icon: <UserGroupIcon className="h-10 w-10" />, label: "ຜູ້ຮັບຟັງ", value: 10 },
    { icon: <ArrowLeftOnRectangleIcon className="h-10 w-10" />, label: "ຈຳນວນຫ້ອງທີ່ຖືກສ້າງ", value: 10 },
    { icon: <ExclamationCircleIcon className="h-10 w-10" />, label: "ການລາຍງານ", value: 10, path: "/report" },
    { icon: <UserIcon className="h-10 w-10" />, label: "ຜູ້ລະບາຍ", value: 10 },
    { icon: <ArrowRightOnRectangleIcon className="h-10 w-10" />, label: "ຈຳນວນຫ້ອງທີ່ຈົບລົງ", value: 10 },
    { icon: <StarIcon className="h-10 w-10" />, label: "ການໃຫ້ຄະແນນ", value: 10, path: "/recomment" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-lao">

      {/* Welcome Banner */}
      <div className="bg-[#567C8D] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between px-8 py-6 mb-10 mt-6 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-1">Welcome, Chanaliya </h2>
          <p className="opacity-80">ຂໍໃຫ້ມື້ນີ້ເປັນມື້ທີ່ດີ!</p>
        </div>
        <img
          src="../assets/working.png"
          alt="working"
          className="w-48 sm:w-52 object-contain mt-4 sm:mt-0"
        />
      </div>

      {/* Stats Cards */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) =>
          card.path ? (
            <Link
              key={index}
              to={card.path}
              className="bg-white text-[#567C8D] rounded-lg flex flex-col items-center justify-center py-6 gap-3 shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              {card.icon}
              <span className="font-medium">{card.label}</span>
              <span className="text-lg font-bold">{card.value}</span>
            </Link>
          ) : (
            <div
              key={index}
              className="bg-white text-[#567C8D] rounded-lg flex flex-col items-center justify-center py-6 gap-3 shadow-md"
            >
              {card.icon}
              <span className="font-medium">{card.label}</span>
              <span className="text-lg font-bold">{card.value}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
