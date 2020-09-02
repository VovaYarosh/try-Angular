import {ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

class RouterStub {
  navigate(path: string[]){}
}

class ActivatedRouteStub {
  private subject = new Subject();
  push(params: Params){
    this.subject.next(params);
  }
  get params(){
    return this.subject.asObservable();
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
      ],
      imports: [RouterTestingModule]
    });
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should navigate to posts if go back', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.goBack();
    expect(spy).toHaveBeenCalledWith(['/posts']);
  });
  it('should navigate to 404 if id = 0', () => {
    let router = TestBed.get(Router);
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    let spy = spyOn(router, 'navigate');
    route.push({id: '0'});
    expect(spy).toHaveBeenCalledWith(['/404']);
  });
  it('should have router-outlet directive', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });
});
