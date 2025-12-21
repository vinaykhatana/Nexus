
import MatchResults from "./MatchResults";

const CampaignCard = ({ campaign, deleteCampaign, toggleStatus }) => {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between">
      <div>
        <h3 className="font-bold">{campaign.title}</h3>
        <div className="mt-2 text-sm text-gray-600">
          <p>Budget: ${campaign.budget}</p>
          <p>Status: <span className={campaign.status === "Active" ? "text-green-600" : "text-red-600"}>{campaign.status}</span></p>
          <p>Target: {campaign.requiredNiche} ({campaign.minFollowers}+ followers)</p>
        </div>
        <MatchResults campaignId={campaign._id} />
      </div>

      <div className="space-x-2">
        <button
          onClick={() => toggleStatus(campaign._id)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => deleteCampaign(campaign._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
