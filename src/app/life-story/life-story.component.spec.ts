import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeStoryComponent } from './life-story.component';

describe('LifeStoryComponent', () => {
  let component: LifeStoryComponent;
  let fixture: ComponentFixture<LifeStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeStoryComponent]
    });
    fixture = TestBed.createComponent(LifeStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
