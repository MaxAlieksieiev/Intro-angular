import { IProduct } from './models/product.interface';
import { Component } from '@angular/core';
import { products as data } from './data/product';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
