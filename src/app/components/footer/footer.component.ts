import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About PY Realty</h3>
          <p>Your trusted partner in commercial real estate, providing comprehensive solutions for buyers, sellers, and investors.</p>
        </div>
        
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a routerLink="/search" [queryParams]="{type: 'sale'}">Properties for Sale</a></li>
            <li><a routerLink="/search" [queryParams]="{type: 'lease'}">Properties for Lease</a></li>
            <li><a routerLink="/search" [queryParams]="{type: 'auction'}">Auction Properties</a></li>
            <li><a routerLink="/agents">Find Agents</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Property Types</h3>
          <ul>
            <li><a routerLink="/search" [queryParams]="{propertyType: 'office'}">Office</a></li>
            <li><a routerLink="/search" [queryParams]="{propertyType: 'retail'}">Retail</a></li>
            <li><a routerLink="/search" [queryParams]="{propertyType: 'industrial'}">Industrial</a></li>
            <li><a routerLink="/search" [queryParams]="{propertyType: 'multifamily'}">Multifamily</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info&#64;pyrealty.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Real Estate Ave,<br>Business District, NY 10001</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 PY Realty. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--dark-color);
      color: #fff;
      padding: 4rem 2rem 2rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .footer-section {
      h3 {
        color: var(--primary-color);
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
      }

      p {
        color: var(--light-color);
        line-height: 1.6;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.75rem;
          color: var(--light-color);
        }

        a {
          color: var(--light-color);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }

    .footer-bottom {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 2rem;
      border-top: 1px solid var(--secondary-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      p {
        color: var(--light-color);
        margin: 0;
      }

      .footer-links {
        display: flex;
        gap: 2rem;

        a {
          color: var(--light-color);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }

    @media (max-width: 768px) {
      .footer-bottom {
        flex-direction: column;
        text-align: center;

        .footer-links {
          justify-content: center;
        }
      }
    }
  `]
})
export class FooterComponent {} 