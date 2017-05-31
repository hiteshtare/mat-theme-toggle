import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemetoggleComponent } from './themetoggle.component';

describe('ThemetoggleComponent', () => {
  let component: ThemetoggleComponent;
  let fixture: ComponentFixture<ThemetoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
