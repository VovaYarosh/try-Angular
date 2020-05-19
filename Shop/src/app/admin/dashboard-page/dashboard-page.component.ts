import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductService} from '../../shared/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  products = [];
  pSub: Subscription;
  rSub: Subscription;
  constructor(
    private  productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.pSub = this.productServ.getAll().subscribe(products => {
      this.products = products;
    });
  }
  ngOnDestroy(){
    if (this.pSub){
      this.pSub.unsubscribe();
    }

    if (this.rSub){
      this.rSub.unsubscribe();
    }
  }

  remove(id){
    this.rSub = this.productServ.remove(id).subscribe(() => {
      this.products = this.products.filter( product => product.id !== id);
    });
    }
}
