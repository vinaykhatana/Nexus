const LeadRow = ({ lead, updateStatus, deleteLead }) => {
  return (
    <tr className="border-b">
      <td className="p-2">{lead.name}</td>
      <td className="p-2">{lead.email}</td>
      <td className="p-2">
        <select
          value={lead.status}
          onChange={(e) => updateStatus(lead.id, e.target.value)}
          className="border p-1 rounded"
        >
          <option>New</option>
          <option>Contacted</option>
          <option>Converted</option>
        </select>
      </td>
      <td className="p-2">
        <button
          onClick={() => deleteLead(lead.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default LeadRow;
