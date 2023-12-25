import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentBusinessOperationalComponent } from './tab-content-business-operational.component';

describe('TabContentBusinessOperationalComponent', () => {
  let component: TabContentBusinessOperationalComponent;
  let fixture: ComponentFixture<TabContentBusinessOperationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabContentBusinessOperationalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentBusinessOperationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
