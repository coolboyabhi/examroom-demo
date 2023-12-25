import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentServerAndDbComponent } from './tab-content-server-and-db.component';

describe('TabContentServerAndDbComponent', () => {
  let component: TabContentServerAndDbComponent;
  let fixture: ComponentFixture<TabContentServerAndDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabContentServerAndDbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabContentServerAndDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
