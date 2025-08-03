import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPromptComponent } from './info-prompt.component';

describe('InfoPromptComponent', () => {
  let component: InfoPromptComponent;
  let fixture: ComponentFixture<InfoPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
