import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
              canActivate: [ ProductDetailGuard ],
              component: ProductDetailComponent },
        ]),
    ],
    exports: [ RouterModule ]
})

export class ProductRoutingModule { }
