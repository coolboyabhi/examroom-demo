import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentItemsComponent } from './tab-content-items.component';

describe('TabContentItemsComponent', () => {
  let component: TabContentItemsComponent;
  let fixture: ComponentFixture<TabContentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabContentItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
