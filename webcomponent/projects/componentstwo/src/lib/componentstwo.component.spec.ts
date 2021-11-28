import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentstwoComponent } from './componentstwo.component';

describe('ComponentstwoComponent', () => {
  let component: ComponentstwoComponent;
  let fixture: ComponentFixture<ComponentstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentstwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
