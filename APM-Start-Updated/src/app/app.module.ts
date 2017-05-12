import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { StarComponent } from './shared/star.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductListComponent } from './products/product-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     { path: 'products', component: ProductListComponent },
     { path: 'product/:id', component: ProductDetailComponent },
     { path: 'welcome', component: WelcomeComponent },
     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
     { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
