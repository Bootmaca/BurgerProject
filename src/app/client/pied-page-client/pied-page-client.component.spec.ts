import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedPageClientComponent } from './pied-page-client.component';

describe('PiedPageClientComponent', () => {
  let component: PiedPageClientComponent;
  let fixture: ComponentFixture<PiedPageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedPageClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedPageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
