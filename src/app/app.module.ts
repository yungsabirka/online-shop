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
// register Swiper custom elements
register();

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'contacts', component: CatalogComponent}
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
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
