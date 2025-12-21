import CampaignCard from "./CampaignCard";

const CampaignList = ({ campaigns, deleteCampaign, toggleStatus }) => {
  return (
    <div className="space-y-3">
      {campaigns.length === 0 && (
        <p className="text-gray-500">No campaigns created yet.</p>
      )}

      {campaigns.map((c) => (
        <CampaignCard
          key={c.id}
          campaign={c}
          deleteCampaign={deleteCampaign}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export default CampaignList;
