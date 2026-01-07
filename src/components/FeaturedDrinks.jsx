import { useState } from 'react'
import './FeaturedDrinks.css'

const FeaturedDrinks = () => {
  const drinks = [
    {
      id: 1,
      title: 'Mighty B-Sugar',
      description: 'Our best seller! Rich espresso with brown sugar and creamy milk. A perfect balance of sweet and bold.',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop',
      tag: 'Best Seller',
      price: '24K',
      category: 'Coffee'
    },
    {
      id: 2,
      title: 'Wagyu Creamy Truffle',
      description: 'Premium wagyu beef with luxurious truffle cream sauce. Chef\'s recommendation for meat lovers.',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop',
      tag: "Chef's Reco",
      price: '32K',
      category: 'Rice Bowl'
    },
    {
      id: 3,
      title: 'Strawberry Cheese',
      description: 'Fresh strawberry blended with creamy cheese. A popular non-coffee choice that\'s absolutely delicious.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
      tag: 'Popular',
      price: '21K',
      category: 'Milky Way'
    }
  ]

  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="featured-drinks" id="featured">
      <div className="featured-container">
        <div className="section-header">
          <span className="section-badge">⭐ Customer Favorites</span>
          <h2 className="section-title">Featured Menu</h2>
          <p className="section-desc">
            Discover our most loved items, handpicked from customer favorites 
            and chef's special recommendations.
          </p>
        </div>

        <div className="drinks-grid">
          {drinks.map((drink, index) => (
            <div 
              key={drink.id} 
              className={`drink-card ${hoveredCard === drink.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(drink.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-image-container">
                <img src={drink.image} alt={drink.title} className="card-image" />
                <div className="card-overlay">
                  <span className={`card-tag ${drink.tag === 'Best Seller' ? 'bestseller' : ''} ${drink.tag === "Chef's Reco" ? 'chef' : ''}`}>
                    {drink.tag}
                  </span>
                </div>
                <div className="card-price">
                  <span>Rp</span>
                  <span className="price-value">{drink.price}</span>
                </div>
                <span className="card-category">{drink.category}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{drink.title}</h3>
                <p className="card-desc">{drink.description}</p>
                <button className="card-btn">
                  <span>Order Now</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <a href="#menu" className="view-all-btn">
            <span>View Full Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDrinks
