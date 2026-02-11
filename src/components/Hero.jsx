import { useState, Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei'
import './Hero.css'

// 3D Coffee Cup Component
function CoffeeCupModel() {
  const { scene } = useGLTF('/coffee-cup.glb')
  const meshRef = useRef()

  // Auto-rotate the model
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <primitive 
        ref={meshRef}
        object={scene} 
        scale={2.5}
        position={[0, -0.5, 0]}
      />
    </Float>
  )
}

// Preload the model
useGLTF.preload('/coffee-cup.glb')

const Hero = () => {
  const [rotatedIcons, setRotatedIcons] = useState({
    coffee: false,
    bean: false,
    cup: false,
    steam: false
  })

  const toggleRotation = (icon) => {
    setRotatedIcons(prev => ({
      ...prev,
      [icon]: !prev[icon]
    }))
  }

  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="bg-gradient"></div>
        <div className="coffee-beans-pattern"></div>
        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>
      </div>

      {/* Floating Interactive Icons */}
      <div className="floating-icons">
        <div 
          className={`floating-icon icon-coffee ${rotatedIcons.coffee ? 'rotated' : ''}`}
          onClick={() => toggleRotation('coffee')}
          title="Click to rotate!"
        >
          ☕
        </div>
        <div 
          className={`floating-icon icon-bean ${rotatedIcons.bean ? 'rotated' : ''}`}
          onClick={() => toggleRotation('bean')}
          title="Click to rotate!"
        >
          🫘
        </div>
        <div 
          className={`floating-icon icon-cup ${rotatedIcons.cup ? 'rotated' : ''}`}
          onClick={() => toggleRotation('cup')}
          title="Click to rotate!"
        >
          🥤
        </div>
        <div 
          className={`floating-icon icon-croissant ${rotatedIcons.steam ? 'rotated' : ''}`}
          onClick={() => toggleRotation('steam')}
          title="Click to rotate!"
        >
          🥐
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <span className="badge-icon">✨</span>
            <span>Premium Coffee Experience</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line slide-in-left">Brewed to</span>
            <span className="title-line title-accent slide-in-right">Perfection,</span>
          </h1>
          
          <p className="hero-subtitle fade-in-up">
            Experience the finest artisanal coffee crafted with passion. 
            Every cup tells a story of carefully selected beans and masterful brewing.
          </p>

          <div className="hero-cta fade-in-up">
            <a href="#menu" className="btn-primary">
              <span>Explore Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#story" className="btn-secondary">
              <span>Our Story</span>
            </a>
          </div>

          <div className="hero-highlights fade-in-up">
            <span className="highlight-pill">⚡ Fresh roasted daily</span>
            <span className="highlight-pill">📶 Fast Wi-Fi for WFC</span>
            <span className="highlight-pill">🌙 Open until 23.30</span>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Coffee Varieties</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Customer Rating</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="coffee-3d-container">
            <div className="cup-glow"></div>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Suspense fallback={null}>
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#DAD887" />
                <spotLight
                  position={[0, 10, 0]}
                  angle={0.3}
                  penumbra={1}
                  intensity={1}
                  castShadow
                />

                {/* 3D Coffee Cup Model */}
                <CoffeeCupModel />

                {/* Environment and Controls */}
                <Environment preset="city" />
                <ContactShadows
                  position={[0, -1.5, 0]}
                  opacity={0.4}
                  scale={10}
                  blur={2}
                  far={4}
                />
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                  autoRotate={false}
                />
              </Suspense>
            </Canvas>
            
            {/* Loading Overlay */}
            <div className="model-loading">
              <div className="loading-spinner"></div>
              <span>Loading 3D Model...</span>
            </div>
          </div>

          {/* Floating Tag */}
          <div className="floating-tag tag-beans">
            <span className="tag-icon">🫘</span>
            <div className="tag-content">
              <span className="tag-title">100% Arabica</span>
              <span className="tag-subtitle">Premium Beans</span>
            </div>
          </div>

          <div className="floating-tag tag-rating">
            <span className="tag-icon">⭐</span>
            <div className="tag-content">
              <span className="tag-title">Best Seller</span>
              <span className="tag-subtitle">This Month</span>
            </div>
          </div>

          <div className="floating-tag tag-3d">
            <span className="tag-icon">🎮</span>
            <div className="tag-content">
              <span className="tag-title">Interactive 3D</span>
              <span className="tag-subtitle">Drag to rotate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero
