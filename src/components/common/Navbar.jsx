import { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ChevronDown, BarChart, Search, Video, Cloud, Users, Handshake, LayoutGrid } from "lucide-react";
import MegaMenu from "./MegaMenu";
import SearchBar from "./SearchBar";
import NotificationDropdown from "./NotificationDropdown";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => setActiveMenu(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left: Logo & Mega Menu Triggers */}
        <div className="flex items-center gap-8">
          <Link to="/dashboard" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
            <span>Nexus</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => toggleMenu('products')}
              className={`flex items-center gap-1 font-medium transition-colors ${activeMenu === 'products' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Products <ChevronDown size={16} className={`transition-transform ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => toggleMenu('hub')}
              className={`flex items-center gap-1 font-medium transition-colors ${activeMenu === 'hub' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Marketer Hub <ChevronDown size={16} className={`transition-transform ${activeMenu === 'hub' ? 'rotate-180' : ''}`} />
            </button>
            <Link to="/solutions" className="text-gray-600 hover:text-gray-900 font-medium">Solutions</Link>
            <Link to="/learn" className="text-gray-600 hover:text-gray-900 font-medium">Learn</Link>
          </div>
        </div>

        {/* Center: Search Bar (Hidden on small screens) */}
        <div className="hidden lg:block flex-1 max-w-2xl px-8">
          <SearchBar />
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-4">
          <NotificationDropdown />

          <div className="h-8 w-px bg-gray-200 mx-2 hidden md:block"></div>

          <div
            className="flex items-center gap-3 relative cursor-pointer"
            ref={profileRef}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500">Enterprise Plan</p>
            </div>
            <div className="h-9 w-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">
              {user?.name?.charAt(0) || 'U'}
            </div>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  My Profile
                </Link>
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
                  Back to Home
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mega Menus */}
      <MegaMenu
        isOpen={activeMenu === 'products'}
        onClose={closeMenu}
        title="Products"
        description="Great solutions start with great products. Further your mastery of the full marketing stack."
      >
        <div className="grid grid-cols-2 gap-6">
          <MenuItem icon={<BarChart className="text-blue-600" />} title="Analytics 360" desc="Enterprise-grade analytics" />
          <MenuItem icon={<Search className="text-blue-600" />} title="Search Ads" desc="Manage search campaigns" />
          <MenuItem icon={<Video className="text-blue-600" />} title="Display & Video" desc="Unified programmatic" />
          <MenuItem icon={<Cloud className="text-blue-600" />} title="Cloud Marketing" desc="Data warehouse integration" />
        </div>
      </MegaMenu>

      <MegaMenu
        isOpen={activeMenu === 'hub'}
        onClose={closeMenu}
        title="Marketer Hub"
        description="The Marketer Hub serves as a central discovery point for learning and partnership programs."
      >
        <div className="grid grid-cols-2 gap-6">
          <MenuItem icon={<Handshake className="text-green-600" />} title="Become a Partner" desc="Join our agency network" />
          <MenuItem icon={<Users className="text-purple-600" />} title="Find a Partner" desc="Hire certified experts" />
          <MenuItem icon={<LayoutGrid className="text-orange-600" />} title="Partner Gallery" desc="Success stories & case studies" />
        </div>
      </MegaMenu>
    </nav>
  );
};

const MenuItem = ({ icon, title, desc }) => (
  <div className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
    <div className="mt-1 p-2 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

export default Navbar;
