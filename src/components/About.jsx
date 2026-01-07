import './About.css'

const About = () => {
  const features = [
    {
      icon: '🏭',
      title: 'Industrial Vibes',
      desc: 'Desain interior industrial yang modern dan nyaman'
    },
    {
      icon: '💻',
      title: 'Work From Cafe',
      desc: 'Tempat ideal untuk bekerja dengan WiFi cepat'
    },
    {
      icon: '☕',
      title: 'Premium Coffee',
      desc: 'Kopi otentik dengan 15+ signature drinks'
    },
    {
      icon: '🛋️',
      title: 'Cozy Atmosphere',
      desc: 'Suasana nyaman untuk healing atau hangout'
    }
  ]

  const stats = [
    { number: '15+', label: 'Signature Drinks' },
    { number: '4.8', label: 'Google Rating' },
    { number: '30+', label: 'Menu Items' },
    { number: '13.5', label: 'Hours Open Daily' }
  ]

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left - Image Gallery */}
        <div className="about-gallery">
          <div className="gallery-main">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=700&fit=crop" 
              alt="Brew Coffee Space Interior" 
            />
            <div className="gallery-badge">
              <span className="badge-icon">🆕</span>
              <span>New Opening!</span>
            </div>
          </div>
          <div className="gallery-side">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=300&h=200&fit=crop" 
                alt="Coffee Making" 
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop" 
                alt="Cafe Atmosphere" 
              />
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="about-content">
          <span className="about-badge">☕ About Us</span>
          <h2 className="about-title">
            Temukan Kopi <span className="highlight">Favoritmu</span> di Sini
          </h2>
          <p className="about-desc">
            <strong>Brew Coffee Space</strong> adalah tempat nongkrong paling asik di Banjarbaru 
            dengan nuansa <strong>Industrial & Cozy</strong>. Kami menyajikan kopi otentik dengan 
            berbagai pilihan menu yang cocok untuk menemani aktivitasmu, baik itu <strong>Work From Cafe</strong> 
            atau sekadar <strong>healing</strong> sejenak dari rutinitas.
          </p>
          <p className="about-desc secondary">
            Dengan rating <strong>4.8 di Google Review</strong> dan lebih dari <strong>15+ Signature Drinks</strong>, 
            kami berkomitmen memberikan pengalaman ngopi terbaik dengan harga yang terjangkau.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{feature.icon}</span>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about-cta">
            <a href="#menu" className="cta-primary">
              <span>Explore Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#lokasi" className="cta-secondary">
              <span>📍 Visit Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
