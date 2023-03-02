import { IProduct } from './../../models/product.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent {
    @Input() product: IProduct;
    
    isShowDetails = false;

}