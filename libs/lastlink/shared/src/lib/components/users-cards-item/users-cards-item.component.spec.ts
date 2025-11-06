import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersCardsItemComponent } from './users-cards-item.component';

describe('UsersCardsItemComponent', () => {
  let component: UsersCardsItemComponent;
  let fixture: ComponentFixture<UsersCardsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersCardsItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersCardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
