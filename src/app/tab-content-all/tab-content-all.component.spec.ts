import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentAllComponent } from './tab-content-all.component';

describe('TabContentAllComponent', () => {
  let component: TabContentAllComponent;
  let fixture: ComponentFixture<TabContentAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabContentAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
