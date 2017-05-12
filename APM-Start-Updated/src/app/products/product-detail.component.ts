import { Component} from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

// import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
// import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    // private sub: Subscription;

    constructor() {
    }

}
