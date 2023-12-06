import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppartmentComponent } from './list-appartment.component';

describe('ListAppartmentComponent', () => {
  let component: ListAppartmentComponent;
  let fixture: ComponentFixture<ListAppartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAppartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
