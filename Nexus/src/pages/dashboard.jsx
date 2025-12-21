import { useContext, useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/common/Modal";
import {
  BarChart2,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Week 1", impressions: 4000, clicks: 2400 },
  { name: "Week 2", impressions: 3000, clicks: 1398 },
  { name: "Week 3", impressions: 2000, clicks: 9800 },
  { name: "Week 4", impressions: 2780, clicks: 3908 },
  { name: "Week 5", impressions: 1890, clicks: 4800 },
  { name: "Week 6", impressions: 2390, clicks: 3800 },
  { name: "Week 7", impressions: 3490, clicks: 4300 },
];

const campaigns = [
  { name: "Summer Sale 2025", status: "Active", budget: "$12,000", roi: "320%" },
  { name: "Q3 Brand Awareness", status: "Paused", budget: "$5,500", roi: "180%" },
  { name: "New Product Launch", status: "Draft", budget: "$20,000", roi: "-" },
  { name: "Retargeting - Cart", status: "Active", budget: "$3,200", roi: "410%" },
  { name: "Email Sequence A", status: "Completed", budget: "$1,800", roi: "215%" },
];

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [activeCampaigns, setActiveCampaigns] = useState(() => {
    const saved = localStorage.getItem("nexus_campaigns");
    return saved ? JSON.parse(saved) : campaigns;
  });

  // Persist campaigns
  useEffect(() => {
    localStorage.setItem("nexus_campaigns", JSON.stringify(activeCampaigns));
  }, [activeCampaigns]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    budget: "",
    status: "Active",
    roi: ""
  });

  const handleExportCSV = () => {
    const headers = ["Campaign Name", "Status", "Budget", "ROI"];
    const rows = activeCampaigns.map(c => [c.name, c.status, c.budget, c.roi]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "marketing_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddCampaign = (e) => {
    e.preventDefault();
    const campaignToAdd = {
      ...newCampaign,
      budget: `$${newCampaign.budget}`,
      roi: `${newCampaign.roi}%`
    };
    setActiveCampaigns([campaignToAdd, ...activeCampaigns]);
    setIsModalOpen(false);
    setNewCampaign({ name: "", budget: "", status: "Active", roi: "" });
  };

  return (
    <Layout>
      <div className="mb-8 mt-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name || 'User'}</h1>
          <p className="text-gray-500">Here's what's happening with your projects today.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
          >
            Export Report
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            New Campaign
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Revenue"
          value="$52,430"
          change="+12.5%"
          isPositive={true}
          icon={<DollarSign className="text-green-600" />}
          color="green"
        />
        <MetricCard
          title="Active Campaigns"
          value="12"
          change="+2"
          isPositive={true}
          icon={<MegaphoneIcon className="text-blue-600" />}
          color="blue"
        />
        <MetricCard
          title="New Leads"
          value="128"
          change="+8.2%"
          isPositive={true}
          icon={<Users className="text-purple-600" />}
          color="purple"
        />
        <MetricCard
          title="Conversion Rate"
          value="3.2%"
          change="-0.4%"
          isPositive={false}
          icon={<Activity className="text-orange-600" />}
          color="orange"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Campaign Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorImp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorClick" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Area type="monotone" dataKey="impressions" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorImp)" />
                <Area type="monotone" dataKey="clicks" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorClick)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-3">Campaign</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">ROI</th>
                </tr>
              </thead>
              <tbody className="devide-y devide-gray-50">
                {activeCampaigns.map((c, i) => (
                  <tr key={i} className="group">
                    <td className="py-3 text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{c.name}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${c.status === 'Active' ? 'bg-green-100 text-green-700' :
                        c.status === 'Paused' ? 'bg-yellow-100 text-yellow-700' :
                          c.status === 'Completed' ? 'bg-gray-100 text-gray-700' :
                            'bg-blue-50 text-blue-600'
                        }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-right text-gray-600">{c.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full mt-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition">View All Activity</button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Campaign"
      >
        <form onSubmit={handleAddCampaign} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newCampaign.name}
              onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })}
              placeholder="e.g. Summer Sale 2025"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
            <input
              type="number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newCampaign.budget}
              onChange={e => setNewCampaign({ ...newCampaign, budget: e.target.value })}
              placeholder="5000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newCampaign.status}
              onChange={e => setNewCampaign({ ...newCampaign, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
              <option value="Paused">Paused</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expected ROI (%)</label>
            <input
              type="number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newCampaign.roi}
              onChange={e => setNewCampaign({ ...newCampaign, roi: e.target.value })}
              placeholder="150"
            />
          </div>
          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition shadow-sm"
            >
              Launch Campaign
            </button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
};

const MetricCard = ({ title, value, change, isPositive, icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {change}
        <span className="text-gray-400 font-normal ml-1">vs last week</span>
      </div>
    </div>
    <div className={`p-3 rounded-lg bg-${color}-50`}>
      {icon}
    </div>
  </div>
);

// Helper icon component since Megaphone is used in Sidebar import in another file, duplicating here for simplicity or using from lucide-react directly
import { Megaphone as MegaphoneIcon } from "lucide-react";


export default Dashboard;
