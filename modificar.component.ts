import { Router , ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ContaService, Conta} from '../../service/conta.service'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  conta: Conta = {
    id_transferencia: '',
    Cliente: '',
    valor: 0,
    Conta:''
  }

  constructor(private ContaService: ContaService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activateRoute.snapshot.params['id']
    console.log('id de entrada: ' + id_entrada)
    this.ContaService.getUmaConta(id_entrada).subscribe({
      next: (resultado) => {
        console.log(resultado),
        this.conta = resultado
      },
      error: (erro) => console.error(erro),
      complete: () => console.info('conta encontrada')
    })
  }
  modificar(){
    this.ContaService.editConta(this.conta.id_transferencia, this.conta).subscribe({
      next: (resultado) => {console.log("Conta editada com sucesso")},
      error: (erro) => console.error(erro),
      complete: () => console.info('Conta editada')
    })
    this.router.navigate(['/home'])
  }

}
