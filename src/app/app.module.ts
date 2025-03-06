import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../../py-realty/src/app/components/header/header.component';
import { FooterComponent } from '../../py-realty/src/app/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from '../../py-realty/src/app/pages/search/search.component';
import { PropertyDetailComponent } from '../../py-realty/src/app/pages/property-detail/property-detail.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { SearchFiltersComponent } from '../../py-realty/src/app/components/search-filters/search-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    PropertyDetailComponent,
    PropertyCardComponent,
    SearchFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 