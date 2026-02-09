// components/dashboard/StatusWidgets.tsx
import React from "react";
import { BoxSelectIcon, CheckCircleIcon } from "lucide-react";

const StatusWidgets = () => {
  const statuses = [
    {
      title: "Active Khuruj",
      count: 3,
      participants: 24,
      status: "active",
    },
    {
      title: "Shabgujari This Week",
      completed: true,
      date: "Thu, Dec 14",
      status: "completed",
    },
    {
      title: "3 Days Khuruj This Month",
      completed: false,
      required: "3 days needed",
      status: "pending",
    },
  ];

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Status Widgets
      </h3>
      <div className="space-y-4">
        {statuses.map((status, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">{status.title}</h4>
              {status.status === "active" && (
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Active
                </span>
              )}
              {status.status === "completed" && (
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
              )}
              {status.status === "pending" && (
                <BoxSelectIcon className="w-5 h-5 text-amber-500" />
              )}
            </div>

            {status.count && (
              <div className="mt-3">
                <p className="text-2xl font-bold text-gray-900">
                  {status.count}
                </p>
                <p className="text-sm text-gray-600">
                  {status.participants} participants
                </p>
              </div>
            )}

            {status.completed !== undefined && (
              <div className="mt-3">
                <p
                  className={`text-lg font-semibold ${
                    status.completed ? "text-green-600" : "text-amber-600"
                  }`}
                >
                  {status.completed ? "Completed" : "Pending"}
                </p>
                {status.date && (
                  <p className="text-sm text-gray-600">{status.date}</p>
                )}
                {status.required && (
                  <p className="text-sm text-amber-600">{status.required}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusWidgets;
