import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitularesComponent } from './titulares.component';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TitularesService {

apiUrl = 'http://localhost:9080/'
showTable: boolean = true;
titulares: any
dataSource: MatTableDataSource<any>;
displayedColumns: string[] = ['id', 'nome', 'cpf', 'conta', 'agencia', 'saldo', 'actions'];

private id!: number;
private contaId!: number;

setId(id: number) {
  this.id = id;
}
getId() {
  return this.id;
}

setContaId(id: number) {
  this.contaId = id
}

getContaId() {
  return this.contaId;
}

constructor(
  private http: HttpClient,
) {
  this.dataSource = new MatTableDataSource<any>();

 }


  createTitular(titular: any) {
    return this.http.post(`${this.apiUrl}titular`, titular)
  }

  getTitulares() {
    this.http.get(`${this.apiUrl}titular`).subscribe((res: any) => {
      this.dataSource.data = res
      console.log(this.titulares)
    })
  }

  getTitularById(id: number) {
    return this.http.get(`${this.apiUrl}titular/${id}`)
  }

  updateTitular(titular: any) {
    return this.http.put(`${this.apiUrl}titular/${titular.id}`, titular)
  }

  deleteTitular(id: number) {
    return this.http.delete(`${this.apiUrl}titular/${id}`)
  }

  transferir(contaOrigem: number, contaDestino: number, valor: string) {
    const obj = {
      contaOrigemId: contaOrigem,
      contaDestinoId: contaDestino,
      valor: parseInt(valor)
    }
    return this.http.post(`${this.apiUrl}transferencia`, { ...obj })
  }

  extrato(contaId: number) {
    return this.http.get(`${this.apiUrl}titular/${contaId}/transferencias`)
  }
}
