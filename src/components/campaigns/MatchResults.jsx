import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../utils/api';

const MatchResults = ({ campaignId }) => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (campaignId && token) {
            setLoading(true);
            api.get(`/match/${campaignId}`)
                .then(res => {
                    setMatches(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [campaignId, token]);

    if (loading) return <p className="text-gray-500 text-sm">Finding matches...</p>;
    if (matches.length === 0) return null;

    return (
        <div className="mt-2 p-2 bg-green-50 rounded border border-green-200">
            <h4 className="font-semibold text-green-700 text-sm mb-2">Smart Matches ({matches.length})</h4>
            <ul className="space-y-1">
                {matches.map(influencer => (
                    <li key={influencer._id} className="text-sm flex justify-between">
                        <span>{influencer.name}</span>
                        <span className="text-gray-500">{influencer.followerCount} followers</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchResults;
