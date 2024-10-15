// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

"use client"
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';


export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div className="app-container">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1 className="logo">APPAREL FINDER</h1>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#">Discover</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Find Your Style Nearby</h2>
            <p className="hero-subtitle">Discover and shop the latest apparel from local stores in your area.</p>
            
          

            <div className="search-container">
            <Link href="/search">
              <input
                type="text"
                placeholder="jacket"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              /> 
         
                
            </Link>
              <div className="location-indicator">
                <MapPin size={18} />
                <span>Berlin 10117</span>
              </div>
            </div>
          </div>
        </section>


      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Connecting fashion enthusiasts with local stores for a seamless shopping experience.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">For Brands</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Stay Connected</h4>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button type="submit" className="newsletter-submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Global Styles */
        :root {
          --primary-color: #1a1a1a;
          --secondary-color: #f4f1ec;
          --accent-color: #e6c9a8;
          --text-color: #1a1a1a;
          --background-color: #ffffff;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          background-color: var(--background-color);
        }

        .app-container {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Header Styles */
        .header {
          position: fixed;
          width: 100%;
          z-index: 1000;
          transition: background-color 0.3s ease;
        }

        .header.scrolled {
          background-color: var(--background-color);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        .logo {
          font-size: 1.2rem;
          font-weight: bold;
          letter-spacing: -0.5px;
        }

        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
        }

        .main-nav {
          display: none;
        }

        .main-nav.open {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--background-color);
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .main-nav ul {
          list-style: none;
        }

        .main-nav li {
          margin-bottom: 0.5rem;
        }

        .main-nav a {
          text-decoration: none;
          color: var(--text-color);
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .main-nav a:hover {
          color: var(--accent-color);
        }

        /* Hero Section Styles */
        .hero {
          height: 100vh;
          background-image: url('https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          padding: 0 1rem;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .search-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-input {
          width: 100%;
          padding: 1rem 3rem 1rem 1rem;
          border: none;
          border-radius: 50px;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1rem;
          backdrop-filter: blur(10px);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .location-indicator {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
        }

        .location-indicator svg {
          margin-right: 0.5rem;
        }

        /* Trending Section Styles */
        .trending {
          padding: 3rem 1rem;
        }

        .section-title {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .trending-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        .trending-item {
          position: relative;
          overflow: hidden;
        }

        .trending-image-container {
          position: relative;
          padding-top: 133.33%; /* 3:4 aspect ratio */
          overflow: hidden;
        }

        .trending-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .trending-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .trending-item:hover .trending-image {
          transform: scale(1.05);
        }

        .trending-item:hover .trending-overlay {
          opacity: 1;
        }

        .shop-now-btn {
          background-color: white;
          color: var(--primary-color);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .shop-now-btn:hover {
          background-color: var(--accent-color);
        }

        .shop-now-btn svg {
          margin-left: 0.5rem;
        }

        .trending-details {
          margin-top: 1rem;
        }

        .product-name {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }

        .brand-name {
          font-size: 0.9rem;
          color: #666;
        }

        /* Footer Styles */
        .footer {
          background-color: var(--primary-color);
          color: white;
          padding: 3rem 1rem;
        }

        .footer-content {
          display: grid;
          gap: 2rem;
        }

        .footer-section h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .footer-section p {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section li {
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: var(--accent-color);
        }

        .newsletter-form {
          display: flex;
          margin-top: 1rem;
        }

        .newsletter-input {
          flex-grow: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 4px 0 0 4px;
        }

        .newsletter-submit {
          background-color: var(--accent-color);
          color: var(--primary-color);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .newsletter-submit:hover {
          background-color: #d4b28e;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .header-content {
            padding: 1rem 2rem;
          }

          .menu-toggle {
            display: none;
          }

          .main-nav {
            display: block;
          }

          .main-nav ul {
            display: flex;
          }

          .main-nav li {
            margin-left: 2rem;
            margin-bottom: 0;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .trending {
            padding: 5rem 2rem;
          }

          .footer-content {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }

          .trending-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}