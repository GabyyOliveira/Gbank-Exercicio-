import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  url = '/contas'

  constructor(private http: HttpClient) { }

  getContas(){
    return this.http.get(this.url)
  }

  getUmaConta(id:any){
    return this.http.get(this.url + '/' + id)
  }
  addConta(conta:Conta){
    return this.http.post(this.url, conta)
  }
  deletaConta(id:any){
    return this.http.delete(this.url + '/' + id)
  }
  editConta(id:any, conta:Conta){
    return this.http.put(this.url + '/' + id, conta)
  }
}

export interface Conta{
  id_transferencia?: string
  Cliente?: string
  valor?: number
  Conta?: string
}
