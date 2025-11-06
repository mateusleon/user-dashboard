import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorsDetailsComponent } from './errors-details.component';

describe('ErrorsDetailsComponent', () => {
  let component: ErrorsDetailsComponent;
  let fixture: ComponentFixture<ErrorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorsDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
