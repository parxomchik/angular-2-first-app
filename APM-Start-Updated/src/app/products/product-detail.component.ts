import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
// import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    // private sub: Subscription;

    constructor( private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log(111);
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
}
