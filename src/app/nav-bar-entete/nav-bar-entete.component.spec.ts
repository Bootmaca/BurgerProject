import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEnteteComponent } from './nav-bar-entete.component';

describe('NavBarEnteteComponent', () => {
  let component: NavBarEnteteComponent;
  let fixture: ComponentFixture<NavBarEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEnteteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
