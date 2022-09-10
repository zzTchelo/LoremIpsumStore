import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { IProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  produtos: IProduto [] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    const produtos = this.produtosService.getAll();
    //console.log("Produtos:" + produtos)
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      //console.log("Desc: " + descricao)
      if (descricao) {
        console.log("entrou dentro do if")
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao))
        return;
      }
      this.produtos = produtos
    })
    //this.produtos = this.produtosService.getAll()
  }

}
