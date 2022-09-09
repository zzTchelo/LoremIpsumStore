import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDescComponent } from './produto-desc.component';

describe('ProdutoDescComponent', () => {
  let component: ProdutoDescComponent;
  let fixture: ComponentFixture<ProdutoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
