import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { HeadComponent } from './components/head/head.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import {NgOptimizedImage} from "@angular/common";
import { ClothesSliderComponent } from './components/clothes-slider/clothes-slider.component';
import {HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { CatalogComponent } from './components/catalog/catalog.component';
import { BasketComponent } from './components/basket/basket.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CatalogSearchComponent } from './components/catalog-search/catalog-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatBadgeModule} from "@angular/material/badge";
import {FormsModule} from "@angular/forms";
import { CatalogElementsComponent } from './components/catalog-elements/catalog-elements.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';
import { ItemComponent } from './components/item/item.component';
import { FilterTitlePipe } from './pipes/filter-title.pipe';
import { FilterPricePipe } from './pipes/filter-price.pipe';

// register Swiper custom elements
register();

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'item/:id', component: BuyItemComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainSliderComponent,
    ClothesSliderComponent,
    MainPageComponent,
    FooterComponent,
    CatalogComponent,
    BasketComponent,
    ContactsComponent,
    CatalogSearchComponent,
    CatalogElementsComponent,
    BuyItemComponent,
    ItemComponent,
    FilterTitlePipe,
    FilterPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
