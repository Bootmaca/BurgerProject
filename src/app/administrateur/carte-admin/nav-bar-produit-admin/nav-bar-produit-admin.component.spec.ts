import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProduitAdminComponent } from './nav-bar-produit-admin.component';

describe('NavBarProduitAdminComponent', () => {
  let component: NavBarProduitAdminComponent;
  let fixture: ComponentFixture<NavBarProduitAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarProduitAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarProduitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
