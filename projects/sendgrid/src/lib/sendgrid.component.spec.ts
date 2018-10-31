import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendgridComponent } from './sendgrid.component';

describe('SendgridComponent', () => {
  let component: SendgridComponent;
  let fixture: ComponentFixture<SendgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
