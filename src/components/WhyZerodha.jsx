
const features = [
  {
    title: "No hidden charges",
    description: "Transparent pricing with clear charges."
  },
  {
    title: "Easy to use",
    description: "Simple and user-friendly investment platform."
  },
  {
    title: "Technology driven",
    description: "Modern tools for a smooth investing experience."
  }
];

function WhyZerodha() {
  return (
    <section className="why-section" id="about">

      <h2>Why choose Zerodha?</h2>

      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyZerodha;
