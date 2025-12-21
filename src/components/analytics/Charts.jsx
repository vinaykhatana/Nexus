import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const campaignData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 15 },
  { name: "Apr", value: 30 },
];

const leadData = [
  { name: "New", value: 70 },
  { name: "Contacted", value: 50 },
  { name: "Converted", value: 25 },
];

const COLORS = ["#3b82f6", "#facc15", "#22c55e"];

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white p-4 rounded shadow h-80">
        <h3 className="font-bold mb-2">Campaign Performance</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={campaignData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow h-80">
        <h3 className="font-bold mb-2">Leads Status</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={leadData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {leadData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
