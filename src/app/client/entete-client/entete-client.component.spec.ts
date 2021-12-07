import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteClientComponent } from './entete-client.component';

describe('EnteteClientComponent', () => {
  let component: EnteteClientComponent;
  let fixture: ComponentFixture<EnteteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
