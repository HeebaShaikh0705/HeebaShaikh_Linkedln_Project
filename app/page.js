'use client'

import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'like' }),
      })
      
      if (response.ok) {
        setLikeCount(prev => prev + 1)
        setIsLiked(true)
        console.log('Like sent to backend successfully!')
      }
    } catch (error) {
      console.error('Error sending like:', error)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'LinkedIn Clone',
        text: 'Check out this LinkedIn clone!',
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div>
      <Header />
      
      <main className="main-content">
        <div className="container">
          <div className="content-section">
            <h1>Welcome to LinkedIn Clone</h1>
            <p>
              This is a simple LinkedIn-like webpage built with Next.js. 
              Connect with professionals, share your thoughts, and grow your network.
            </p>
          </div>

          <div className="content-section">
            <h2>Featured Content</h2>
            
            {/* LinkedIn-style post layout */}
            <div className="linkedin-post">
              {/* Main big image */}
              <div className="main-image">
                <img 
                  src="/images/presentation.jpg" 
                  alt="Leveraging Technology in Real Estate Services - Professional presentation"
                  className="post-image-main"
                />
                <div className="image-overlay">
                  <h3>Leveraging Technology in Real Estate Services</h3>
                  <p>WHAT NEXT - 14 SEPT 2023</p>
                </div>
              </div>
              
              {/* 3 smaller images below */}
              <div className="small-images-grid">
                <div className="small-image-item">
                  <img 
                    src="/images/small2.jpg" 
                    alt="Professional networking"
                    className="post-image-small"
                  />
                </div>
                <div className="small-image-item">
                  <img 
                    src="/images/small3.jpg" 
                    alt="Career opportunities"
                    className="post-image-small"
                  />
                </div>
                <div className="small-image-item">
                  <img 
                    src="/images/small4.jpg" 
                    alt="Industry insights"
                    className="post-image-small"
                  />
                </div>
              </div>
            </div>

            <div className="button-group">
              <button 
                className={`btn btn-like ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
                disabled={isLiked}
              >
                {isLiked ? '✓ Liked' : '👍 Like'} ({likeCount})
              </button>
              <button className="btn btn-share" onClick={handleShare}>
                📤 Share
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
