import { useParams, Link } from 'react-router-dom'
import blogPosts from '../data/posts'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.id === slug)

  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post not found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">Back to Blog</Link>
      </div>
    )
  }

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

  // Simple markdown-like rendering
  function renderContent(content) {
    const lines = content.trim().split('\n')
    const elements = []
    let currentList = []
    let listKey = 0

    function flushList() {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`}>
            {currentList.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )
        currentList = []
      }
    }

    lines.forEach((line, i) => {
      const trimmed = line.trim()

      if (trimmed.startsWith('## ')) {
        flushList()
        elements.push(<h2 key={i}>{trimmed.replace('## ', '')}</h2>)
      } else if (trimmed.startsWith('### ')) {
        flushList()
        elements.push(<h3 key={i}>{trimmed.replace('### ', '')}</h3>)
      } else if (trimmed.startsWith('- **')) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*\s*(.*)$/)
        if (match) {
          currentList.push(<><strong>{match[1]}</strong> {match[2]}</>)
        } else {
          currentList.push(trimmed.replace(/^- /, ''))
        }
      } else if (trimmed.startsWith('- ')) {
        currentList.push(trimmed.replace(/^- /, ''))
      } else if (/^\d+\.\s/.test(trimmed)) {
        flushList()
        const match = trimmed.match(/^\d+\.\s\*\*(.+?)\*\*\s*[—–-]\s*(.+)$/)
        if (match) {
          elements.push(<p key={i} className="numbered-step"><strong>{match[1]}</strong> — {match[2]}</p>)
        } else {
          elements.push(<p key={i}>{trimmed}</p>)
        }
      } else if (trimmed === '') {
        flushList()
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        flushList()
        elements.push(<p key={i}><strong>{trimmed.replace(/\*\*/g, '')}</strong></p>)
      } else if (trimmed) {
        flushList()
        // Handle inline bold
        const parts = trimmed.split(/\*\*(.+?)\*\*/g)
        if (parts.length > 1) {
          elements.push(
            <p key={i}>
              {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
            </p>
          )
        } else {
          elements.push(<p key={i}>{trimmed}</p>)
        }
      }
    })

    flushList()
    return elements
  }

  // Related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2)

  return (
    <div className="blog-post-page">
      {/* Post Header */}
      <header className="post-header">
        <div className="post-header-inner">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>

          <span
            className="category-pill"
            style={{
              background: categoryColors[post.category]?.bg || '#f0f0f0',
              color: categoryColors[post.category]?.color || '#333'
            }}
          >
            {post.category}
          </span>

          <h1>{post.title}</h1>

          <div className="post-meta-bar">
            <span className="meta-author">{post.author}</span>
            <span className="meta-dot" />
            <span>{formatDate(post.date)}</span>
            <span className="meta-dot" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <article className="post-content">
        <div className="post-content-inner">
          {renderContent(post.content)}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-section">
          <div className="related-inner">
            <h2>Related Posts</h2>
            <div className="related-grid">
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/post/${rp.id}`} className="related-card">
                  <span
                    className="category-pill small"
                    style={{
                      background: categoryColors[rp.category]?.bg || '#f0f0f0',
                      color: categoryColors[rp.category]?.color || '#333'
                    }}
                  >
                    {rp.category}
                  </span>
                  <h3>{rp.title}</h3>
                  <p>{rp.excerpt}</p>
                  <span className="related-meta">{formatDate(rp.date)} &middot; {rp.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
