import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  term = "";
  // products$: Observable<IProduct[]>;
  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {

  }
  title = 'angular app';
  isLoading = false;

  products: IProduct[] = [];

  ngOnInit(): void {
    this.isLoading = true;
    // this.products$ = this.productService.getAllProducts().pipe(tap(() => this.isLoading = false));
    this.productService.getAllProducts().subscribe(() => {
      this.isLoading = false;
    });
  }
}
