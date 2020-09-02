import {ComponentFixture, TestBed} from '@angular/core/Testing';
import {CounterComponent} from './counter.component';

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
});
