
const products = [
  {
    name: "Stocks",
    description: "Invest in companies listed on Indian stock exchanges.",
    icon: "📈"
  },
  {
    name: "Mutual Funds",
    description: "Invest in mutual funds and build long-term wealth.",
    icon: "💰"
  },
  {
    name: "Futures & Options",
    description: "Explore derivatives trading in the stock market.",
    icon: "📊"
  },
  {
    name: "IPO",
    description: "Explore upcoming and ongoing public issues.",
    icon: "🏢"
  },
  {
    name: "Bonds",
    description: "Explore fixed-income investment opportunities.",
    icon: "📃"
  },
  {
    name: "ETFs",
    description: "Explore exchange-traded funds.",
    icon: "📉"
  }
];

function Products() {
  return (
    <section className="products" id="products">

      <h2>Investment options</h2>

      <p className="section-subtitle">
        Everything you need to invest in one place.
      </p>

      <div className="product-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <div className="product-icon">
              {product.icon}
            </div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Products;
