
import Campaign from "../models/Campaign.js";

export const getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find({ user: req.user.id });
  res.json(campaigns);
};

export const createCampaign = async (req, res) => {
  if (req.body.budget) {
    req.body.budget = req.body.budget.toString().replace(/[^0-9.-]/g, '');
  }
  const campaign = await Campaign.create({ ...req.body, user: req.user.id });
  res.json(campaign);
};

export const deleteCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    res.status(404);
    throw new Error('Campaign not found');
  }

  if (campaign.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await Campaign.findByIdAndDelete(req.params.id);
  res.json({ message: "Campaign deleted" });
};

export const updateCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    res.status(404);
    throw new Error('Campaign not found');
  }

  if (campaign.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  if (req.body.budget) {
    req.body.budget = req.body.budget.toString().replace(/[^0-9.-]/g, '');
  }
  const updated = await Campaign.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
