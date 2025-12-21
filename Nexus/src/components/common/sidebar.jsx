import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  ShoppingBag,
  Users,
  BarChart2,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Campaigns", icon: Megaphone, path: "/campaigns" },
    { name: "Products", icon: ShoppingBag, path: "/products" },
    { name: "Leads", icon: Users, path: "/leads" },
    { name: "Analytics", icon: BarChart2, path: "/analytics" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex-1">

        {/* Logo Section */}
        <Link to="/" className="mb-8 flex items-center gap-2 px-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-blue-700 transition">N</div>
          <span className="text-xl font-bold text-gray-900">Nexus</span>
        </Link>

        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Main Menu
        </h2>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                <Icon
                  size={20}
                  className={`transition-colors ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-6 border-t border-gray-100 mt-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white shadow-lg">
          <h4 className="font-bold text-sm mb-1">Nexus Pro</h4>
          <p className="text-xs text-blue-100 mb-3">
            Unlock advanced analytics and AI features.
          </p>
          <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold transition backdrop-blur-sm">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
