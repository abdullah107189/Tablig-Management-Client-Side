// components/Sidebar.tsx
import React from "react";
import {
  HomeIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CogIcon,
  Building2Icon,
  Users,
  LogOutIcon,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", icon: HomeIcon, href: "/", active: true },
    { name: "Sathi", icon: Users, href: "/sathi" },
    { name: "Talim & Mashowara", icon: CalendarDaysIcon, href: "/talim" },
    { name: "Khuruj", icon: Building2Icon, href: "/khuruj" },
    { name: "Reports", icon: ChartBarIcon, href: "/reports" },
    { name: "Settings", icon: CogIcon, href: "/settings" },
  ];

  const mosques = [
    { id: 1, name: "Baitul Mukarram Mosque", code: "BMT-001" },
    { id: 2, name: "Islamic Center Dhaka", code: "ICD-002" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">ত</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900">Tabligh CMS</h1>
            <p className="text-sm text-gray-500">Community Management</p>
          </div>
        </div>
      </div>

      {/* Mosque Selector */}
      <div className="p-4 border-b">
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <option>Baitul Mukarram Mosque (BMT-001)</option>
          <option>Islamic Center Dhaka (ICD-002)</option>
        </select>
        <p className="text-xs text-gray-500 mt-2">Select active mosque</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="font-semibold">AM</span>
          </div>
          <div className="flex-1">
            <p className="font-medium">Abdullah Mohammad</p>
            <p className="text-sm text-gray-500">MOSQUE_ADMIN</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <LogOutIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
