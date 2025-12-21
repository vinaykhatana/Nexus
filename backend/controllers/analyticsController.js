import Campaign from '../models/Campaign.js';
import Lead from '../models/Lead.js';

export const getStats = async (req, res) => {
    try {
        const campaigns = await Campaign.find({ user: req.user.id });

        const totalCampaigns = campaigns.length;
        const totalBudget = campaigns.reduce((acc, curr) => acc + (curr.budget || 0), 0);
        const activeCampaigns = campaigns.filter(c => c.status === 'Active').length;
        const pausedCampaigns = campaigns.filter(c => c.status === 'Paused').length;

        // Data for charts
        const budgetPerCampaign = campaigns.map(c => ({
            name: c.title,
            budget: c.budget
        }));

        res.json({
            totalCampaigns,
            totalBudget,
            activeCampaigns,
            pausedCampaigns,
            budgetPerCampaign
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
