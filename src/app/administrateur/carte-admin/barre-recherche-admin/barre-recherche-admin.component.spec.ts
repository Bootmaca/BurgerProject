import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRechercheAdminComponent } from './barre-recherche-admin.component';

describe('BarreRechercheAdminComponent', () => {
  let component: BarreRechercheAdminComponent;
  let fixture: ComponentFixture<BarreRechercheAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreRechercheAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreRechercheAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
