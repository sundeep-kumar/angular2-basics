import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingComponentAndTemplateComponent } from './adding-component-and-template.component';

describe('AddingComponentAndTemplateComponent', () => {
  let component: AddingComponentAndTemplateComponent;
  let fixture: ComponentFixture<AddingComponentAndTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingComponentAndTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingComponentAndTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
