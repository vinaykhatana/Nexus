import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "../components/common/Layout";
import Modal from "../components/common/Modal";
import { Edit, Trash2, Eye, TrendingUp } from "lucide-react";
import api from "../utils/api";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { token } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    budget: "",
    status: "Active",
    roi: ""
  });

  // 🔹 GET: Fetch campaigns from backend
  useEffect(() => {
    if (token) {
      fetchCampaigns();
    }
  }, [token]);

  const fetchCampaigns = async () => {
    try {
      const res = await api.get('/campaigns');
      // Map backend 'title' to frontend 'name' if needed, or just use title
      setCampaigns(res.data);
    } catch (err) {
      console.error("Failed to fetch campaigns", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 POST: Add campaign
  const handleAddCampaign = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: newCampaign.name, // Map name to title
        budget: newCampaign.budget,
        status: newCampaign.status
        // roi and reach are not in schema, so they won't be saved unless schema updates
        // For now we send them, but backend might ignore if not in schema.
        // Assuming backend handles basic fields.
      };

      const res = await api.post('/campaigns', payload);
      setCampaigns([res.data, ...campaigns]);
      setIsModalOpen(false);
      setNewCampaign({ name: "", budget: "", status: "Active", roi: "" });
    } catch (err) {
      console.error("Failed to create campaign", err);
    }
  };

  // 🔹 DELETE: Remove campaign
  const deleteCampaign = async (id) => {
    if (window.confirm("Are you sure you want to delete this campaign?")) {
      try {
        await api.delete(`/campaigns/${id}`);
        setCampaigns(campaigns.filter(c => c._id !== id));
      } catch (err) {
        console.error("Failed to delete campaign", err);
      }
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Campaign Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
        >
          Create Campaign
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Campaign Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ROI</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr><td colSpan="6" className="text-center py-4">Loading campaigns...</td></tr>
              ) : campaigns.length === 0 ? (
                <tr><td colSpan="6" className="text-center py-4">No campaigns found. Create one!</td></tr>
              ) : (
                campaigns.map((c) => (
                  <tr key={c._id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${c.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' :
                        c.status === 'Paused' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                          c.status === 'Completed' ? 'bg-gray-100 text-gray-700 border-gray-200' :
                            'bg-blue-50 text-blue-700 border-blue-100'
                        }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {/* Backend uses title, frontend used name. Fallback for both. */}
                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{c.title || c.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        {/* Reach is not in DB schema currently, showing placeholder */}
                        <Eye size={14} className="text-gray-400" /> {c.reach || "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      ${c.budget}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                        {/* ROI is not in DB schema currently, showing placeholder */}
                        <TrendingUp size={14} /> {c.roi || "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition">
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => deleteCampaign(c._id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
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

export default Campaigns;
