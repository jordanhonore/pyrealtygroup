import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <a routerLink="/">
            <img src="./assets/images/PYRealtyGroupLogo.png" alt="PY Realty Logo">
          </a>
        </div>
        <div class="nav-links">
          <a routerLink="/search" [queryParams]="{type: 'sale'}" routerLinkActive="active">For Sale</a>
          <a routerLink="/search" [queryParams]="{type: 'lease'}" routerLinkActive="active">For Lease</a>
          <a routerLink="/search" [queryParams]="{type: 'auction'}" routerLinkActive="active">Auctions</a>
          <a routerLink="/agents" routerLinkActive="active">Find Agents</a>
        </div>
        <div class="auth-buttons">
          <button class="btn-login">Sign In</button>
          <button class="btn-signup">Sign Up</button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
      height: 80px; /* Fixed height for header */
    }

    .nav-container {
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      height: 100%;
      display: flex;
      align-items: center;
      
      a {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
      }

      img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      
      a {
        color: var(--secondary-color);
        text-decoration: none;
        font-weight: 500;
        
        &:hover {
          color: var(--primary-color);
        }
        
        &.active {
          color: var(--primary-color);
        }
      }
    }

    .auth-buttons {
      display: flex;
      gap: 1rem;
      
      button {
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;
      }
      
      .btn-login {
        background: transparent;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
      }
      
      .btn-signup {
        background: var(--primary-color);
        border: none;
        color: white;
      }
    }
  `]
})
export class HeaderComponent {} 