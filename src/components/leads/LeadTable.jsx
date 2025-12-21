import LeadRow from "./LeadRow";

const LeadTable = ({ leads, updateStatus, deleteLead }) => {
  if (leads.length === 0) {
    return <p className="text-gray-500">No leads available.</p>;
  }

  return (
    <table className="w-full bg-white rounded shadow">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <LeadRow
            key={lead.id}
            lead={lead}
            updateStatus={updateStatus}
            deleteLead={deleteLead}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
