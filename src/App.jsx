import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import TermsOfUse from './pages/TermsOfUse'
import WatchVideo from './pages/WatchVideo'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/faq" element={<Layout><FAQ /></Layout>} />
      <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
      <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
      <Route path="/terms-of-use" element={<Layout><TermsOfUse /></Layout>} />
      <Route path="/watch/:videoId" element={<WatchVideo />} />
      <Route path="/u/:username" element={<UserProfile />} />
    </Routes>
  )
}

export default App
