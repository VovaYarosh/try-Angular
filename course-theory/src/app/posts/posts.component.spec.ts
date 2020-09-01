import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {EMPTY, of, throwError} from 'rxjs';
import {xit} from 'selenium-webdriver/testing';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;
  beforeEach(() => {
    service = new PostsService(null);
    component = new PostsComponent(service);
  });
  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
  it('should update posts length after ngOnOnit', () => {
    const posts = [1, 2, 3, 4];
    spyOn(service, 'fetch').and.returnValue( of([1, 2, 3])
    );
    component.ngOnInit();
    expect(component.posts.length).toBe(posts.length);
  });
  it('should add new post',  () => {
    const post = {title: 'test'};
    const spy = spyOn(service, 'create').and.returnValue(of(post));
    component.add('test');
    expect(spy).toHaveBeenCalled();
    expect(component.posts.includes(post)).toBeTruthy();
  });
  it('should set message to error message', () => {
    const error = 'error message';
    spyOn(service, 'create').and.returnValue(throwError(error));
    component.add('Post title');
    expect(component.message).toBe(error);
  });
});
