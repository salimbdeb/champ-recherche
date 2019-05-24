import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParticulierComponent } from './recherche-particulier.component';

describe('RechercheParticulierComponent', () => {
  let component: RechercheParticulierComponent;
  let fixture: ComponentFixture<RechercheParticulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheParticulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheParticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
