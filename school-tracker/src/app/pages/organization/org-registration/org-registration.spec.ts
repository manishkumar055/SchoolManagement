import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRegistrationComponent } from './org-registration';

describe('OrgRegistration', () => {
  let component: OrgRegistrationComponent;
  let fixture: ComponentFixture<OrgRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgRegistrationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
