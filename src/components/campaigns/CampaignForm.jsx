import { useState } from "react";

const CampaignForm = ({ addCampaign }) => {
  const [title, setTitle] = useState("");
  const [budget, setBudget] = useState("");
  const [requiredNiche, setRequiredNiche] = useState("");
  const [minFollowers, setMinFollowers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !budget) return;

    addCampaign({
      id: Date.now(),
      title,
      budget,
      requiredNiche,
      minFollowers,
      status: "Active",
    });

    setTitle("");
    setBudget("");
    setRequiredNiche("");
    setMinFollowers("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <h3 className="font-bold mb-2">Create Campaign</h3>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Campaign Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Required Niche (e.g., Tech)"
        value={requiredNiche}
        onChange={(e) => setRequiredNiche(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Min Followers"
        type="number"
        value={minFollowers}
        onChange={(e) => setMinFollowers(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Campaign
      </button>
    </form>
  );
};

export default CampaignForm;
