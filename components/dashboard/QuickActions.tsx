// components/dashboard/QuickActions.tsx

import {
  CalendarDaysIcon,
  MapPinIcon,
  MoonIcon,
  PlusIcon,
  UserPlusIcon,
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "Talim/Mashowara",
      description: "Add/Update today's entry",
      icon: PlusIcon,
      color: "bg-indigo-100 text-indigo-700",
      action: "/talim/add",
    },
    {
      title: "Khuruj: 3 Days Monthly",
      description: "Add 3 days khuruj this month",
      icon: CalendarDaysIcon,
      color: "bg-emerald-100 text-emerald-700",
      action: "/khuruj/3days",
    },
    {
      title: "Khuruj: Shabgujari",
      description: "Add weekly night program",
      icon: MoonIcon,
      color: "bg-purple-100 text-purple-700",
      action: "/khuruj/shabgujari",
    },
    {
      title: "Khuruj: Active",
      description: "Add new long khuruj",
      icon: MapPinIcon,
      color: "bg-amber-100 text-amber-700",
      action: "/khuruj/active",
    },
    {
      title: "Sathi: Add New",
      description: "Add new community member",
      icon: UserPlusIcon,
      color: "bg-blue-100 text-blue-700",
      action: "/sathi/add",
    },
  ];

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.action}
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${action.color}`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-indigo-700">
                  {action.title}
                </h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
