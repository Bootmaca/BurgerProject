import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitPersonnalisationComponent } from './produit-personnalisation.component';

describe('ProduitPersonnalisationComponent', () => {
  let component: ProduitPersonnalisationComponent;
  let fixture: ComponentFixture<ProduitPersonnalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitPersonnalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitPersonnalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
