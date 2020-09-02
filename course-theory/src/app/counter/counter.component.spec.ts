import {ComponentFixture, TestBed} from '@angular/core/Testing';
import {CounterComponent} from './counter.component';
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component).toBeDefined();
  });
  it('should render counter property', () => {
    let num = 42;
    component.counter = num;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toContain(num.toString());
  });
});
