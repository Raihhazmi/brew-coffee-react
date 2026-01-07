import './Story.css'

const Story = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Grand Opening',
      desc: 'Brew Coffee Space resmi dibuka di Jl. Mawar No.4-6, Banjarbaru',
      icon: '🎉'
    },
    {
      year: '2024',
      title: 'Menu Innovation',
      desc: 'Meluncurkan 15+ Signature Drinks dan Rice Bowl Series',
      icon: '☕'
    },
    {
      year: '2024',
      title: 'Community Love',
      desc: 'Mencapai rating 4.8 di Google Review dari pelanggan setia',
      icon: '⭐'
    },
    {
      year: 'Now',
      title: 'Growing Together',
      desc: 'Terus berkembang menjadi tempat favorit di Banjarbaru',
      icon: '🚀'
    }
  ]

  const values = [
    {
      icon: '❤️',
      title: 'Passion',
      desc: 'Setiap cangkir dibuat dengan cinta dan dedikasi penuh'
    },
    {
      icon: '🌱',
      title: 'Quality',
      desc: 'Bahan berkualitas tinggi untuk hasil terbaik'
    },
    {
      icon: '🤝',
      title: 'Community',
      desc: 'Membangun komunitas pecinta kopi yang solid'
    }
  ]

  return (
    <section className="story-section" id="story">
      <div className="story-bg">
        <div className="story-pattern"></div>
      </div>

      <div className="story-container">
        {/* Header */}
        <div className="story-header">
          <span className="story-badge">📖 Our Story</span>
          <h2 className="story-title">The Journey of <span>Brew Coffee Space</span></h2>
          <p className="story-subtitle">
            Dari mimpi sederhana menjadi tempat nongkrong favorit di Banjarbaru
          </p>
        </div>

        {/* Main Content */}
        <div className="story-content">
          {/* Left - Story Text */}
          <div className="story-text">
            <div className="story-block">
              <h3>Awal Mula</h3>
              <p>
                Brew Coffee Space lahir dari passion kami terhadap kopi dan keinginan untuk 
                menciptakan <strong>tempat nongkrong yang berbeda</strong> di Banjarbaru. 
                Dengan konsep <strong>Industrial & Cozy</strong>, kami ingin menghadirkan 
                pengalaman ngopi yang unik dan memorable.
              </p>
            </div>

            <div className="story-block">
              <h3>Filosofi Kami</h3>
              <p>
                Kami percaya bahwa kopi bukan sekadar minuman, tapi sebuah <strong>pengalaman</strong>. 
                Setiap cangkir yang kami sajikan dibuat dengan hati, menggunakan biji kopi pilihan 
                dan teknik brewing terbaik. Tagline kami, <em>"Temukan Kopi Favoritmu di Sini"</em>, 
                mencerminkan komitmen kami untuk menyediakan berbagai pilihan kopi untuk setiap selera.
              </p>
            </div>

            <div className="story-block">
              <h3>Lebih Dari Sekedar Kafe</h3>
              <p>
                Brew Coffee Space dirancang sebagai <strong>third place</strong> - tempat selain 
                rumah dan kantor di mana kamu bisa merasa nyaman. Baik untuk <strong>Work From Cafe</strong>, 
                meeting dengan klien, atau sekadar <strong>healing</strong> dari kesibukan, 
                kami siap menemanimu.
              </p>
            </div>

            {/* Values */}
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <span className="value-icon">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="story-timeline">
            <h3 className="timeline-title">Our Milestones</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="marker-icon">{item.icon}</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="story-quote">
              <span className="quote-icon">"</span>
              <p>Setiap cangkir kopi punya cerita. Kami di sini untuk membuatnya spesial untukmu.</p>
              <span className="quote-author">— Brew Coffee Space Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
