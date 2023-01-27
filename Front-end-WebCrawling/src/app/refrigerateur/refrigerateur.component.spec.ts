import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigerateurComponent } from './refrigerateur.component';

describe('RefrigerateurComponent', () => {
  let component: RefrigerateurComponent;
  let fixture: ComponentFixture<RefrigerateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigerateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrigerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
