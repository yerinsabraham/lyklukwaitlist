import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogHome from './pages/BlogHome'
import BlogPost from './pages/BlogPost'
import './App.css'

function App() {
  return (
    <div className="blog-shell">
      <Header />
      <main className="blog-main">
        <Routes>
          <Route path="/" element={<BlogHome />} />
          <Route path="/post/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
