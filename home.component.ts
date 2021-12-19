import { ContaService, Conta } from './../../service/conta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListarContas: Conta[]

  constructor(private ContaService: ContaService, private router: Router) {
    this.ListarContas = []
  }

  ngOnInit(): void {
    this.listarContas()
  }

  listarContas(){
    this.ContaService.getContas().subscribe({
      next: (resultado) => {
        console.log(resultado)
        this.ListarContas = <any>resultado
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('complete')
    })
  }
  excluir(id:any){
    this.ContaService.deletaConta(id).subscribe({
      next: (resultado) => {
        console.log("Conta Excluida")
        this.listarContas()
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('Processo de exclusão completado')
    })
  }
  editar(id:any){
    this.router.navigate(['/edit/' + id])
  }

}
