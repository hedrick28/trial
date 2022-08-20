import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxMyLibComponent } from './nx-my-lib.component';

describe('NxMyLibComponent', () => {
  let component: NxMyLibComponent;
  let fixture: ComponentFixture<NxMyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxMyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxMyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
