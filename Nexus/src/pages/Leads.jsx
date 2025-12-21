import Layout from "../components/common/Layout";
import Modal from "../components/common/Modal";
import { Mail, Phone, MapPin, MoreHorizontal } from "lucide-react";
import { useState, useEffect } from "react";

const leads = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@example.com", company: "TechFlow Inc.", role: "CTO", score: 92, status: "Hot" },
  { id: 2, name: "Michael Chen", email: "m.chen@startups.io", company: "Startups.io", role: "Founder", score: 85, status: "Warm" },
  { id: 3, name: "Jessica Williams", email: "jessica@designagency.com", company: "Creative Minds", role: "Art Director", score: 45, status: "Cold" },
  { id: 4, name: "David Miller", email: "david.m@logistics.net", company: "FastTrack Logistics", role: "Operations Mgr", score: 78, status: "Warm" },
  { id: 5, name: "Emily Davis", email: "emily.d@healthplus.org", company: "HealthPlus", role: "Marketing Lead", score: 62, status: "Warm" },
  { id: 6, name: "Robert Wilson", email: "robert@fintech.co", company: "Nova Fintech", role: "VP Sales", score: 95, status: "Hot" },
  { id: 7, name: "Lisa Brown", email: "lisa.b@edu.edu", company: "State University", role: "Dean", score: 30, status: "Cold" },
  { id: 8, name: "James Taylor", email: "j.taylor@construct.com", company: "BuildIt Right", role: "Project Manager", score: 55, status: "Warm" },
];

const Leads = () => {
  const [activeLeads, setActiveLeads] = useState(() => {
    const saved = localStorage.getItem("nexus_leads");
    return saved ? JSON.parse(saved) : leads;
  });

  useEffect(() => {
    localStorage.setItem("nexus_leads", JSON.stringify(activeLeads));
  }, [activeLeads]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    company: "",
    status: "New"
  });

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-gray-400";
  }

  const handleAddLead = (e) => {
    e.preventDefault();
    const leadToAdd = {
      id: Date.now(),
      ...newLead,
      role: "Contact", // Default role
      score: Math.floor(Math.random() * 40) + 60, // Random score 60-100 for demo
    };
    setActiveLeads([leadToAdd, ...activeLeads]);
    setIsModalOpen(false);
    setNewLead({ name: "", email: "", company: "", status: "New" });
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Leads Intelligence</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Add New Lead
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Lead Profile</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Lead Score</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{lead.name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Mail size={12} /> {lead.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900 font-medium">{lead.company}</p>
                    <p className="text-xs text-gray-500">{lead.role}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getScoreColor(lead.score)}`}
                          style={{ width: `${lead.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${lead.status === 'Hot' ? 'bg-red-50 text-red-700 border-red-100' :
                      lead.status === 'Warm' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        'bg-gray-50 text-gray-600 border-gray-200'
                      }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Lead"
      >
        <form onSubmit={handleAddLead} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newLead.name}
              onChange={e => setNewLead({ ...newLead, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newLead.email}
              onChange={e => setNewLead({ ...newLead, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newLead.company}
              onChange={e => setNewLead({ ...newLead, company: e.target.value })}
              placeholder="Acme Corp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newLead.status}
              onChange={e => setNewLead({ ...newLead, status: e.target.value })}
            >
              <option value="New">New</option>
              <option value="Warm">Warm</option>
              <option value="Hot">Hot</option>
              <option value="Cold">Cold</option>
            </select>
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
              Add Lead
            </button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
};

export default Leads;
