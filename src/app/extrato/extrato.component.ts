import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TitularesService } from '../titulares/titulares.service';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  @ViewChild('printable') printable!: ElementRef;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'contaOrigemId', 'contaDestinoId', 'valor', 'dataTransferenia'];
  contas: any[] = [];
  titular: any

  constructor(
    private service: TitularesService,
    private router: Router,
    private location: Location
  ) {
    this.dataSource = new MatTableDataSource<any>();

  }

  ngOnInit() {
    this.service.getTitulares();
    this.service.dataSource.data.filter((titular: any) => {
      if (titular.id !== this.service.getId()) {
        this.contas.push(titular.conta)
      }
    })
    setTimeout(() => {
      console.log(this.contas)
    }, 500);

    if (!this.service.getId()) {
      this.router.navigate(['titulares'])
    } else {
      this.service.getTitularById(this.service.getId()).subscribe((res: any) => {
        this.titular = res;
      })
      setTimeout(() => {
        this.service.extrato(this.titular?.conta?.id).subscribe((res: any) => {
          const sortedData = res.sort((a: any, b: any) => {
            return new Date(b.dataTransferencia).getTime() - new Date(a.dataTransferencia).getTime();
          });
          this.dataSource.data = sortedData;
        });
      }, 100);
    }
  }

  getNumeroContaDestino(contaDestinoId: number): string {
    const contaDestino = this.contas.find((conta: any) => conta.id === contaDestinoId);
    return contaDestino?.numero;
  }

  getNumeroContaOrigem(contaOrigemId: number): string {
    const contaOrigem = this.contas.find((conta: any) => conta.id === contaOrigemId);
    return contaOrigem?.numero;
  }

  imprimir() {
    const conteudoDiv = this.printable.nativeElement.innerHTML;
    const janelaImprimir = window.open('', '', 'width=800,height=600');
    if (janelaImprimir) {
      janelaImprimir.document.write('<html><head><title>Impressão</title>');
      janelaImprimir.document.write('<style>');
      janelaImprimir.document.write(`

        body {
          background-color: #fff;
          font-family: Arial, sans-serif;
        }

        h1 {
          color: #333;
          font-size: 24px;
        }

        button {
          display: none;
        }
      `);
      janelaImprimir.document.write('</style></head><body>');
      janelaImprimir.document.write(conteudoDiv);
      janelaImprimir.document.write('</body></html>');
      janelaImprimir.document.close();
      janelaImprimir.print();
    } else {
      console.error('Falha ao abrir a janela de impressão.');
    }
  }

  onCancel() {
    this.location.back()
    // this.courseService.onEdit();
  }

}
