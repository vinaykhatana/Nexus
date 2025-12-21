const StatCards = () => {
  const stats = [
    { title: "Total Campaigns", value: 6 },
    { title: "Total Leads", value: 145 },
    { title: "Active Products", value: 9 },
    { title: "Conversions", value: 32 },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow text-center"
        >
          <p className="text-gray-500">{item.title}</p>
          <h2 className="text-2xl font-bold">{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
