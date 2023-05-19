import { Component, OnInit, ViewChild } from '@angular/core';
import { TitularesService } from '../titulares/titulares.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trasferencia',
  templateUrl: './trasferencia.component.html',
  styleUrls: ['./trasferencia.component.css']
})

export class TrasferenciaComponent implements OnInit {
  @ViewChild('form', {static: false}) form!: NgForm
  titular: any
  titulares: any
  titularesFiltrados: any
  contaOrigem: any
  contaDestino: any
  valor: any

  constructor(
    public service: TitularesService,
    private router: Router,
    private snackBar: MatSnackBar

  ) {
    if (!this.service.getId()) {
      this.router.navigate(['/titulares'])
    }
    this.titulares = this.service.dataSource.data
    this.titularesFiltrados = this.service.dataSource.data.filter(titular => titular.id !== this.service.getId())

  }

  ngOnInit() {
    this.service.getTitularById(this.service.getId()).subscribe((res: any) => {
      this.titular = res;
      this.contaOrigem = this.titular.conta.id
    })
  }

  onTransferir() {
    if (this.contaDestino && this.valor && this.contaOrigem) {
      this.service.transferir(this.contaOrigem, this.contaDestino, this.valor).subscribe((res: any) => {
      })
      this.router.navigate(['/titulares'])
      this.snackBar.open('Transferência realizada com sucesso!', 'Ok', {
        duration: 3000
      })
    } else {
      this.snackBar.open('Preencha todos os campos!', 'Ok', {
        duration: 3000
      })
    }
  }

  onCancel() {
    this.router.navigate(['/titulares'])
  }
}
