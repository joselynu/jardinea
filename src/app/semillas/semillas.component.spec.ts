import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemillasComponent } from './semillas.component';

describe('SemillasComponent', () => {
  let component: SemillasComponent;
  let fixture: ComponentFixture<SemillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
