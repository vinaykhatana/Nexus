import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Layout from '../components/common/Layout';
import api from '../utils/api';

const Analytics = () => {
  const [stats, setStats] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      api.get('/analytics')
        .then(res => setStats(res.data))
        .catch(err => console.error(err));
    }
  }, [token]);

  if (!stats) return <Layout><p>Loading...</p></Layout>;

  const pieData = [
    { name: 'Active', value: stats.activeCampaigns },
    { name: 'Paused', value: stats.pausedCampaigns },
  ];
  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow-md border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-semibold">Total Campaigns</h3>
          <p className="text-3xl font-bold">{stats.totalCampaigns}</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-semibold">Total Budget</h3>
          <p className="text-3xl font-bold">${stats.totalBudget}</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm font-semibold">Active Campaigns</h3>
          <p className="text-3xl font-bold">{stats.activeCampaigns}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart: Budget per Campaign */}
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-4">Budget per Campaign</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.budgetPerCampaign}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="budget" fill="#8884d8" name="Budget ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Status Distribution */}
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-4">Campaign Status</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
