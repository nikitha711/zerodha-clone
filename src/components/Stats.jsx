
const stats = [
  {
    number: "1+ Crore",
    label: "Clients"
  },
  {
    number: "10+ Million",
    label: "Orders processed daily"
  },
  {
    number: "₹0",
    label: "Account opening charge"
  }
];

function Stats() {
  return (
    <section className="stats-section">

      <h2>Our platform at a glance</h2>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;
