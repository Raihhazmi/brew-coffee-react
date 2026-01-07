import './DailyDeal.css'

const DailyDeal = () => {
  return (
    <section className="daily-deal">
      <div className="deal-container">
        <div className="deal-header">
          <span className="deal-badge">🔥 Limited Time</span>
          <h2 className="deal-title">Daily Deal</h2>
        </div>

        <div className="deal-cards">
          <div className="deal-card deal-promo">
            <div className="promo-content">
              <div className="promo-tag">Special Offer</div>
              <h3 className="promo-title">Get 1 FREE Coffee</h3>
              <p className="promo-desc">Buy 2 signature drinks and get 1 free on your next visit!</p>
              <button className="promo-btn">Claim Offer</button>
            </div>
            <div className="promo-image">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop" alt="Coffee Deal" />
            </div>
          </div>

          <div className="deal-card deal-feature">
            <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop" alt="Featured Coffee" className="feature-image" />
          </div>

          <div className="deal-card deal-discount">
            <div className="discount-badge">
              <span className="discount-percent">50%</span>
              <span className="discount-text">OFF</span>
            </div>
            <p className="discount-desc">On all pastries after 5PM</p>
            <span className="discount-code">Use: EVENING50</span>
          </div>
        </div>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Newsletter Sign Up</h3>
            <p className="newsletter-desc">Get exclusive deals and updates directly to your inbox</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailyDeal
