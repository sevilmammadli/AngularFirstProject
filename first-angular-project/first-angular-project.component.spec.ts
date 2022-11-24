import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularProjectComponent } from './first-angular-project.component';

describe('FirstAngularProjectComponent', () => {
  let component: FirstAngularProjectComponent;
  let fixture: ComponentFixture<FirstAngularProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAngularProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAngularProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
