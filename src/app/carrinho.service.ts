import { Injectable } from '@angular/core';
import { NotifyService } from './notify.service';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  
  itens: IProdutoCarrinho[] = [];
  constructor() { }

  obterCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens
  }

  addCarrinho(produto : IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removeProdCarrinho(produto: number){
    this.itens = this.itens.filter(item => item.id !== produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
}
