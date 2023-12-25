import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentSupportOperationalComponent } from './tab-content-support-operational.component';

describe('TabContentSupportOperationalComponent', () => {
  let component: TabContentSupportOperationalComponent;
  let fixture: ComponentFixture<TabContentSupportOperationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabContentSupportOperationalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentSupportOperationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
