import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWithBrandComponent } from './logo-with-brand.component';

describe('LogoWithBrandComponent', () => {
  let component: LogoWithBrandComponent;
  let fixture: ComponentFixture<LogoWithBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoWithBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoWithBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
