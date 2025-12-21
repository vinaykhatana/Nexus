import User from '../models/User.js';
import Campaign from '../models/Campaign.js';

// @desc    Get matching influencers for a campaign
// @route   GET /api/match/:campaignId
// @access  Private
export const getMatches = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.campaignId);

        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }

        // Ensure the user owns the campaign
        if (campaign.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const { requiredNiche, minFollowers } = campaign;

        // Find influencers who have the required niche and enough followers
        const matches = await User.find({
            role: 'influencer',
            niche: { $in: [requiredNiche] },
            followerCount: { $gte: minFollowers || 0 },
        }).select('-password'); // Exclude password from result

        res.json(matches);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
