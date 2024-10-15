"use client"
import React from 'react';
import { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

const products = [
  {
    "product_title": "Wool Blend Trench Coat",
    "price": 199.99,
    "image_link": "https://attirethestudio.com/cdn/shop/files/Photo02_2-4_d5f664c9-4f58-48b9-812a-803e2ce22d9d_800x.jpg?v=1698763708",
    "colour": "Black",
    "sizes": ["S", "M", "L"],
    "store_name": "Zalando Outlet",
    "address": "Köpenicker Str. 20, 10997 Berlin",
    "lat": 52.507541,
    "long": 13.422643
  },
  {
    "product_title": "Wool Blend Trench Coat",
    "price": 199.99,
    "image_link": "https://media.saba.com.au/image/upload/c_fill,f_auto,h_785,q_auto,w_628/v1706137036/media/image/ww22406_black_01.jpg",
    "colour": "Black",
    "sizes": ["S", "M", "L"],
    "store_name": "Zalando Outlet",
    "address": "Köpenicker Str. 20, 10997 Berlin",
    "lat": 52.507541,
    "long": 13.422643
  },
    {
      "product_title": "Wool Trench Coat",
      "price": 199.99,
      "image_link": "https://www.cos.com/static-images/products/assets/001/2c/c4/2cc441e99e2c6146f2b5130ab1c2bc2859bae2b7_xxl-1.jpg?imwidth=1536",
      "colour": "Beige",
      "sizes": ["XS", "S", "M", "L"],
      "store_name": "Zalando Berlin Store",
      "address": "Kaufhaus des Westens, Tauentzienstraße 21-24, 10789 Berlin",
      "lat": 52.5034,
      "long": 13.3404
    },
    {
      "product_title": "Oversized Puffer Jacket",
      "price": 149.99,
      "image_link": "https://cdn-yotpo-images-production.yotpo.com/instagram/96/17877445382966296/medium.jpg",
      "colour": "Black",
      "sizes": ["S", "M", "L", "XL"],
      "store_name": "H&M Berlin",
      "address": "Alexanderplatz 9, 10178 Berlin",
      "lat": 52.5219,
      "long": 13.4132
    },
    {
      "product_title": "Faux Fur Long Coat",
      "price": 179.99,
      "image_link": "https://media2.newlookassets.com/i/newlook/876963027/womens/clothing/coats-jackets/gini-london-dark-brown-faux-fur-long-coat.jpg?strip=true&qlt=50&w=720",
      "colour": "Brown",
      "sizes": ["XS", "M", "L"],
      "store_name": "Urban Outfitters Berlin",
      "address": "Kurfürstendamm 19-24, 10719 Berlin",
      "lat": 52.5027,
      "long": 13.3319
    },
    {
      "product_title": "Double-Breasted Wool Coat",
      "price": 249.99,
      "image_link": "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/6/3/f/63fff66c5c9e6e3d415cdef5a63d2859.jpg",
      "colour": "Navy",
      "sizes": ["M", "L", "XL"],
      "store_name": "COS Store Berlin",
      "address": "Friedrichstraße 83, 10117 Berlin",
      "lat": 52.5195,
      "long": 13.3886
    },
    {
      "product_title": "Classic Parka Coat",
      "price": 139.99,
      "image_link": "https://img01.ztat.net/article/spp-media-p1/b76ba46b0d0d44e98cd883c4e76b2bdc/7675b2886a714ffca4ac44df6343df6a.jpg?imwidth=1800",
      "colour": "Olive Green",
      "sizes": ["S", "M", "L", "XL"],
      "store_name": "The North Face Berlin",
      "address": "Schönhauser Allee 10, 10439 Berlin",
      "lat": 52.5451,
      "long": 13.4135
    },
    {
      "product_title": "Plaid Wool Coat",
      "price": 189.99,
      "image_link": "https://img01.ztat.net/article/spp-media-p1/0313de4189674f8a831dcfa4744ca033/528451f1c16b40ea91015789eac88444.jpg?imwidth=762",
      "colour": "Grey/Black",
      "sizes": ["XS", "S", "M"],
      "store_name": "Bershka Berlin",
      "address": "Tauentzienstraße 16, 10789 Berlin",
      "lat": 52.5031,
      "long": 13.3389
    },
    {
      "product_title": "Leather Biker Jacket",
      "price": 299.99,
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7Od-AiG8jJPe_H3TiMTYkiHrYiyWmXAP_w&s",
      "colour": "Black",
      "sizes": ["M", "L", "XL"],
      "store_name": "AllSaints Berlin",
      "address": "Neue Schönhauser Str. 15, 10178 Berlin",
      "lat": 52.5251,
      "long": 13.4011
    },
    {
      "product_title": "Shearling Lined Coat",
      "price": 279.99,
      "image_link": "https://youandallfashion.com/cdn/shop/products/coj31929-66a_beige_3.jpg?v=1686236972",
      "colour": "Camel",
      "sizes": ["S", "M", "L"],
      "store_name": "Massimo Dutti Berlin",
      "address": "Kurfürstendamm 26A, 10719 Berlin",
      "lat": 52.5030,
      "long": 13.3336
    },
    {
      "product_title": "Quilted Down Jacket",
      "price": 129.99,
      "image_link": "https://image.uniqlo.com/UQ/ST3/jp/imagesother/wave1_5/pufftech-ultra-light-down/24fw/common/img/women/contents-w-01.jpg",
      "colour": "Dark Green",
      "sizes": ["XS", "S", "M", "L"],
      "store_name": "Uniqlo Berlin",
      "address": "Leipziger Platz 16, 10117 Berlin",
      "lat": 52.5090,
      "long": 13.3785
    },
    {
      "product_title": "Hooded Raincoat",
      "price": 99.99,
      "image_link": "https://n.nordstrommedia.com/id/sr3/e3d7b8ee-e2cb-49b2-9080-0c1c6424bae9.jpeg?h=365&w=240&dpr=2",
      "colour": "Yellow",
      "sizes": ["S", "M", "L"],
      "store_name": "Rains Store Berlin",
      "address": "Rosenthaler Str. 47, 10178 Berlin",
      "lat": 52.5286,
      "long": 13.4012
    }
  
];

export default function ProductResults() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColour, setSelectedColour] = useState('');

    const filteredProducts = products.filter((product) => {
        const sizeMatch = selectedSize === '' || product.sizes.includes(selectedSize);
        const colourMatch = selectedColour === '' || product.colour.toLowerCase() === selectedColour.toLowerCase();
        return sizeMatch && colourMatch;
      });
    
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <button className="back-button">
            <ArrowLeft size={24} />
          </button>
          <h1 className="page-title">Search Results</h1>
        </div>
      </header>

      <main className="main-content">
      <div className="filter-section">
        <div className="filter">
          <label htmlFor="size-filter">Filter by Size:</label>
          <select
            id="size-filter"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">All Sizes</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="colour-filter">Filter by Colour:</label>
          <select
            id="colour-filter"
            value={selectedColour}
            onChange={(e) => setSelectedColour(e.target.value)}
          >
            <option value="">All Colours</option>
            <option value="Beige">Beige</option>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="Navy">Navy</option>
            <option value="Green">Green</option>
            <option value="Grey/Black">Grey/Black</option>
            <option value="Camel">Camel</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>
      </div>

      <div className="results-summary">
        <p>Showing {filteredProducts.length} results for "jacket"</p>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-container">
              <img src={product.image_link} alt={product.product_title} className="product-image" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{product.product_title}</h2>
              <p className="product-price">€{product.price.toFixed(2)}</p>
              <p className="product-color">Color: {product.colour}</p>
              <div className="product-sizes">
                {product.sizes.map((size, sizeIndex) => (
                  <span key={sizeIndex} className="size-badge">{size}</span>
                ))}
              </div>
              <div className="store-info">
                <h3 className="store-name">{product.store_name}</h3>
                <p className="store-address">
                  <MapPin size={16} />
                  {product.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>

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
          top: 0;
          left: 0;
          width: 100%;
          background-color: var(--background-color);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .header-content {
          display: flex;
          align-items: center;
          padding: 1rem;
        }

        .back-button {
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 1rem;
        }

        .page-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        /* Main Content Styles */
        .main-content {
          padding: 2rem 1rem 2rem;
        }

        .results-summary {
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: #666;
        }

        .product-grid {
          display: grid;
          gap: 2rem;
        }

        .product-card {
          background-color: var(--background-color);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image-container {
          position: relative;
          padding-top: 133.33%; /* 3:4 aspect ratio */
          overflow: hidden;
        }

        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-details {
          padding: 1rem;
        }

        .product-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-price {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .product-color {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .product-sizes {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .size-badge {
          background-color: var(--secondary-color);
          color: var(--primary-color);
          font-size: 0.8rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .store-info {
          border-top: 1px solid var(--secondary-color);
          padding-top: 1rem;
        }

        .store-name {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        select {
            background: black;
        }

        .store-address {
          font-size: 0.9rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .filter-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          
          .filter {
            margin-right: 20px;
          }
          
          .select-filter {
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }

        /* Responsive Styles */
        @media (min-width: 640px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .main-content {
            padding: 6rem 2rem 3rem;
          }

          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .product-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </div>
  );
}