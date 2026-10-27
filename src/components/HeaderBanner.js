import React from 'react';

/**
 * HeaderBanner Component
 * Clean white aesthetic header banner with movie camera animation
 */
function HeaderBanner() {
  return (
    <div className="header-banner">
      <div className="banner-background">
        <div className="floating-icons">
          <span className="icon icon-1">🎬</span>
          <span className="icon icon-2">🎭</span>
          <span className="icon icon-3">📽️</span>
          <span className="icon icon-4">🍿</span>
          <span className="icon icon-5">⭐</span>
          <span className="icon icon-6">🎪</span>
        </div>
      </div>
      
      <div className="banner-content">
        <div className="banner-icon">
          <div className="camera-body">🎬</div>
          <div className="camera-lens"></div>
        </div>
        
        <div className="banner-text">
          <h1 className="banner-title">
            <span className="title-main">Movie Review</span>
            <span className="title-sub">Platform</span>
          </h1>
          <p className="banner-subtitle">
            DevOps & Kubernetes Microservices Demo
          </p>
          <div className="banner-tags">
            <span className="tag">🚀 Docker</span>
            <span className="tag">☸️ Kubernetes</span>
            <span className="tag">🤖 AI Analysis</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-banner {
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          margin-bottom: 2rem;
          padding: 3rem 2rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .banner-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .floating-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .icon {
          position: absolute;
          font-size: 2rem;
          opacity: 0.15;
          animation: float 6s ease-in-out infinite;
        }

        .icon-1 { top: 10%; left: 10%; animation-delay: 0s; }
        .icon-2 { top: 20%; right: 15%; animation-delay: 1s; }
        .icon-3 { bottom: 30%; left: 20%; animation-delay: 2s; }
        .icon-4 { bottom: 20%; right: 10%; animation-delay: 3s; }
        .icon-5 { top: 50%; left: 5%; animation-delay: 4s; }
        .icon-6 { top: 30%; right: 5%; animation-delay: 5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .banner-content {
          position: relative;
          display: flex;
          align-items: center;
          gap: 2rem;
          z-index: 2;
        }

        .banner-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .camera-body {
          font-size: 4rem;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
          animation: pulse 2s ease-in-out infinite;
        }

        .camera-lens {
          position: absolute;
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, rgba(148, 163, 184, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: lens-flare 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes lens-flare {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .banner-text {
          flex: 1;
          color: #0f172a;
        }

        .banner-title {
          margin: 0 0 0.5rem 0;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .title-main {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-sub {
          font-size: 2rem;
          font-weight: 400;
          color: #475569;
          margin-left: 0.5rem;
        }

        .banner-subtitle {
          font-size: 1.1rem;
          margin: 0 0 1.5rem 0;
          color: #64748b;
          font-weight: 400;
        }

        .banner-tags {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tag {
          background: #ffffff;
          color: #334155;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid #cbd5e1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .header-banner {
            padding: 2rem 1rem;
          }
          
          .banner-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          
          .title-main {
            font-size: 2.5rem;
          }
          
          .title-sub {
            font-size: 1.5rem;
            margin-left: 0;
          }
          
          .camera-body {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
}

export default HeaderBanner;
