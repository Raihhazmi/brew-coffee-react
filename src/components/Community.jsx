import { useState } from 'react'
import './Community.css'

const Community = () => {
  const [activeTab, setActiveTab] = useState('gallery')

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=400&fit=crop', alt: 'Customer enjoying coffee' },
    { src: 'https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?w=400&h=400&fit=crop', alt: 'Latte art' },
    { src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=400&fit=crop', alt: 'Cafe interior' },
    { src: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400&h=400&fit=crop', alt: 'Coffee beans' },
    { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop', alt: 'Brewing coffee' },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop', alt: 'Coffee cup' }
  ]

  const reviews = [
    {
      name: 'Rizky A.',
      avatar: '👨',
      rating: 5,
      text: 'Tempatnya cozy banget! Cocok buat WFC. Kopi Mighty B-Sugar nya juara! ⭐',
      date: '2 hari lalu'
    },
    {
      name: 'Sarah M.',
      avatar: '👩',
      rating: 5,
      text: 'Wagyu Creamy Truffle-nya enak parah! Worth the price. Bakal balik lagi!',
      date: '1 minggu lalu'
    },
    {
      name: 'Dimas P.',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Suasana industrial-nya keren. WiFi kenceng, perfect buat kerja remote.',
      date: '2 minggu lalu'
    },
    {
      name: 'Anisa R.',
      avatar: '👩‍🦰',
      rating: 4,
      text: 'Strawberry Cheese-nya recommended! Pelayanannya ramah. Love it! 💕',
      date: '3 minggu lalu'
    }
  ]

  const events = [
    {
      title: 'Coffee Cupping Session',
      date: 'Every Saturday',
      time: '14:00 - 16:00',
      desc: 'Belajar mencicipi dan membedakan berbagai jenis kopi',
      icon: '☕'
    },
    {
      title: 'Live Acoustic Night',
      date: 'Every Friday',
      time: '19:00 - 21:00',
      desc: 'Nikmati live music sambil menyeruput kopi favorit',
      icon: '🎸'
    },
    {
      title: 'Barista Workshop',
      date: 'Monthly',
      time: 'By Registration',
      desc: 'Pelajari teknik brewing dari barista profesional',
      icon: '👨‍🍳'
    }
  ]

  return (
    <section className="community-section" id="community">
      <div className="community-container">
        {/* Header */}
        <div className="community-header">
          <span className="community-badge">🤝 Join Our Community</span>
          <h2 className="community-title">Be Part of <span>Brew Family</span></h2>
          <p className="community-subtitle">
            Lebih dari sekadar tempat ngopi - kami adalah komunitas pecinta kopi yang terus berkembang
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="community-tabs">
          <button 
            className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <span>📸</span> Gallery
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <span>⭐</span> Reviews
          </button>
          <button 
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <span>🎉</span> Events
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="gallery-grid">
              {galleryImages.map((img, index) => (
                <div key={index} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img src={img.src} alt={img.alt} />
                  <div className="gallery-overlay">
                    <span className="overlay-icon">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="reviews-section">
              <div className="rating-summary">
                <div className="rating-big">
                  <span className="rating-number">4.8</span>
                  <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                  <span className="rating-text">Google Rating</span>
                </div>
              </div>
              <div className="reviews-grid">
                {reviews.map((review, index) => (
                  <div key={index} className="review-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="review-header">
                      <span className="review-avatar">{review.avatar}</span>
                      <div className="review-info">
                        <h4>{review.name}</h4>
                        <div className="review-stars">
                          {'⭐'.repeat(review.rating)}
                        </div>
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="events-grid">
              {events.map((event, index) => (
                <div key={index} className="event-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="event-icon">{event.icon}</div>
                  <div className="event-content">
                    <h4 className="event-title">{event.title}</h4>
                    <div className="event-schedule">
                      <span className="event-date">📅 {event.date}</span>
                      <span className="event-time">🕐 {event.time}</span>
                    </div>
                    <p className="event-desc">{event.desc}</p>
                    <button className="event-btn">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social CTA */}
        <div className="social-cta">
          <div className="social-content">
            <h3>Follow Us on Social Media!</h3>
            <p>Dapatkan update terbaru, promo spesial, dan behind the scenes</p>
          </div>
          <div className="social-buttons">
            <a href="#" className="social-btn instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="#" className="social-btn whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
