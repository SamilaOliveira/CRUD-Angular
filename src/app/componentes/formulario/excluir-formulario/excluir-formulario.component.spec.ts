import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFormularioComponent } from './excluir-formulario.component';

describe('ExcluirFormularioComponent', () => {
  let component: ExcluirFormularioComponent;
  let fixture: ComponentFixture<ExcluirFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
