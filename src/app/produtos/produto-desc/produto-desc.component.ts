import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotifyService } from 'src/app/notify.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-produto-desc',
  templateUrl: './produto-desc.component.html',
  styleUrls: ['./produto-desc.component.css']
})
export class ProdutoDescComponent implements OnInit {
  produto: IProduto | undefined;
  qnt = 1;

  constructor(
    private produtosServide: ProdutosService,
    private route: ActivatedRoute,
    private notify: NotifyService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    //console.log(produtoId);
    this.produto = this.produtosServide.getOne(produtoId);
    //console.log(this.produto);
  }

  addCarrinho(){
    this.notify.notifyMsg("O Produto foi adicionado com sucesso!!!");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      qtd: this.qnt
    };
    this.carrinhoService.addCarrinho(produto)
  }

}
