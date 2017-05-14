import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './../shared/star.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-guard.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
              canActivate: [ ProductDetailGuard ],
              component: ProductDetailComponent },
        ]),
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule { }
