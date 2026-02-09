// components/dashboard/RecentActivity.tsx
import React from "react";
import { ChevronRightIcon } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      type: "Talim",
      date: "Today, 8:30 AM",
      title: "Daily Talim Completed",
      details: "Attendance: 42, Ghore Talim: 5 homes",
      color: "bg-blue-500",
    },
    {
      type: "Shabgujari",
      date: "Yesterday",
      title: "Weekly Shabgujari",
      details: "Attendance: 28, Duration: Full night",
      color: "bg-purple-500",
    },
    {
      type: "Khuruj",
      date: "Dec 10-12",
      title: "3 Days Local Khuruj",
      details: "Area: Local Mosque, Participants: 15",
      color: "bg-emerald-500",
    },
    {
      type: "Active Khuruj",
      date: "Started Dec 1",
      title: "40 Days Khuruj Update",
      details: "Days remaining: 25, Participants: 8",
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <a
          href="/activity"
          className="text-sm text-indigo-600 hover:text-indigo-800"
        >
          View all
        </a>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg"
          >
            <div
              className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center`}
            >
              <span className="text-white font-medium text-sm">
                {activity.type.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
