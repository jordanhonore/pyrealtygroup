import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';

interface Property {
  id: string;
  title: string;
  price: number;
  pricePerSqFt: number;
  sqft: number;
  type: string;
  imageUrl: string;
  location: string;
  propertyType: string;
}

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterModule, DecimalPipe],
  template: `
    <div class="property-card" [routerLink]="['/property', property.id]">
      <div class="property-image">
        <img [src]="property.imageUrl" [alt]="property.title">
        <div class="property-type">{{property.propertyType}}</div>
      </div>
      <div class="property-content">
        <div class="property-price">\${{property.price | number}}</div>
        <h3 class="property-title">{{property.title}}</h3>
        <p class="property-location">{{property.location}}</p>
        <div class="property-details">
          <div class="detail">
            <span class="label">Price/SF</span>
            <span class="value">\${{property.pricePerSqFt | number:'1.2-2'}}</span>
          </div>
          <div class="detail">
            <span class="label">Building Size</span>
            <span class="value">{{property.sqft | number}} SF</span>
          </div>
          <div class="detail">
            <span class="label">Property Type</span>
            <span class="value">{{property.type}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .property-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
    }

    .property-image {
      position: relative;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .property-type {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
      }
    }

    .property-content {
      padding: 1.5rem;
    }

    .property-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .property-title {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
      color: var(--dark-color);
    }

    .property-location {
      color: var(--secondary-color);
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    .property-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      border-top: 1px solid #eee;
      padding-top: 1rem;

      .detail {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .label {
          font-size: 0.75rem;
          color: var(--secondary-color);
        }

        .value {
          font-size: 0.875rem;
          color: var(--dark-color);
          font-weight: 500;
        }
      }
    }
  `]
})
export class PropertyCardComponent {
  @Input() property!: Property;
} 