import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotifyService } from '../notify.service';
import { IProdutoCarrinho } from '../produtos/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] =[]
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
    private notify: NotifyService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho()
    this.totalCalc();
  }

  totalCalc(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.qtd), 0)
  }

  removeProdCarrinho(produto: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produto);
    this.carrinhoService.removeProdCarrinho(produto);
    this.totalCalc();
  }

  comprar(){
    //localStorage.clear;
    this.carrinhoService.limparCarrinho();
    this.notify.notifyMsg("Compra efetuada com sucesso!!!");
    this.router.navigate(["produtos"]);
    console.log(this.itensCarrinho);
  }
}
