import { useState } from "react";

const LeadForm = ({ addLead }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    addLead({
      id: Date.now(),
      name,
      email,
      status: "New",
    });

    setName("");
    setEmail("");
  };

  return (
    <form className="bg-white p-4 rounded shadow mb-6" onSubmit={handleSubmit}>
      <h3 className="font-bold mb-3">Add Lead</h3>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Lead
      </button>
    </form>
  );
};

export default LeadForm;
