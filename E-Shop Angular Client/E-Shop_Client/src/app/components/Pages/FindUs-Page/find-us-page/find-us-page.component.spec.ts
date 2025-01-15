import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUsPageComponent } from './find-us-page.component';

describe('FindUsPageComponent', () => {
  let component: FindUsPageComponent;
  let fixture: ComponentFixture<FindUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindUsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
