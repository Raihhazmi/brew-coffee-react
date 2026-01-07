import { useState } from 'react'
import './MenuSection.css'

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Menu', icon: '🍽️' },
    { id: 'coffee', name: 'Signature Coffee', icon: '☕' },
    { id: 'milky', name: 'Milky Way', icon: '🥛' },
    { id: 'fruit', name: 'Fruit Drinks', icon: '🍹' },
    { id: 'rice', name: 'Rice Bowls', icon: '🍚' },
    { id: 'snacks', name: 'Snacks', icon: '🍿' },
  ]

  const menuData = {
    coffee: {
      title: 'Signature Coffee',
      subtitle: 'Iced / Hot Available',
      icon: '☕',
      color: '#8B5E3C',
      items: [
        { name: 'Brown Sugar (EsKosu)', price: '20K', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop' },
        { name: 'Brewed Latte', price: '20K', tag: 'Non-Sugar', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop' },
        { name: 'Naughty Brew', price: '20K', tag: 'Ice Only', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=300&h=300&fit=crop' },
        { name: 'Salted Caramel', price: '21K', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop' },
        { name: "Brew's Signature", price: '21K', tag: 'Popular', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop' },
        { name: 'Mighty B-Sugar', price: '24K', tag: 'Best Seller', highlight: true, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=300&fit=crop' },
      ]
    },
    milky: {
      title: 'Milky Way',
      subtitle: 'Non-Coffee Drinks',
      icon: '🥛',
      color: '#E8A4C9',
      items: [
        { name: 'Choco Bourbon', price: '21K', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&h=300&fit=crop' },
        { name: 'Choco & Nut', price: '21K', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=300&h=300&fit=crop' },
        { name: 'Matcha', price: '21K', tag: 'Jepang', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop' },
        { name: 'Purple Taro', price: '21K', image: 'https://images.unsplash.com/photo-1625865285185-7a0a813e0e17?w=300&h=300&fit=crop' },
        { name: 'Red Velvet', price: '21K', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=300&fit=crop' },
        { name: 'Korean Strawberry', price: '21K', tag: 'Korea', image: 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=300&h=300&fit=crop' },
        { name: 'Strawberry Cheese', price: '21K', tag: 'Popular', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop' },
      ]
    },
    fruit: {
      title: 'Fruit Drinks',
      subtitle: 'Tea / Sparkling',
      icon: '🍹',
      color: '#FF9F43',
      items: [
        { name: 'Strawberry', price: '21K', image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&h=300&fit=crop' },
        { name: 'Peach', price: '21K', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
        { name: 'Mango', price: '21K', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300&h=300&fit=crop' },
        { name: 'Lychee', price: '21K', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=300&h=300&fit=crop' },
      ]
    },
    rice: {
      title: 'Rice Bowls',
      subtitle: 'Makanan Berat',
      icon: '🍚',
      color: '#E74C3C',
      items: [
        { name: 'Chicken BBQ', price: '24K', category: 'Chicken Series', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=300&fit=crop' },
        { name: 'Chicken Creamy Truffle', price: '24K', category: 'Chicken Series', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop' },
        { name: 'Chicken Mentai', price: '24K', category: 'Chicken Series', image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=300&h=300&fit=crop' },
        { name: 'Chicken Sambal Geprek', price: '24K', category: 'Chicken Series', image: 'https://images.unsplash.com/photo-1626645738196-c2a72c7d3c51?w=300&h=300&fit=crop' },
        { name: 'Chicken Nanban', price: '24K', category: 'Chicken Series', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop' },
        { name: 'Ayam Sosu Kemangi', price: '22K', tag: 'Special', category: 'Chicken Series', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=300&fit=crop' },
        { name: 'Authentic Wagyu Sauce', price: '32K', category: 'Wagyu Series', highlight: true, image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=300&fit=crop' },
        { name: 'Wagyu Creamy Truffle', price: '32K', tag: "Chef's Reco", category: 'Wagyu Series', highlight: true, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop' },
        { name: 'Authentic Wagyu Mentai', price: '32K', category: 'Wagyu Series', highlight: true, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=300&fit=crop' },
        { name: 'Wagyu Sambal Geprek', price: '32K', category: 'Wagyu Series', highlight: true, image: 'https://images.unsplash.com/photo-1626645738196-c2a72c7d3c51?w=300&h=300&fit=crop' },
      ]
    },
    snacks: {
      title: 'Camilan',
      subtitle: 'Snacks',
      icon: '🍿',
      color: '#F39C12',
      items: [
        { name: 'Churros', price: '17K', image: 'https://images.unsplash.com/photo-1624371414361-e670edf7d8d3?w=300&h=300&fit=crop' },
        { name: 'Bakwan Shabu', price: '17K', image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&h=300&fit=crop' },
        { name: 'Chicken Bites', price: '17K', tag: 'Fave', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop' },
        { name: 'Cireng Pollo', price: '14K', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop' },
        { name: 'Kentang 27', price: '13K', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=300&fit=crop' },
      ]
    }
  }

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.entries(menuData).map(([key, category]) => ({
        ...category,
        key
      }))
    }
    return [{
      ...menuData[activeCategory],
      key: activeCategory
    }]
  }

  return (
    <section className="menu-section" id="menu">
      {/* Background */}
      <div className="menu-bg">
        <div className="menu-bg-pattern"></div>
        <div className="menu-bg-overlay"></div>
      </div>

      <div className="menu-container">
        {/* Header */}
        <div className="menu-header">
          <span className="menu-badge">☕ Full Menu</span>
          <h2 className="menu-title">Our Delicious Menu</h2>
          <p className="menu-desc">Discover our carefully curated selection of beverages and food</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="menu-categories">
          {getFilteredItems().map(category => (
            <div key={category.key} className="menu-category">
              <div className="category-header" style={{ '--cat-color': category.color }}>
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-subtitle">{category.subtitle}</p>
                </div>
              </div>

              <div className="menu-items-grid">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className={`menu-item-card ${item.highlight ? 'highlight' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="item-image-container">
                      <img src={item.image} alt={item.name} className="item-image" />
                      {item.tag && (
                        <span className={`item-tag ${item.tag === 'Best Seller' ? 'bestseller' : ''} ${item.tag === "Chef's Reco" ? 'chef' : ''}`}>
                          {item.tag}
                        </span>
                      )}
                      {item.category && (
                        <span className="item-category-tag">{item.category}</span>
                      )}
                    </div>
                    <div className="item-content">
                      <h4 className="item-name">{item.name}</h4>
                      <div className="item-footer">
                        <span className="item-price">Rp {item.price}</span>
                        <button className="add-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12h14"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
