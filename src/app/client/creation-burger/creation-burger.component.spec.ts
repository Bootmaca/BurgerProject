import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBurgerComponent } from './creation-burger.component';

describe('CreationBurgerComponent', () => {
  let component: CreationBurgerComponent;
  let fixture: ComponentFixture<CreationBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
