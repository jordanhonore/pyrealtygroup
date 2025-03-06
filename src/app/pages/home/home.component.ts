import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Find Your Perfect Commercial Property</h1>
        <p>Search thousands of commercial properties for sale, lease, or auction</p>
        
        <div class="search-container">
          <div class="search-tabs">
            <button 
              [class.active]="searchType === 'sale'" 
              (click)="searchType = 'sale'">
              For Sale
            </button>
            <button 
              [class.active]="searchType === 'lease'" 
              (click)="searchType = 'lease'">
              For Lease
            </button>
            <button 
              [class.active]="searchType === 'auction'" 
              (click)="searchType = 'auction'">
              Auction
            </button>
          </div>

          <div class="search-box">
            <div class="search-input-group">
              <input 
                type="text" 
                [(ngModel)]="searchQuery" 
                placeholder="Search by location or property type..."
                (keyup.enter)="onSearch()"
              >
            </div>

            <div class="search-filters">
              <select [(ngModel)]="propertyType">
                <option value="">All Property Types</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
                <option value="industrial">Industrial</option>
                <option value="multifamily">Multifamily</option>
                <option value="land">Land</option>
              </select>

              <select [(ngModel)]="priceRange">
                <option value="">Any Price</option>
                <option value="0-1000000">Up to $1M</option>
                <option value="1000000-5000000">$1M - $5M</option>
                <option value="5000000-10000000">$5M - $10M</option>
                <option value="10000000+">$10M+</option>
              </select>

              <select [(ngModel)]="propertySize">
                <option value="">Any Size</option>
                <option value="0-2500">Up to 2,500 SF</option>
                <option value="2500-5000">2,500 - 5,000 SF</option>
                <option value="5000-10000">5,000 - 10,000 SF</option>
                <option value="10000+">10,000+ SF</option>
              </select>
            </div>

            <button class="search-button" (click)="onSearch()">
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-properties">
      <div class="container">
        <h2>Featured Properties</h2>
        <div class="property-grid">
          <!-- Property cards will be added here -->
        </div>
      </div>
    </section>

    <section class="market-insights">
      <h2>Market Insights</h2>
      <div class="insights-grid">
        <div class="insight-card">
          <h3>Office Market Report</h3>
          <p>Latest trends and analysis in the office sector</p>
          <a href="#">Read More →</a>
        </div>
        <div class="insight-card">
          <h3>Retail Market Report</h3>
          <p>Current state of retail real estate market</p>
          <a href="#">Read More →</a>
        </div>
        <div class="insight-card">
          <h3>Industrial Market Report</h3>
          <p>Growth and opportunities in industrial properties</p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use 'sass:color';
    
    .hero-section {
      position: relative;
      height: 600px;
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/assets/images/building3.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      padding-top: 80px; /* Add padding for the fixed header */
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;

      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 2.5rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
      }
    }

    .search-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      max-width: 900px;
      margin: 0 auto;
    }

    .search-tabs {
      display: flex;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;

      button {
        flex: 1;
        padding: 1rem;
        border: none;
        background: none;
        font-weight: 500;
        color: var(--secondary-color);
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background: #f1f3f5;
        }

        &.active {
          background: white;
          color: var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
        }
      }
    }

    .search-box {
      padding: 1.5rem;
    }

    .search-input-group {
      position: relative;
      margin-bottom: 1rem;

      input {
        width: 100%;
        padding: 1rem;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(198, 156, 109, 0.25);
        }
      }
    }

    .search-filters {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-bottom: 1rem;

      select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        background-color: white;
        font-size: 0.875rem;
        color: var(--secondary-color);

        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(198, 156, 109, 0.25);
        }
      }
    }

    .search-button {
      width: 100%;
      padding: 1rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: color.adjust(#C69C6D, $lightness: -10%);
      }
    }

    .featured-properties {
      padding: 4rem 0;
      background-color: #f8f9fa;

      h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--dark-color);
        font-size: 2rem;
        font-weight: 600;
      }

      .property-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 0 1rem;
      }
    }

    .market-insights {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;

      h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #2a2a2a;
      }
    }

    .insights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .insight-card {
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      h3 {
        margin-bottom: 1rem;
        color: #2a2a2a;
      }

      p {
        color: #666;
        margin-bottom: 1rem;
      }

      a {
        color: #007bff;
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        height: auto;
        min-height: 600px;
      }

      .hero-content h1 {
        font-size: 2.5rem;
      }

      .search-filters {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  searchQuery = '';
  searchType = 'sale';
  propertyType = '';
  priceRange = '';
  propertySize = '';

  onSearch() {
    console.log('Searching with params:', {
      query: this.searchQuery,
      type: this.searchType,
      propertyType: this.propertyType,
      priceRange: this.priceRange,
      propertySize: this.propertySize
    });
    // Implement search functionality
  }
} 