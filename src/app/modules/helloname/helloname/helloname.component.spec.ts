import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellonameComponent } from './helloname.component';

describe('HellonameComponent', () => {
  let component: HellonameComponent;
  let fixture: ComponentFixture<HellonameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellonameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HellonameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
