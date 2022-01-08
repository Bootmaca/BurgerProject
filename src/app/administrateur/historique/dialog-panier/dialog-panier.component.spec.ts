import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPanierComponent } from './dialog-panier.component';

describe('DialogPanierComponent', () => {
  let component: DialogPanierComponent;
  let fixture: ComponentFixture<DialogPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
