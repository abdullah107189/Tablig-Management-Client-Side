import { ClockIcon, HomeIcon, UserIcon } from "lucide-react";

const TodaySnapshot = () => {
  const stats = [
    {
      title: "Today's 24h Amir",
      value: "Abdur Rahman",
      change: "+1 from yesterday",
      icon: UserIcon,
      color: "bg-blue-500",
    },
    {
      title: "Today's Attendance",
      value: "42",
      change: "↗︎ +8 from yesterday",
      icon: UserIcon,
      color: "bg-emerald-500",
    },
    {
      title: "Ghore Talim",
      value: "Yes",
      subtitle: "5 homes",
      icon: HomeIcon,
      color: "bg-purple-500",
    },
    {
      title: "2.5h Mehnat",
      value: "Yes",
      subtitle: "Completed",
      icon: ClockIcon,
      color: "bg-amber-500",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Today&apos;s Snapshot
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                {stat.subtitle && (
                  <p className="text-sm text-gray-600 mt-1">{stat.subtitle}</p>
                )}
                {stat.change && (
                  <p className="text-sm text-emerald-600 mt-2">{stat.change}</p>
                )}
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySnapshot;
