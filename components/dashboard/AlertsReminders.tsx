import { BellIcon, CalendarIcon } from "lucide-react";

const AlertsReminders = () => {
  const alerts = [
    {
      type: "warning",
      title: "Daily Entry Missing",
      message: "Today's Talim entry not recorded",
      time: "2 hours ago",
      icon: BellIcon,
    },
    {
      type: "info",
      title: "Shabgujari This Week",
      message: "Weekly night program pending for this Thursday",
      time: "Yesterday",
      icon: BellIcon,
    },
    {
      type: "urgent",
      title: "Khuruj Completion",
      message: "Active khuruj ended yesterday - needs completion",
      time: "Just now",
      icon: CalendarIcon,
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Alerts & Reminders
        </h3>
        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
          3 New
        </span>
      </div>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-l-4 ${
              alert.type === "warning"
                ? "border-amber-500 bg-amber-50"
                : alert.type === "urgent"
                  ? "border-red-500 bg-red-50"
                  : "border-blue-500 bg-blue-50"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`p-2 rounded ${
                  alert.type === "warning"
                    ? "bg-amber-100 text-amber-600"
                    : alert.type === "urgent"
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-600"
                }`}
              >
                <alert.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{alert.title}</h4>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Upcoming Reminders</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
            Tomorrow&apos;s Amir assignment due today
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
            Monthly 3-days khuruj planning for next month
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
            Sathi category review next week
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlertsReminders;
