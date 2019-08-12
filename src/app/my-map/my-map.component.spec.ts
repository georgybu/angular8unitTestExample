import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyMapComponent} from './my-map.component';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';

describe('MyMapComponent', () => {
  let component: MyMapComponent;
  let fixture: ComponentFixture<MyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgmCoreModule.forRoot()],
      declarations: [
        // AgmMap,
        MyMapComponent
      ],
      providers: [
        {
          provide: MapsAPILoader,
          useValue: {load: jest.fn().mockReturnValue(new Promise(resolve => resolve(true)))}
        }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
