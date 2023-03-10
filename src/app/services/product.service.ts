import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError, tap } from "rxjs";
import { IProduct } from "../models/product.interface";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    products: IProduct[] = [];

    constructor(private http: HttpClient, private errorService: ErrorService){
    }

    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: { limit: 5 }
            })
        }).pipe(
            delay(2000),
            tap((products) => this.products = (products)),
            catchError(this.errorHandler.bind(this)),
        );
    }

    createProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
            .pipe(
                tap((prod) => this.products.push(prod)),
            );
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message);
        return throwError(() => error.message)
    }
}