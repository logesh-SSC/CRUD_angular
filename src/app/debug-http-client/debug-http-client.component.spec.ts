import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugHttpClientComponent } from './debug-http-client.component';

describe('DebugHttpClientComponent', () => {
  let component: DebugHttpClientComponent;
  let fixture: ComponentFixture<DebugHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugHttpClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
