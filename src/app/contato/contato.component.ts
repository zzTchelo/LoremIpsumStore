import { Component, ENVIRONMENT_INITIALIZER, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/notify.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  formCont = this.formB.group({
    nome: ["", [
      Validators.minLength(3),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(15),
      Validators.required
    ]],
  });
  
  constructor(
    private notify: NotifyService,
    private formB: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  enviar(){
    this.formCont.reset();
    this.notify.notifyMsg("Solicitação enviada com sucesso");
}

}
