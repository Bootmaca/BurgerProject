import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProduitComponent } from './nav-bar-produit.component';

describe('NavBarProduitComponent', () => {
  let component: NavBarProduitComponent;
  let fixture: ComponentFixture<NavBarProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
