import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {UsersService} from './users.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [{provide: UsersService, useValue: {}}]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(UsersService);
    service.fetchUsers = () => of([]);
  }));

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng8test1'`, () => {
    expect(component.title).toEqual('ng8test1');
  });

  it('initializes the component', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(service.fetchUsers.toHaveBeenCalled);
  }));

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng8test1!');
  });
});
