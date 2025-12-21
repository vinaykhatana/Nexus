import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Fixed width, no shrink */}
      <div className="w-64 flex-shrink-0 hidden md:block border-r border-gray-200 bg-white">
        <Sidebar />
      </div>

      {/* Main Content Wrapper - Flex 1 to take remaining width */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-50">
        {/* Navbar at top */}
        <Navbar />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
