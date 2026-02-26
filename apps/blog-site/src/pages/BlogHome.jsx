import { useState } from 'react'
import { Link } from 'react-router-dom'
import blogPosts from '../data/posts'
import './BlogHome.css'

const categories = ['All', ...new Set(blogPosts.map(p => p.category))]

export default function BlogHome() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  const featuredPosts = blogPosts.filter(p => p.featured)
  const latestPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'All')

  // Color map for category pills
  const categoryColors = {
    Company: { bg: '#F0E8FF', color: '#6A0DAD' },
    Culture: { bg: '#FFF3E0', color: '#E65100' },
    Product: { bg: '#E8F5E9', color: '#2E7D32' },
    Engineering: { bg: '#E3F2FD', color: '#1565C0' },
  }

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }

  return (
    <div className="blog-home">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <h1>Lykluk Blog</h1>
          <p>Product updates, creator stories, and insights on African culture, commerce, and community.</p>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'All' && featuredPosts.length > 0 && (
        <section className="featured-section">
          <div className="section-inner">
            <h2 className="section-label">Featured</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <Link key={post.id} to={`/post/${post.id}`} className="featured-card">
                  <div className="featured-card-gradient" />
                  <div className="featured-card-content">
                    <span
                      className="category-pill"
                      style={{
                        background: categoryColors[post.category]?.bg || '#f0f0f0',
                        color: categoryColors[post.category]?.color || '#333'
                      }}
                    >
                      {post.category}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                      <span>{formatDate(post.date)}</span>
                      <span className="meta-dot" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="posts-section">
        <div className="section-inner">
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="posts-grid">
            {(activeCategory === 'All' ? filteredPosts : latestPosts).map(post => (
              <Link key={post.id} to={`/post/${post.id}`} className="post-card">
                <div className="post-card-header">
                  <span
                    className="category-pill small"
                    style={{
                      background: categoryColors[post.category]?.bg || '#f0f0f0',
                      color: categoryColors[post.category]?.color || '#333'
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="post-date">{formatDate(post.date)}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="post-author">{post.author}</span>
                  <span className="meta-dot" />
                  <span className="post-read-time">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <p>No posts in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-section">
        <div className="section-inner">
          <div className="newsletter-card">
            <h2>Stay in the loop</h2>
            <p>Join our waitlist and be the first to hear about new features, creator spotlights, and product launches.</p>
            <a className="newsletter-btn" href="https://about.lykluk.com/#waitlist">
              Join the Waitlist
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
