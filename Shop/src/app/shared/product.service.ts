import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {FbResponse, Product} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  type = 'Phone';
  cartProducts: Product [] = [];
  constructor(private http: HttpClient) { }
  create(product){
    return this.http.post(``, product)
    .pipe(map( (res: FbResponse) => {
      return{
        ...product,
        id: res.name,
        date: new Date(product.date)
      };
    }));
  }
  getAll(){
    return this.http.get(``)
      .pipe(map (res => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }));
      }));
  }

  getById(id){
    return this.http.get(``)
      .pipe(map ( (res: Product) => {
        return {
            ...res,
            id,
            date: new Date(res.date)
          };
      }));
  }
  remove(id){
    return this.http.delete(``);
  }
  update(product: Product){
    return this.http.patch(``, product);
  }

  setType(type){
    this.type = type;
  }

  addProduct(product){
    this.cartProducts.push(product);
  }
}
