// src/pages/Dashboard.tsx
import {
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
  ExclamationCircleIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  ClockIcon,
  EnvelopeIcon,
  BellIcon
} from "@heroicons/react/24/solid";

const Dashboard: React.FC = () => {
  const statCards = [
    { icon: <UserGroupIcon className="h-10 w-10" />, label: "ผู้รับฟัง", value: 10 },
    { icon: <ArrowRightOnRectangleIcon className="h-10 w-10" />, label: "จำนวนบัญชีที่ถูกล๊าว", value: 10 },
    { icon: <ExclamationCircleIcon className="h-10 w-10" />, label: "ภาพลายาม", value: 10 },
    { icon: <UserIcon className="h-10 w-10" />, label: "ผู้ละนาย", value: 10 },
    { icon: <ArrowLeftOnRectangleIcon className="h-10 w-10" />, label: "จำนวนบัญชีที่รับผี", value: 10 },
    { icon: <ClockIcon className="h-10 w-10" />, label: "ภายในเวลาที่กำหนด", value: 10 },
  ];

  return (
    <div className="bg-secondary min-h-screen p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-bold text-primary">Dashboard</h1>
        <div className="flex items-center gap-6">
          <EnvelopeIcon className="h-6 w-6 text-primary" />
          <BellIcon className="h-6 w-6 text-primary" />
          <div className="flex items-center gap-2">
            <div className="bg-primary text-secondary font-bold px-3 py-1 rounded-md">CH</div>
            <span className="text-primary font-medium">Chanaliya</span>
          </div>
        </div>
      </div>
      {/* Welcome Banner */}
      <div className="bg-primary text-white rounded-3xl flex items-center justify-between px-8 py-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold">Welcome , Chanaliya</h2>
        </div>
        <img
          src="../assets/working.png"
          alt="working"
          className="w-52 object-contain"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="bg-primary text-white rounded-lg flex flex-col items-center justify-center py-6 gap-3 shadow-md"
          >
            {card.icon}
            <span className="font-medium">{card.label}</span>
            <span className="text-lg font-bold">{card.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
