import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardsLayout } from './flash-cards-layout';

describe('FlashCardsLayout', () => {
  let component: FlashCardsLayout;
  let fixture: ComponentFixture<FlashCardsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashCardsLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashCardsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
