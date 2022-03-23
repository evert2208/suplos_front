import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGridComponent } from './img-grid.component';

describe('ImgGridComponent', () => {
  let component: ImgGridComponent;
  let fixture: ComponentFixture<ImgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
