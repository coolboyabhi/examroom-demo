import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentListComponent } from './tab-content-list.component';

describe('TabContentListComponent', () => {
  let component: TabContentListComponent;
  let fixture: ComponentFixture<TabContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabContentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
