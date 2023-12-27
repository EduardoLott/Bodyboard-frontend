import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryScreenComponent } from './jury-screen.component';

describe('JuryScreenComponent', () => {
  let component: JuryScreenComponent;
  let fixture: ComponentFixture<JuryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuryScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
