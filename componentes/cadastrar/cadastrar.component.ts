import { ContaService, Conta } from './../../service/conta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  conta:Conta ={
    id_transferencia: '',
    Cliente: '',
    valor: 0,
    Conta: ''
  }

  constructor(private ContaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }
  adicionar(){
    delete this.conta.id_transferencia

    this.ContaService.addConta(this.conta).subscribe({
      next: (resultado) => {
        console.log("Conta cadastrada com sucesso")
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
    this.router.navigate(['/home'])
  }

}
